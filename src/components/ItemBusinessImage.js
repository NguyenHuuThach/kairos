import React from 'react'
import './ItemBusinessImage.css'

function importAll(r) {
    let images = {}
     r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); })
    return images
   }
const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/))

export const ItemBusinessImage = ({
    number, 
}) => {
    const combo = (number) ? `${number}` : 'red_back';

    return (
        <div className='business-item-image'>
            <img src={images[`${combo}.png`].default} alt={`${number}.png`}/>
        </div>
    )
}
