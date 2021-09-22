import React from 'react'

const Button = ({btnText, text, users}) => {
    // console.log(users)
    return (
        <button className="waves-effect waves-light btn" onClick={() => console.log(text)}>{btnText}</button>
    )
}

export default Button
