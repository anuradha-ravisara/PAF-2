package com.example.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.backend.model.Post;
import com.example.backend.repository.PostRepository;

@Service
public class PostServiceImpl implements PostService {

@Autowired
private PostRepository postRepository;

@Override
public Post savePost(Post post) {   
    return postRepository.save(post);
}

@Override
public List<Post> getAllPosts() {
    return postRepository.findAll();
}

@Override
public void deletePost(int pid) {
    postRepository.deleteById(pid);
    
}


    
}