package com.Oxen.StudentLibrarySystem.respository;

import com.Oxen.StudentLibrarySystem.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {

}
