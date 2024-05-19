package com.example.backend.service;

import java.util.List;

import com.example.backend.model.Comment;

public interface CommentService {
    public Comment saveComment(Comment comment);
    public List<Comment> getAllComments();
    public void deleteComment(int cid);
}
