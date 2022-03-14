import React, {useState} from 'react'
import './DoubleRange.module.css'
import Slider from '@mui/material/Slider';





type DoubleRangePropsType = {

}

const DoubleRange: React.FC<DoubleRangePropsType> = (
    {

    }
) => {

    const [value, setValue] = useState([0, 100])

    const onChangeCallback = (e: Event, values: number | number[]) => {
        setValue(values as number[]);

    };
    return (
        <Slider
            sx={{ width: 100}}
            aria-label={'Custom marks'}
            step={10}
            min={0}
            max={100}
            marks
            getAriaLabel={() => 'Minimum distance'}
            value={value}
            onChange={onChangeCallback}
            valueLabelDisplay="auto"
            disableSwap
        />
    );
}
export default DoubleRange;
