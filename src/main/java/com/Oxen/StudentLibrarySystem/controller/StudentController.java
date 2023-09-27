package com.Oxen.StudentLibrarySystem.controller;

import com.Oxen.StudentLibrarySystem.model.Person;
import com.Oxen.StudentLibrarySystem.respository.StudentRepository;
import com.Oxen.StudentLibrarySystem.service.StudentService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/person")
@CrossOrigin
public class StudentController {
    @Autowired
    private StudentService studentService;
    @Autowired
    private StudentRepository studentRepository;
        /*
        * @PostMapping posts an @RequestBody to the database through hibernate
        * */
        @PostMapping("/persons/add")
        public ResponseEntity<Person> add (@RequestBody @Valid Person person){
            //checks if email address is unique preventing SQLExceptions
                boolean isExists = studentRepository.existsByAddressIgnoreCase(person.getAddress());
                    if(!isExists) {
                        studentService.saveStudent(person);
                        return new ResponseEntity<>(HttpStatus.OK);
                    }
                    return new ResponseEntity<>(HttpStatus.CONFLICT);
            }
    @GetMapping("/getAll")
    public List<Person> getAllPeople() {
        return studentService.getAllPeople();
    }

     /*
     * @PathVariable sets String variables to retrieve data from the url and find in Person collection
     * */
    @GetMapping("/persons/{address}/{password}")
    public ResponseEntity<Optional<Person>> getPerson(
            @PathVariable("address") String address, @PathVariable("password") String password)
    {
        /*
        * check if person exists, then check in list to correct partial entry's in form returning an ok status
        * */
       Optional<Person> person = studentService.getPerson(address, password);
       if(person.isPresent()) {
           return ResponseEntity.status(HttpStatus.OK).body(person);
       }
       else {
           return new ResponseEntity<>(HttpStatus.NOT_FOUND);
       }
    }
}
