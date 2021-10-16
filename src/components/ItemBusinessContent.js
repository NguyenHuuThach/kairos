import React from 'react'
import './ItemBusinessContent.css'
import { Button } from './Button/index'


export const ItemBusinessContent = ({
    contentItemBusiness,
    textButtonContentItemBusiness
}) => {
    const itemBusinessContents = contentItemBusiness.map( (element, index) => {
        return (
            <div key={index} className='business-content-item-wrap'>
                <div className='business-content-item'>{element}</div>
                <Button>{textButtonContentItemBusiness[index]}</Button>
            </div>
        )
    } )

    return (
        <div className='business-content-item-wraper'>
            {itemBusinessContents}
        </div>
    )
}

