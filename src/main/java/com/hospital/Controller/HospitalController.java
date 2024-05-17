package com.hospital.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HospitalController {

    @GetMapping("/")
    public String home() {
        return "hospital/h_home";
    }
}
