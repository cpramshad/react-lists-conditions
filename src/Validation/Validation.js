import React from 'react'

const Validation = (props) => {
    let text = 'Text too short';

    if(props.length > 5) {
        text = 'Text too long';
    }

    return (
        <p>{text}</p>
    )
}

export default Validation;