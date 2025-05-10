package com.ct.product.Controller;

import com.ct.product.DTO.LoginRequestDTO;
import com.ct.product.DTO.ResponseTO;
import com.ct.product.Service.LoginService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {

    private final LoginService loginService;

    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequestDTO loginRequest) {
        ResponseTO result = loginService.login(loginRequest.getUsername(), loginRequest.getPassword());
        return result.getMessage().equals("Login Successful!")
                ? ResponseEntity.ok().body(result)
                : ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(result);
    }

}
