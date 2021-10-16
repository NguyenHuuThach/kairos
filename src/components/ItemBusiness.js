import React from 'react'
import './ItemBusiness.css'
import { ItemBusinessContent } from './ItemBusinessContent'


export const ItemBusiness = ({
    titleBusiness,
    contentItemBusiness,
    textButtonContentItemBusiness
}) => {
    return (
        <div className='business-item'>
            <div className='business-title'>{titleBusiness}</div>
            
            <ItemBusinessContent 
                contentItemBusiness={contentItemBusiness} 
                textButtonContentItemBusiness={textButtonContentItemBusiness} 
            />
        </div>
    )
}

