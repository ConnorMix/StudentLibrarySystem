package com.Oxen.StudentLibrarySystem.controller;

import com.Oxen.StudentLibrarySystem.model.Student;
import com.Oxen.StudentLibrarySystem.service.StudentService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {
    @Autowired
    private StudentService studentService;

        @PostMapping("/add")
        public String add (@RequestBody @Valid Student student){

                studentService.saveStudent(student);
                return "New student is added";


            }

    @GetMapping("/getAll")
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }
}
