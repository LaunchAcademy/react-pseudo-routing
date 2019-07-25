package com.launchacademy.reactpseudorouting.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/widgets")
public class WidgetsController {
  @GetMapping
  public String index() {
    return "widgets/index";
  }

  @GetMapping("/show")
  public String show() {
    return "widgets/show";
  }
}
