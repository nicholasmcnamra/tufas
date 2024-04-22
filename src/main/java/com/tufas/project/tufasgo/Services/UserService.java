package com.tufas.project.tufasgo.Services;

import com.tufas.project.tufasgo.Entities.User;
import com.tufas.project.tufasgo.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private UserRepository repository;
    @Autowired
    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    public Iterable<User> index() {
        return repository.findAll();
    }

    public User show(Long id) {
        return repository.findById(id).get();
    }

    public User create(User user) {
        return repository.save(user);
    }

    public User update(Long id, User newUserData) {
        User originalUser = repository.findById(id).get();
        originalUser.setFirstName(newUserData.getFirstName());
        originalUser.setLastName(newUserData.getLastName());
        originalUser.setUserName(newUserData.getUserName());
        originalUser.setPassword(newUserData.getPassword());
        originalUser.setEmail(newUserData.getEmail());
        originalUser.setLastLogin(newUserData.getLastLogin());
        originalUser.setUserClimbs(newUserData.getUserClimbs());
        return repository.save(originalUser);
    }

    public Boolean delete(Long id) {
        repository.deleteById(id);
        return true;
    }
}
