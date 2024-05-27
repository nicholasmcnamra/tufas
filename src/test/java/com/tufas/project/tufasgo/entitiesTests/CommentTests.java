package com.tufas.project.tufasgo.entitiesTests;

import com.tufas.project.tufasgo.Entities.Comment;
import com.tufas.project.tufasgo.Entities.User;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.time.Instant;

public class CommentTests {


    @Test
    public void commentInstanceofCommentTest() {
        Comment comment = new Comment();
        Assertions.assertTrue(comment instanceof Comment);
    }

    @Test
    public void getCommentClimbIdTest() {
        User user = new User();
        Comment comment1 = new Comment();
        comment1.setClimbId(1L);
        comment1.setMessage("Awesome climb, was able to send in 5 tries.");
        comment1.setSender(user);
        comment1.setCreated(Instant.now());
        comment1.setUpdated(Instant.now());

        Assertions.assertEquals(1L, comment1.getClimbId());
    }

    @Test
    public void getCommentMessageTest() {
        User user = new User();
        Comment comment1 = new Comment();
        comment1.setClimbId(1L);
        comment1.setMessage("Awesome climb, was able to do it in 5 tries.");
        comment1.setSender(user);
        comment1.setCreated(Instant.now());
        comment1.setUpdated(Instant.now());

        Assertions.assertEquals("Awesome climb, was able to do it in 5 tries.", comment1.getMessage());
    }

    @Test
    public void getCommentSenderTest() {
        User user = new User();
        Comment comment1 = new Comment();
        comment1.setClimbId(1L);
        comment1.setMessage("Awesome climb, was able to send in 5 tries.");
        comment1.setSender(user);
        comment1.setCreated(Instant.now());
        comment1.setUpdated(Instant.now());

        Assertions.assertEquals(user, comment1.getSender());
    }

    @Test
    public void getCommentCreatedTest() {
        User user = new User();
        Comment comment1 = new Comment();
        comment1.setClimbId(1L);
        comment1.setMessage("Awesome climb, was able to send in 5 tries.");
        comment1.setSender(user);
        comment1.setCreated(Instant.now());
        comment1.setUpdated(Instant.now());

        Assertions.assertNotNull(comment1.getCreated());
    }

    @Test
    public void getCommentUpdatedTest() {
        User user = new User();
        Comment comment1 = new Comment();
        comment1.setClimbId(1L);
        comment1.setMessage("Awesome climb, was able to send in 5 tries.");
        comment1.setSender(user);
        comment1.setCreated(Instant.now());
        comment1.setUpdated(Instant.now());

        Assertions.assertNotNull(comment1.getUpdated());
    }
}
