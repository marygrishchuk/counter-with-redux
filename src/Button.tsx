import React from "react";
import './App.css';
import {useDispatch} from "react-redux";
import {setDigit} from "./redux/counter-reducer";

type PropsType = {
    title: "inc" | "reset"
    disabled: boolean
    digit: number
}

export function Button(props: PropsType) {

    let dispatch = useDispatch()

    let onClickHandler = () => {
        if (props.title === "inc") {
            dispatch(setDigit(props.digit + 1))
        } else if (props.title === "reset") {
            dispatch(setDigit(0))
        }
    }

    return (
        <button className={"btn"} disabled={props.disabled} onClick={onClickHandler}>
            {props.title}
        </button>
    )
}