package com.programming.techie.springredditclone.controller;

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
            "/create-post",
            "/create-subreddit",
            "/view-post/{id}",
            "/user-profile/{name}",
            "/account-verification/{token}"
    })
    public String forwardToIndex() {
        return "forward:/index.html";
    }
}
