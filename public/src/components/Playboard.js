import React, { useState } from 'react';
import { boardDefault } from '../Words';
import Letter from './Letter';

function Playboard() {
    const [board, setboard] = useState(boardDefault);
    return (
        <div className='board'>
            <div className='row'>
                <Letter pos={0} attemptno={0} />
                <Letter pos={1} attemptno={0} />
                <Letter pos={2} attemptno={0} />
                <Letter pos={3} attemptno={0} />
                <Letter pos={4} attemptno={0} />
            </div>
            <div className='row'>
                <Letter pos={0} attemptno={1} />
                <Letter pos={1} attemptno={1} />
                <Letter pos={2} attemptno={1} />
                <Letter pos={3} attemptno={1} />
                <Letter pos={4} attemptno={1} />
            </div>
            <div className='row'>
                <Letter pos={0} attemptno={2} />
                <Letter pos={1} attemptno={2} />
                <Letter pos={2} attemptno={2} />
                <Letter pos={3} attemptno={2} />
                <Letter pos={4} attemptno={2} />
            </div>
            <div className='row'>
                <Letter pos={0} attemptno={3} />
                <Letter pos={1} attemptno={3} />
                <Letter pos={2} attemptno={3} />
                <Letter pos={3} attemptno={3} />
                <Letter pos={4} attemptno={3} />
            </div>
            <div className='row'>
                <Letter pos={0} attemptno={4} />
                <Letter pos={1} attemptno={4} />
                <Letter pos={2} attemptno={4} />
                <Letter pos={3} attemptno={4} />
                <Letter pos={4} attemptno={4} />
            </div>
            <div className='row'>
                <Letter pos={0} attemptno={5} />
                <Letter pos={1} attemptno={5} />
                <Letter pos={2} attemptno={5} />
                <Letter pos={3} attemptno={5} />
                <Letter pos={4} attemptno={5} />
            </div>
        </div>
    )
}
export default Playboard;