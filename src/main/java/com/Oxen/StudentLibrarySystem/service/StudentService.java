package com.Oxen.StudentLibrarySystem.service;

import com.Oxen.StudentLibrarySystem.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}
