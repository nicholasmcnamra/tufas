package com.tufas.project.tufasgo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
public class TufasGoApplication {

	public static void main(String[] args) {
		SpringApplication.run(TufasGoApplication.class, args);
	}

}
