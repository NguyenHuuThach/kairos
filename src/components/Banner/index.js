import React, { Fragment } from 'react'
import './style.css'

export const Banner = () => {
    return (
        <Fragment>
            <div className='banner-wraper-pink'>
                You are now viewing an <span className='banner-bold-text'>IT Software</span> that has been verified by <span className='banner-bold-text'>over 1 million users.</span>
            </div>
            <div className='banner-wrapper-white'>
                IT CLOUD SEA’S IT SERVICE
            </div>
        </Fragment>
    )
}
