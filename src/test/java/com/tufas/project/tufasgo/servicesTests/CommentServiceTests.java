package com.tufas.project.tufasgo.servicesTests;

import com.tufas.project.tufasgo.Entities.Climb;
import com.tufas.project.tufasgo.Entities.Comment;
import com.tufas.project.tufasgo.Repositories.ClimbRepository;
import com.tufas.project.tufasgo.Repositories.CommentRepository;
import com.tufas.project.tufasgo.Services.ClimbService;
import com.tufas.project.tufasgo.Services.CommentService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.time.Instant;
import java.util.List;
import java.util.Optional;

import static com.tufas.project.tufasgo.entitiesTests.CommentTests.createMockComments;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;

public class CommentServiceTests {
    @Mock
    private CommentRepository commentRepository;

    @InjectMocks
    private CommentService commentService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testIndex() {
        List<Comment> comments = createMockComments();

        when(commentRepository.findAll()).thenReturn(comments);

        Iterable<Comment> result = commentService.index();

        Assertions.assertNotNull(result);
        Assertions.assertEquals(comments, result);
    }

    @Test
    public void testShow() {
        List<Comment> comments = createMockComments();

        when(commentRepository.findById(1l)).thenReturn(Optional.of(comments.get(0)));

        Comment result = commentService.show(1l);

        Assertions.assertNotNull(result);
        Assertions.assertEquals(comments.get(0), result);
    }

    @Test
    public void testCreate() {
        List<Comment> comments = createMockComments();

        when(commentRepository.save(comments.get(0))).thenReturn(comments.get(0));

        Comment result = commentService.create(comments.get(0));

        Assertions.assertNotNull(result);
        Assertions.assertEquals(comments.get(0), result);
    }

    @Test
    public void testUpdate() {
        List<Comment> comments = createMockComments();
        Comment newCommentData = comments.get(0);
        newCommentData.setUpdated(Instant.now());

        when(commentRepository.findById(1l)).thenReturn(Optional.of(comments.get(0)));
        when(commentRepository.save(comments.get(0))).thenReturn(comments.get(0));

        Comment result = commentService.update(1l, newCommentData);

        Assertions.assertNotNull(result);
        Assertions.assertEquals(newCommentData.getUpdated(), result.getUpdated());
    }

    @Test
    public void testDelete() {
        doNothing().when(commentRepository).deleteById(1l);

        Assertions.assertTrue(commentService.delete(1l));
    }
}
