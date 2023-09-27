package com.Oxen.StudentLibrarySystem.advice;

import jakarta.persistence.PersistenceException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice

public class RestExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(SQLException.class)
    public Map<String, String> handleSQLException(PersistenceException e) {
        Map<String, String> errorMap = new HashMap<>();
        errorMap.put(e.getLocalizedMessage(),e.getMessage());
        return errorMap;
    }



}
