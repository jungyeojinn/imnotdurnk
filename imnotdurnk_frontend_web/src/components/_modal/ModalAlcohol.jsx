import { useState, useEffect } from 'react';

import * as St from './Modal.style';
import Checkbox from '../_common/Checkbox';
import StepperButton from '../_button/StepperButton';

const ModalAlcohol = ({ drinkType }) => {
    const [bottleCount, setBottleCount] = useState(0);
    const [glassCount, setGlassCount] = useState(0);
    const [capacity, setCapacity] = useState('모름');
    const [isUnknown, setIsUnknown] = useState(false); // "모르겠어요" 체크박스 상태

    useEffect(() => {
        if (isUnknown) {
            setCapacity('모름');
        } else {
            setCapacity(`${bottleCount}병 ${glassCount}잔`);
        }
    }, [bottleCount, glassCount, isUnknown]);

    // 주량 변경 함수
    const handleBottleIncrement = () => setBottleCount(bottleCount + 1);

    const handleBottleDecrement = () =>
        setBottleCount(Math.max(0, bottleCount - 1));

    const handleGlassIncrement = () => setGlassCount(glassCount + 1);

    const handleGlassDecrement = () =>
        setGlassCount(Math.max(0, glassCount - 1));

    // 체크 박스 boolean 변경 함수
    const handleCheckboxChange = () => {
        setIsUnknown(!isUnknown);
        // 주량 초기화
        setBottleCount(0);
        setGlassCount(0);
    };

    const drink = drinkType === '소주' ? 'soju' : 'beer';

    return (
        <St.StyledBox>
            <St.StyledStepperHeader>
                <h3>
                    {drinkType} {capacity}
                </h3>
                <Checkbox
                    text={'모르겠어요'}
                    checked={isUnknown}
                    onChange={handleCheckboxChange}
                />
            </St.StyledStepperHeader>
            <St.StyledStepperBody>
                <St.StyledStepperElement>
                    <St.StyledStepperImage
                        src={`src/assets/images/${drink}bottle.webp`}
                        alt={`${drink} bottle image`}
                    />
                    <StepperButton
                        icon1={'plus'}
                        icon2={'minus'}
                        function1={handleBottleIncrement}
                        function2={handleBottleDecrement}
                    />
                </St.StyledStepperElement>
                <St.StyledStepperElement>
                    <St.StyledStepperImage
                        src={`src/assets/images/${drink}glass.webp`}
                        alt={`${drink} glass image`}
                    />
                    <StepperButton
                        icon1={'plus'}
                        icon2={'minus'}
                        function1={handleGlassIncrement}
                        function2={handleGlassDecrement}
                    />
                </St.StyledStepperElement>
            </St.StyledStepperBody>
        </St.StyledBox>
    );
};

export default ModalAlcohol;