package com.tufas.project.tufasgo.Services;

import com.tufas.project.tufasgo.Entities.Climb;
import com.tufas.project.tufasgo.Entities.User;
import com.tufas.project.tufasgo.Repositories.ClimbRepository;
import com.tufas.project.tufasgo.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClimbService {
    private ClimbRepository repository;
    @Autowired
    public ClimbService(ClimbRepository repository) {
        this.repository = repository;
    }

    public Iterable<Climb> index() {
        return repository.findAll();
    }

    public Climb show(Long id) {
        return repository.findById(id).get();
    }

    public Climb create(Climb climb) {
        return repository.save(climb);
    }

    public Climb update(Long id, Climb newClimbData) {
        Climb originalClimb = repository.findById(id).get();
        originalClimb.setClimbName(newClimbData.getClimbName());
        originalClimb.setClimbType(newClimbData.getClimbType());
        originalClimb.setClimbGrade(newClimbData.getClimbGrade());
        originalClimb.setLatitude(newClimbData.getLatitude());
        originalClimb.setLongitude(newClimbData.getLongitude());
        return repository.save(originalClimb);
    }

    public Boolean delete(Long id) {
        repository.deleteById(id);
        return true;
    }
}
