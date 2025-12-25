package com.helloNames.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandlers {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String,Object>> handleErrors(MethodArgumentNotValidException exception){
        Map<String,Object> body = new HashMap<>();
        body.put("success", false);
        body.put("messages", exception.getBindingResult().getFieldError().getDefaultMessage());

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(body);
    }
}
