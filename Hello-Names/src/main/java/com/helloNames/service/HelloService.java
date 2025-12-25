package com.helloNames.service;

import com.helloNames.dto.HelloRequestdto;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class HelloService {

    private final List<String> namesList = new ArrayList<String>();

    public void addNewName(String name) {
        namesList.add(name);
    }


    public List<String> getNamesList() {
        return namesList;
    }
}
