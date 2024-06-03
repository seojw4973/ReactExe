package org.mind.carddatabase.repository;

import org.mind.carddatabase.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import java.util.Optional;

// User는 RestRepository에서 제외한다.
// 이것을 안하게 되면 User테이블의 정보가 노출된다.
@RepositoryRestResource(exported = false)
public interface UserRepository extends JpaRepository<User, Integer> {
    // 인증과정에서 해당 username이 테이블에 존재하니?
    Optional<User> findByUsername(String username);
}
