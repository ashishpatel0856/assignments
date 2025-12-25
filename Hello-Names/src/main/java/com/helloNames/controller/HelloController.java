package com.helloNames.controller;


import com.helloNames.dto.HelloRequestdto;
import com.helloNames.service.HelloService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/names")
@CrossOrigin(origins = "http://localhost:5173")
public class HelloController {

    private final HelloService helloService;

    @PostMapping
    public ResponseEntity<Map<String,Object>> addNewName(@Valid @RequestBody HelloRequestdto requestdto){
        helloService.addNewName(requestdto.getName().trim());
        Map<String,Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Name stored successfully");

        return new ResponseEntity<>(response,HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<Map<String, Object>> getNamesList() {
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("names", helloService.getNamesList());
        return ResponseEntity.ok(response);
    }

}
