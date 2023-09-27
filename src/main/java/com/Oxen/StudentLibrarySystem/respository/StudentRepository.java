package com.Oxen.StudentLibrarySystem.respository;

import com.Oxen.StudentLibrarySystem.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/* Derived Query Methods */
@Repository
public interface StudentRepository extends JpaRepository<Person, Integer> {
    Optional<Person> findAllByAddressIgnoreCaseAndPassword(String address, String password);
    boolean existsByAddressIgnoreCase(String address);
}
