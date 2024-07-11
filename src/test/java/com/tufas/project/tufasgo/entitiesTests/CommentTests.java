package com.tufas.project.tufasgo.entitiesTests;

import com.tufas.project.tufasgo.Entities.Comment;
import com.tufas.project.tufasgo.Entities.User;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

public class CommentTests {

    public static List<Comment> createMockComments() {
        List<Comment> mockComments = new ArrayList<>();

        Instant created = Instant.now();
        Instant updated = Instant.now();

        Comment comment1 = new Comment();
        comment1.setId(1L);
        comment1.setSender(new User());
        comment1.setMessage("Had fun with this one!");
        comment1.setClimbId("23749w8f-sf98sf-ns8348-99sfdvj4332");
        comment1.setCreated(created);
        comment1.setUpdated(updated);

        Comment comment2 = new Comment();
        comment2.setId(2L);
        comment2.setSender(new User());
        comment2.setMessage("Had fun with this one too!");
        comment2.setClimbId("23739w8f-hy98sf-ns7518-99ghbnj4332");
        comment2.setCreated(created);
        comment2.setUpdated(updated);

        mockComments.add(comment1);
        mockComments.add(comment2);

        return mockComments;
    }

    @Test
    public void commentInstanceofCommentTest() {
        Comment comment = new Comment();
        Assertions.assertTrue(comment instanceof Comment);
    }

    @Test
    public void getCommentClimbIdTest() {
        User user = new User();
        Comment comment1 = new Comment();
        comment1.setClimbId("23749w8f-sf98sf-ns8348-99sfdvj4332");
        comment1.setMessage("Awesome climb, was able to send in 5 tries.");
        comment1.setSender(user);
        comment1.setCreated(Instant.now());
        comment1.setUpdated(Instant.now());

        Assertions.assertEquals("23749w8f-sf98sf-ns8348-99sfdvj4332", comment1.getClimbId());
    }

    @Test
    public void getCommentMessageTest() {
        User user = new User();
        Comment comment1 = new Comment();
        comment1.setClimbId("23749w8f-sf98sf-ns8348-99sfdvj4332");
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
        comment1.setClimbId("23749w8f-sf98sf-ns8348-99sfdvj4332");
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
        comment1.setClimbId("23749w8f-sf98sf-ns8348-99sfdvj4332");
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
        comment1.setClimbId("23749w8f-sf98sf-ns8348-99sfdvj4332");
        comment1.setMessage("Awesome climb, was able to send in 5 tries.");
        comment1.setSender(user);
        comment1.setCreated(Instant.now());
        comment1.setUpdated(Instant.now());

        Assertions.assertNotNull(comment1.getUpdated());
    }
}
