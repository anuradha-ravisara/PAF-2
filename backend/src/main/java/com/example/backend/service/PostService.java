package com.example.backend.service;

import java.util.List;

import com.example.backend.model.Post;

public interface PostService {

    public Post savePost(Post post);
    public List<Post> getAllPosts();
    public void deletePost(int pid);
}
