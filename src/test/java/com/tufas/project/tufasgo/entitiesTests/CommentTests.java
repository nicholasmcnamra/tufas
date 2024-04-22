package com.tufas.project.tufasgo.entitiesTests;

import com.tufas.project.tufasgo.Entities.Comment;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class CommentTests {
    @Test
    public void commentInstanceofCommentTest() {
        Comment comment = new Comment();
        Assertions.assertTrue(comment instanceof Comment);
    }
}
