package com.example.nybilspriser.controller;

import com.example.nybilspriser.component.InitialDataLoader;
import com.example.nybilspriser.domain.Car;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
public class CarController {
    private final InitialDataLoader initialDataLoader;

    @GetMapping(value = "/cars", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Car> cars() {
        return initialDataLoader.getInitalData();
    }

}
