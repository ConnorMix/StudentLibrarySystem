package com.Oxen.StudentLibrarySystem.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
public class Student {
    @Id //primary key
    @SequenceGenerator(
            name = "student_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "student_sequence"
    )
    private int id;
    @NotNull(message = "Please provide a name")
    @NotBlank(message = "Please provide a name")
    private String name;
    @NotNull(message = "Please provide an Address")
    @NotBlank(message = "Please provide an Address")
    @Email(message="invalid email address")
    @Column(unique = true)
    private String address;

    public Student() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
