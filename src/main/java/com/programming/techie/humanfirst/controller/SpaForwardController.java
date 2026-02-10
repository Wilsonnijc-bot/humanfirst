package com.programming.techie.humanfirst.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SpaForwardController {

    @GetMapping(value = {
            "/",
            "/login",
            "/sign-up",
            "/signup",
            "/list-subreddits",
            "/create",
            "/create-post",
            "/create-subreddit",
            "/view-post/{id}",
            "/r/{subreddit}/comments/{id}",
            "/r/{subreddit}/comments/{id}/{slug}",
            "/user-profile/{name}",
            "/account-verification/{token}",
            "/topics",
            "/topics/archive",
            "/topics/{slug}",
            "/communities",
            "/communities/{slug}",
            "/my-communities",
            "/my-posts",
            "/my-likes",
            "/my-comments"
    })
    public String forwardToIndex() {
        return "forward:/index.html";
    }
}
