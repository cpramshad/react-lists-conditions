import React from 'react'

const Characters = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        border: '1px solid black',
        margin: '10px'
    }
    return (<div onClick={props.click} style={style}>{props.char}</div>)
}

export default Characters;