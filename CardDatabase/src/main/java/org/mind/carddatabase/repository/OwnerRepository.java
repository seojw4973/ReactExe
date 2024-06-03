package org.mind.carddatabase.repository;

import org.mind.carddatabase.domain.Owner;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OwnerRepository extends JpaRepository<Owner, Long> {
}
