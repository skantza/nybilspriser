package com.example.nybilspriser.domain;

import lombok.Data;

@Data
public class Car {
    private String fordonstyp;
    private String tillverkningsar;
    private String marke;
    private String modell;
    private String nybilspris;
    private String bransletyp;
}
