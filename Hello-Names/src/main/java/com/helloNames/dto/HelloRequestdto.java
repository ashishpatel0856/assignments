package com.helloNames.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class HelloRequestdto {

    @NotBlank(message = "Name is required")

    private String name;
}
