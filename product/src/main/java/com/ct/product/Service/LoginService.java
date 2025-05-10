package com.ct.product.Service;

import com.ct.product.DTO.ResponseTO;
import com.ct.product.Domain.User;
import com.ct.product.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {
    @Autowired
    private UserRepository userRepository;

    public ResponseTO login(String username, String password) {
        User user = userRepository.findByUsername(username);
        ResponseTO responseTO = new ResponseTO();
        if (user != null && user.getPassword().equals(password)) {
            responseTO.setMessage("Login Successful!");
        } else {
            responseTO.setMessage("Invalid Credentials");
        }
        return responseTO;
    }
}
