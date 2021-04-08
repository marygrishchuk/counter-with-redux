import React from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Button} from "./Button";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import {CounterType} from "./redux/counter-reducer";

function App() {

    let {digit, disabledInc, disabledReset} = useSelector<AppRootStateType, CounterType>(state => state.counter)

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
