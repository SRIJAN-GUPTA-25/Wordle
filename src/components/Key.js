import React, { useContext } from 'react'
import { AppContext } from '../App';

function Key({ keyVal, bigKey, disabled }) {
    const { onSelect, onDelete, onEnter } = useContext(AppContext);
    const selectLetter = () => {
        if (keyVal === "ENTER") {
            onEnter();
        }
        else if (keyVal === "DELETE") {
            onDelete();
        }
        else {
            onSelect();
        }
    };
    return <div className='key' id={bigKey ? "big" : disabled && "disabled"} onClick={selectLetter}>{keyVal}</div>;

}

export default Key;