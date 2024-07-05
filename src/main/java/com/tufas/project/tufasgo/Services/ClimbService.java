package com.tufas.project.tufasgo.Services;

import com.tufas.project.tufasgo.Entities.Climb;
import com.tufas.project.tufasgo.Entities.User;
import com.tufas.project.tufasgo.Repositories.ClimbRepository;
import com.tufas.project.tufasgo.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ClimbService {
    private ClimbRepository repository;
    private UserRepository userRepository;;
    @Autowired
    public ClimbService(ClimbRepository repository, UserRepository userRepository) {
        this.repository = repository;
        this.userRepository = userRepository;
    }

    public Iterable<Climb> index() {
        return repository.findAll();
    }

    public Climb show(String id) {
        return repository.findById(id).get();
    }

    public Climb create(Climb climb) {
        return repository.save(climb);
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

    public Climb addUserToClimbLog(String climbId, Long userId) {
        Optional<Climb> climbOptional = repository.findById(climbId);
        Optional<User> userOptional = userRepository.findById(userId);

        if (climbOptional.isPresent() && userOptional.isPresent()) {
            Climb climbToLog = climbOptional.get();
            User userLoggingClimb = userOptional.get();
            climbToLog.getClimbLog().add(userLoggingClimb);
            repository.save(climbToLog);
            return climbToLog;
        }
        else {
            throw new RuntimeException("Climb or User cannot be found.");
        }
    }
}
