import React from "react";
import './App.css';
import {useDispatch} from "react-redux";
import {changeDigit} from "./redux/counterReducer";

type PropsType = {
    title: "inc" | "reset"
    disabled: boolean
    digit: number
}

export function Button(props: PropsType) {

    let dispatch = useDispatch()

    let onClickHandler = () => {
        if (props.title === "inc") {
            dispatch(changeDigit(props.digit + 1))
        } else if (props.title === "reset") {
            dispatch(changeDigit(0))
        }
    }

    return (
        <button className={"btn"} disabled={props.disabled} onClick={onClickHandler}>
            {props.title}
        </button>
    )
}