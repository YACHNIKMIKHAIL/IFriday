import React, {useState} from 'react'
import './DoubleRange.module.css'
import Slider from '@mui/material/Slider';
import {packsActions} from "../../../n2_features/f2-packs&cards_YM/b1-packs/ActionsPacks";
import {useDispatch} from "react-redux";


type DoubleRangePropsType = {}

const DoubleRange: React.FC<DoubleRangePropsType> = (
    {}
) => {
    const dispatch = useDispatch()
    const [value, setValue] = useState([0, 100])
    const onChangeCallback = (e: Event, values: number | number[]) => {
        setValue(values as number[]);

        dispatch(packsActions.minAC(value[0]))
        dispatch(packsActions.maxAC(value[1]))
    };


    return (
        <Slider
            sx={{width: 150}}
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
