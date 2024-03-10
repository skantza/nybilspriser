package com.example.nybilspriser.component;

import com.example.nybilspriser.controller.CarController;
import com.example.nybilspriser.domain.Car;
import com.example.nybilspriser.domain.CarApiResponse;
import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Component
public class InitialDataLoader {
    @Value("${skv.apiUrl}")
    private String apiUrl;
    private static final Logger logger = LoggerFactory.getLogger(CarController.class);
    private final List<Car> carList = new ArrayList<>();

    @PostConstruct
    public void fetchInitalData() {
        RestTemplate restTemplate = new RestTemplate();
        String url = apiUrl + "?" + "_limit=100";

        CarApiResponse response = restTemplate.getForObject(url, CarApiResponse.class);

        if (response != null && response.getResults() != null) {
            logger.info(String.format("Saving %d items in carlist", response.getResults().length));
            this.carList.addAll(Arrays.asList(response.getResults()));
        } else {
            logger.info("No hits");
        }
    }

    public List<Car> getInitalData() {
        return carList;
    }

    @PreDestroy
    public void clearCarList() {
        logger.info("Clear carlist");
        this.carList.clear();
    }
}
