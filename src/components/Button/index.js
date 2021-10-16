import React from 'react'
import './style.css'

const STYLES = ['btn-kairos']

const SIZES = ['btn-medium']

export const Button = ({
    children,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}>
            {children}
        </button>
    )
}