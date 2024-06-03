package org.mind.carddatabase;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.mind.carddatabase.domain.Car;
import org.mind.carddatabase.domain.Owner;
import org.mind.carddatabase.domain.User;
import org.mind.carddatabase.repository.CarRepository;
import org.mind.carddatabase.repository.OwnerRepository;
import org.mind.carddatabase.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Arrays;

@Log4j2
@SpringBootApplication
@RequiredArgsConstructor
public class CardDatabaseApplication implements CommandLineRunner {

    private final OwnerRepository ownerRepository;
    private final CarRepository carRepository;
    private final UserRepository userRepository;

    public static void main(String[] args) {

        SpringApplication.run(CardDatabaseApplication.class, args);
        log.info("Card Database Application Started............");
    }

    @Override
    public void run(String... args) throws Exception {
        // 부모 테이블의 데이터를 먼저 저장
        Owner owner1 = Owner.builder()
                .firstName("John")
                .lastName("Johnson")
                .build();
        Owner owner2 = Owner.builder()
                .firstName("Mary")
                .lastName("Robinson")
                .build();
        ownerRepository.saveAll(Arrays.asList(owner1, owner2));

        Car car1 = Car.builder()
                .brand("Ford")
                .model("Mustang")
                .color("white")
                .registerNumber("AAA-111")
                .year(2024)
                .price(6400)
                .owner(owner1)
                .build();

        Car car2 = Car.builder()
                .brand("Hyundai")
                .model("Genesis")
                .color("black")
                .registerNumber("HHH-111")
                .year(2024)
                .price(8500)
                .owner(owner2)
                .build();

        Car car3 = Car.builder()
                .brand("기아")
                .model("쏘렌토")
                .color("gray")
                .registerNumber("SSS-111")
                .year(2024)
                .price(4300)
                .owner(owner2)
                .build();

        carRepository.saveAll(Arrays.asList(car1, car2, car3));


        for(Owner owner : ownerRepository.findAll()) {
            log.info(owner.toString());
        }
        for(Car car : carRepository.findAll()){
            log.info(car.toString());
        }

        // username = user / password = user
        User user1 = User.builder()
                        .username("user")
                        .password("$2y$10$0XqxqsEWkr7HNnXVhOi43.SiDndNVDUy/iEt4wNZuu/6yN5jJRqGO")
                        .role("USER")
                        .build();

        // username = admin / password = admin
        User user2 = User.builder()
                .username("admin")
                .password("$2y$10$YNLvyo6LDRz/j3oRIYGvFuPbfwHsm0w3xyS6gqhP7dHSoW/OWwaNC")
                .role("ADMIN")
                .build();

//        userRepository.save(user1);
//        userRepository.save(user2);
        userRepository.saveAll(Arrays.asList(user1, user2));
    }
}
