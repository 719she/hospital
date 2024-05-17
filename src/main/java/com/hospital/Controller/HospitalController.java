package com.hospital.Controller;

import com.hospital.Dto.UserDto;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class HospitalController {

    @GetMapping("/")
    public String home() {
        return "hospital/h_home";
    }

    @PostMapping ("/")
    public String login(UserDto userDto) {
        System.out.println(userDto.getId());
        System.out.println(userDto.getPassword());
        if((userDto.getId().equals("1111")) && (userDto.getPassword().equals("1111"))) {
            return "hospital/h_1111";
        }
        else
            return "redirect:/";
    }

    @GetMapping("/h_menu")
    public String menu() {
        return "hospital/h_menu";
    }

}
