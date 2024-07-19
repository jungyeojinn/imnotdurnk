package com.imnotdurnk.domain.user.dto;

import com.imnotdurnk.domain.user.entity.UserEntity;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDto {

    @NotNull
    private String email;
    @NotNull
    private String password;
    @NotNull
    private String name;
    private String phone;
    private String nickname;
    private String address;
    private String detailedAddress;
    private String latitude;
    private String longitude;
    private String postalCode;
    private String voice;
    private String emergencyCall;
    private String beerCapacity;
    private String sojuCapacity;
    private Boolean unsure;
    private Boolean verified;

    public UserDto() {
    }

    @Builder
    public UserDto(String email, String password, String name, String phone, String nickname, String address, String detailedAddress, String latitude, String longitude, String postalCode, String voice, String emergencyCall, String beerCapacity, String sojuCapacity, Boolean unsure, Boolean verified) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.phone = phone;
        this.nickname = nickname;
        this.address = address;
        this.detailedAddress = detailedAddress;
        this.latitude = latitude;
        this.longitude = longitude;
        this.postalCode = postalCode;
        this.voice = voice;
        this.emergencyCall = emergencyCall;
        this.beerCapacity = beerCapacity;
        this.sojuCapacity = sojuCapacity;
        this.unsure = unsure;
        this.verified = verified;
    }

    /**
     * Dto를 Entity로 변환하는 함수
     *
     * @return 변환된 {@link UserEntity}
     *
     */
    public UserEntity toEntity() {
        return UserEntity.builder()
                .email(email)
                .password(password)
                .name(name)
                .phone(phone)
                .nickname(nickname)
                .address(address)
                .detailedAddress(detailedAddress)
                .latitude(latitude)
                .longitude(longitude)
                .postalCode(postalCode)
                .voice(voice)
                .emergencyCall(emergencyCall)
                .beerCapacity(beerCapacity)
                .sojuCapacity(sojuCapacity)
                .unsure(unsure)
                .verified(verified)
                .build();
    }

    /**
     * Entity를 Dto로 변환하는 함수
     *
     * @param userEntity - Dto로 바꿀 대상이 되는 {@link UserEntity}
     * @return 변환된 {@link UserDto}
     *
     */
    public UserDto toDto(UserEntity userEntity) {
        return UserDto.builder()
                .email(userEntity.getEmail())
                .password(userEntity.getPassword())
                .name(userEntity.getName())
                .phone(userEntity.getPhone())
                .nickname(userEntity.getNickname())
                .address(userEntity.getAddress())
                .detailedAddress(userEntity.getDetailedAddress())
                .latitude(userEntity.getLatitude())
                .longitude(userEntity.getLongitude())
                .postalCode(userEntity.getPostalCode())
                .voice(userEntity.getVoice())
                .emergencyCall(userEntity.getEmergencyCall())
                .beerCapacity(userEntity.getBeerCapacity())
                .sojuCapacity(userEntity.getSojuCapacity())
                .unsure(userEntity.getUnsure())
                .verified(userEntity.getVerified())
                .build();
    }
}
