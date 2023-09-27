package com.Oxen.StudentLibrarySystem.service;

import com.Oxen.StudentLibrarySystem.model.Person;
import com.Oxen.StudentLibrarySystem.respository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService {
    @Autowired
    private StudentRepository studentRepository;
    @Override
    public Person saveStudent(Person person) {
        return studentRepository.save(person);
    }
    @Override
    public Optional<Person> getPerson(String address, String password) {
        return studentRepository.findAllByAddressIgnoreCaseAndPassword(address, password);
    }
    @Override
    public List<Person> getAllPeople() {
        return studentRepository.findAll();
    }
}
