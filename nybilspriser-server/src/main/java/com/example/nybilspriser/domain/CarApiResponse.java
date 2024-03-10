package com.example.nybilspriser.domain;

import lombok.Data;

@Data
public class CarApiResponse {
    private String next;
    private int resultCount;
    private int offset;
    private int limit;
    private int queryTime;
    private Car[] results;
}