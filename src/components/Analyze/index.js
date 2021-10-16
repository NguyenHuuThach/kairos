import React from 'react'
import './style.css'
import Image30 from '../../images/image30.png';
import Image7 from '../../images/image7.png';


export const Analyze = () => {
    return (
        <div className="analyze-wraper">
            <div className="column analyze-left">
                <div className='navbar-left-wraper'>
                    <div className='navbar-logo' style={{ backgroundImage: `url(${Image7})` }}></div>
                    <div className='navbar-home'>Home</div>
                </div>
                <div className='big-text'>Asia IT <br />Market Place</div>
            </div>
            <div className="column analyze-right" style={{ backgroundImage: `url(${Image30})` }}>
                <div className='filter-items-wraper'>
                    <div className='filter-items'>
                        <div>EN</div>
                        <div>Company</div>
                        <div>Partner Market Place</div>
                    </div>
                </div>
                <div className='navbar-right-wraper'>
                    <div>Auto Homepage</div>
                    <div>Sales</div>
                    <div>CRM</div>
                    <div>Electronic office</div>
                    <div>Cloud ERP</div>
                    <div>SSL</div>
                </div>
                <div className='analyze-content'>
                    <div className='analyze-content-item'>
                        <div role='button' className='analyze-content-item-text'>Now</div>
                        <div role='button' className='analyze-content-item-text'>Future</div>
                    </div>
                    <div className='analyze-content-statistics'>
                        <div className='analyze-content-statistics-item'>
                            <div className='analyze-content-statistics-item-text'>6</div>
                            <div>different<br />IT Software<br />Networks</div>
                        </div>
                        <div className='analyze-content-statistics-item'>
                            <div className='analyze-content-statistics-item-text'>32</div>
                            <div>partners</div>
                        </div>
                        <div className='analyze-content-statistics-item'>
                            <div className='analyze-content-statistics-item-text'>4</div>
                            <div>countries</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
