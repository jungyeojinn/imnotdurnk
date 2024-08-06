import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import * as St from '../components/_layout/globalStyle';
import CustomMap from '../components/map/CustomMap';
import PathDescription from '../components/map/PathDescription';
import useNavigationStore from '../stores/useNavigationStore';

const PathDetail = ({ route }) => {
    const { setNavigation } = useNavigationStore();
    const { pathInfo } = route.params;
    const { transitInfo, taxiPathInfo } = pathInfo;

    useFocusEffect(
        React.useCallback(() => {
            setNavigation({
                isVisible: true,
                icon1: { iconname: 'backarrow', isRed: false },
                title: '경로 안내',
                icon2: { iconname: 'x', isRed: false },
            });
        }, [setNavigation]),
    );

    return (
        <St.Container>
            <CustomMap
                transitPolylineCoordinates={transitInfo.summaryCoordinates}
                taxiPolylineCoorinates={taxiPathInfo.taxiCoordinates}
            />
            <PathDescription pathInfo={pathInfo} />
        </St.Container>
    );
};

export default PathDetail;