import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Button} from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import {CounterType, getCounterValue} from "./redux/counterReducer";

function App() {

    let {digit, disabledInc, disabledReset} = useSelector<AppRootStateType, CounterType>(state => state.counter)
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCounterValue())
    }, [])

    return (
        <div className="App3">
            <Counter digit={digit}/>
            <div className="btnBlock">
                <Button title={"inc"} disabled={disabledInc} digit={digit}/>
                <Button title={"reset"} disabled={disabledReset} digit={digit}/>
            </div>
        </div>
    )
}

export default App;
