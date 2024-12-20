import { useFocusEffect, useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import React, { useCallback, useEffect, useState } from 'react';
import Button from '../components/_common/Button';
import * as St from '../components/_layout/globalStyle';
import CustomMap from '../components/map/CustomMap';
import SearchBar from '../components/map/SearchBar';
import { getReverseGeocoding } from '../services/map';
import useLocationStore from '../stores/useLocationStore';
import useNavigationStore from '../stores/useNavigationStore';

const Map = () => {
    const { setNavigation } = useNavigationStore();
    const {
        setMapCenter,
        currentLocation,
        setCurrentLocation,
        departure,
        setDeparture,
        destination,
        setDestination,
        setStopover,
    } = useLocationStore();
    const [departurePlaceholder, setDeparturePlaceholder] =
        useState('출발지를 입력하세요');

    const navi = useNavigation();

    useFocusEffect(
        useCallback(() => {
            setNavigation({
                isVisible: true,
                icon1: { iconname: 'address', isRed: false },
                title: '지도',
                icon2: { iconname: 'empty', isRed: false },
            });
        }, [setNavigation]),
    );

    useEffect(() => {
        // 페이지로 들어오면 현재 좌표 받아서
        // 맵 중앙, 현재 위치, 촐발지로 세팅하고 시작
        const getLocationPermission = async () => {
            try {
                let location = await Location.getCurrentPositionAsync({});
                const { latitude, longitude } = location.coords;

                const initialPosition = {
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                };

                // 지도의 중심, 현재 위치, 출발지를 현재 위치로 통일
                setMapCenter(initialPosition);
                setCurrentLocation(initialPosition);
                setDeparture(initialPosition);
            } catch (error) {
            }
        };

        getLocationPermission();
    }, [setMapCenter, setCurrentLocation, setDeparture]);

    useEffect(() => {
        if (currentLocation) {
            // 역 지오코딩을 사용하여 주소 얻기
            const fetchAddress = async () => {
                try {
                    const address = await getReverseGeocoding(
                        currentLocation.latitude,
                        currentLocation.longitude,
                    );
                    setDeparturePlaceholder(address);
                } catch (error) {
                }
            };

            fetchAddress();
        }
    }, [currentLocation]);

    // departure가 변경될 때 mapCenter 업데이트
    useEffect(() => {
        if (departure) {
            setMapCenter({
                latitude: departure.latitude,
                longitude: departure.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            });
        }
    }, [departure, setMapCenter]);

    // destination이 변경될 때 mapCenter 업데이트
    useEffect(() => {
        if (destination) {
            setMapCenter({
                latitude: destination.latitude,
                longitude: destination.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            });
        }
    }, [destination, setMapCenter]);

    return (
        <St.Container>
            <St.MapSearchContainer>
                <SearchBar
                    placeholder={departurePlaceholder}
                    onPress={setDeparture}
                    zIndex={10}
                />
                <SearchBar
                    placeholder="목적지를 입력하세요"
                    onPress={setDestination}
                    zIndex={9}
                />
                <Button
                    text={'경로 검색하기'}
                    color={'white1'}
                    fontSize={'H4'}
                    weight={'medium'}
                    isRed={true}
                    onPress={() => navi.navigate('PathFinder')}
                />
            </St.MapSearchContainer>
            <CustomMap />
        </St.Container>
    );
};

export default Map;
