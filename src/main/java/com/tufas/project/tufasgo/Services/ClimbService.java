package com.tufas.project.tufasgo.Services;

import com.tufas.project.tufasgo.Entities.Climb;
import com.tufas.project.tufasgo.Entities.ClimbLog;
import com.tufas.project.tufasgo.Entities.ClimbRequestWithUserId;
import com.tufas.project.tufasgo.Entities.User;
import com.tufas.project.tufasgo.Repositories.ClimbLogRepository;
import com.tufas.project.tufasgo.Repositories.ClimbRepository;
import com.tufas.project.tufasgo.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class ClimbService {
    private ClimbRepository repository;
    private UserRepository userRepository;
    private ClimbLogRepository climbLogRepository;
    @Autowired
    public ClimbService(ClimbRepository repository, UserRepository userRepository, ClimbLogRepository climbLogRepository) {
        this.repository = repository;
        this.userRepository = userRepository;
        this.climbLogRepository = climbLogRepository;
    }

    public Iterable<Climb> index() {
        return repository.findAll();
    }

    public Climb show(String id) {
        return repository.findById(id).get();
    }

    @Transactional
    public Climb create(Climb climb) {
        Climb newClimb = repository.save(climb);
        repository.flush();
        return newClimb;
    }

    public Climb update(String id, Climb newClimbData) {
        Climb originalClimb = repository.findById(id).get();
        originalClimb.setClimbName(newClimbData.getClimbName());
        originalClimb.setClimbType(newClimbData.getClimbType());
        originalClimb.setClimbGrade(newClimbData.getClimbGrade());
        originalClimb.setLatitude(newClimbData.getLatitude());
        originalClimb.setLongitude(newClimbData.getLongitude());
        return repository.save(originalClimb);
    }

    public Boolean delete(String id) {
        repository.deleteById(id);
        return true;
    }
    @Transactional
    public ClimbLog addUserToClimbLog(String climbId, Long userId, String area) {
        Optional<Climb> climbOptional = repository.findById(climbId);
        Optional<User> userOptional = userRepository.findById(userId);

        if (climbOptional.isPresent() && userOptional.isPresent()) {
            Climb climbToLog = climbOptional.get();
            User userLoggingClimb = userOptional.get();
            ClimbLog climbLog = new ClimbLog(area, climbToLog, userLoggingClimb);
            climbLogRepository.save(climbLog);
            return climbLog;
        }
        else {
            throw new RuntimeException("Climb or User cannot be found.");
        }
    }

    public Iterable<ClimbLog> getUserClimbLog(User user) {
        return climbLogRepository.findByUser(user);
    }
}
