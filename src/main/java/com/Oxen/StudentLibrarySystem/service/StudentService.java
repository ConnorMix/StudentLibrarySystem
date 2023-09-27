package com.Oxen.StudentLibrarySystem.service;

import com.Oxen.StudentLibrarySystem.model.Person;
import java.util.List;
import java.util.Optional;
public interface StudentService {


    Person saveStudent (Person person);

    Optional<Person> getPerson(String address, String password);

    List<Person> getAllPeople();

}
