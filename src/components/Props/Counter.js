import React from 'react';

function Counter(props) {
    return (
        <div className="Counter-Pro">
            <span>{props.name}</span>
            <p>{props.description}</p>
        </div>
    );
}

export default Counter;