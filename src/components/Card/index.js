import React from 'react'
import './style.css'

const STYLES = ['card-border-pink', 'card-background-pink']

 const Card = ({
    cardBorderleStyle,
    cardBackgroundleStyle,
    cardTitle,
    cardContent,
    cardPrice,
    cardUnit,
    cardUnitMonney,
}) => {
    const checkCardBorderStyle = STYLES.includes(cardBorderleStyle) ? cardBorderleStyle : ''
    const checkCardBackgroundStyle = STYLES.includes(cardBackgroundleStyle) ? cardBackgroundleStyle : ''
    const checkcardBackgroundPinkText = checkCardBackgroundStyle !== '' ? 'card-background-pink-text' : ''
    const checkCardPrice = cardPrice == '0' ? '-zero' : '' 
    return (
        <div className={`card ${checkCardBorderStyle} ${checkCardBackgroundStyle}`}>
            <div className={`card-title ${checkcardBackgroundPinkText}`}>{cardTitle}</div>
            <div className={`card-content ${checkcardBackgroundPinkText}`}>{cardContent}</div>
            <div className={`card-price-wraper${checkCardPrice}`}>
                <div className={`card-price${checkCardPrice} ${checkcardBackgroundPinkText}`}>{cardPrice}</div>
                <div className={`card-unit-wraper ${checkcardBackgroundPinkText}`}>
                    <div className={`unit-monney ${checkcardBackgroundPinkText}`}>{cardUnitMonney}</div>
                    <div className={`card-unit ${checkcardBackgroundPinkText}`}>{cardUnit}</div>
                </div>
            </div>
        </div>
    )
}
export default Card