// компонент класса (школьного)
import React from 'react';
import './Classes.css';

const Classes = () => {
    return (
        <div className={'cls'}>
            {/* здесь будет jsx (html) разметка */}
            <p className={'cls__text'}>Hello world!</p>
        </div>
    );
}

export default Classes;