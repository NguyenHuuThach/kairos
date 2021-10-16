import React from 'react'
import './Rectangle.css'
import { ItemBusiness } from './ItemBusiness'
import { ItemBusinessImage } from './ItemBusinessImage'

const STYLES = ['rectangle-gray', 'rectangle-white',]

export const Rectangle = ({
    imageLeft,
    rectangleStyle,
    numberItemBusinessImage,
    titleItemBusiness,
    contentItemBusiness,
    textButtonItemBusiness
}) => {
    const checkRectangleStyle = STYLES.includes(rectangleStyle) ? rectangleStyle : STYLES[0]

    return (
        <div className={`rectangle ${checkRectangleStyle}`}>
            { imageLeft &&
                <ItemBusiness 
                    titleBusiness={titleItemBusiness} 
                    contentItemBusiness={contentItemBusiness} 
                    textButtonContentItemBusiness={textButtonItemBusiness}
                />
            }
            <ItemBusinessImage number={numberItemBusinessImage} />
            { !imageLeft &&
                <ItemBusiness 
                    titleBusiness={titleItemBusiness} 
                    contentItemBusiness={contentItemBusiness} 
                    textButtonContentItemBusiness={textButtonItemBusiness}
                />
            }
        </div>
    )
}