package com.Oxen.StudentLibrarySystem.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;


//Lost (Library of student textbooks)
@Entity
@Table(name="person")
public class Person {
    @Id //primary key
    /* There are four possible values for the strategy element on the @GeneratedValue annotation:
     IDENTITY, AUTO, TABLE and SEQUENCE. The SEQUENCE strategy is recommended by the Hibernate documentation */
    @SequenceGenerator(
            name = "person_sequence",
            allocationSize = 1
    )
    //Generates a value for the id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "person_sequence"
    )
    @Column(name="id")
    private int id;
    @NotNull(message = "Please provide a First Name")
    @NotBlank(message = "Please provide a First Name")
    @Column(name="first_name")
    private String firstName;
    @NotNull(message = "Please provide a Last Name")
    @NotBlank(message = "Please provide a Last Name")
    @Column(name="last_name")
    private String lastName;
    @NotNull(message = "Please provide an Address")
    @NotBlank(message = "Please provide an Address")
    @Email(message="invalid email address",regexp = "^[A-Z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z]{3,6}$", flags = Pattern.Flag.CASE_INSENSITIVE)
    @Column(unique = true, name="address")
    private String address;
    @NotNull(message = "Password can not be blank")
    @NotBlank(message = "Password can not be blank")
    @Column(name="password", length=10)
    private String password;

    @NotNull(message = "Select Either Faculty/Staff or Student")
    @NotBlank(message = "Select Either Faculty/Staff or Student")
    @Column(name="access")
    private String access;

    public Person() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getAccess() {
        return access;
    }
    public void setAccess(String access) {
        this.access = access;
    }



}
