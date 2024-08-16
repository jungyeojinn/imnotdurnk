package com.imnotdurnk.domain.user.repository;

import com.imnotdurnk.domain.user.entity.UserEntity;
import com.imnotdurnk.domain.user.repository.mapping.DeletedUserMapping;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {

    boolean existsByEmail(String email);

    UserEntity findByEmail(String email);

    DeletedUserMapping findDeletedByEmail(String email);
}
