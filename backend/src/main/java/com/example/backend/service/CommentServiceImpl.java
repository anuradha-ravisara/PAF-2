package com.example.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Comment;
import com.example.backend.repository.CommentRepository;

@Service
public class CommentServiceImpl implements CommentService {

@Autowired
private CommentRepository commentRepository;

@Override
public Comment saveComment(Comment comment) {
    return commentRepository.save(comment);
}

@Override
public List<Comment> getAllComments() {
    return commentRepository.findAll();
}

@Override
public void deleteComment(int cid) {
    commentRepository.deleteById(cid);
    
}


   
}
