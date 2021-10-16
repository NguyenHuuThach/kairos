import React, { Fragment } from 'react'
import './ServiceDetail.css'
import Card  from './Card/index'

const UNITS_MONNEY = ['$', 'VND']
const UNITS = ['Per Month']

export const ServiceDetail = () => {
    return (
        <Fragment>
            <div className='service-detail-wraper'>
                <Card 
                    cardBorderleStyle=''
                    cardBackgroundleStyle=''
                    cardTitle='Free Test'
                    cardContent='Organize across all apps by hand'
                    cardPrice='0'
                    cardUnit={UNITS[0]}
                    cardUnitMonney={UNITS_MONNEY[0]}
                />
                <Card 
                    cardBorderleStyle=''
                    cardBackgroundleStyle=''
                    cardTitle='Low Price'
                    cardContent='Monthly Fixed Amount'
                    cardPrice='200.000'
                    cardUnit={UNITS[0]}
                    cardUnitMonney={UNITS_MONNEY[0]}
                />
                <Card 
                    cardBorderleStyle='card-border-pink'
                    cardBackgroundleStyle=''
                    cardTitle='Easy Using Methods'
                    cardContent='Various Manuals'
                    cardPrice='200.000'
                    cardUnit={UNITS[0]}
                    cardUnitMonney={UNITS_MONNEY[0]}
                />
                <Card 
                    cardBorderleStyle=''
                    cardBackgroundleStyle='card-background-pink'
                    cardTitle='Verified IT Service'
                    cardContent='On sale in 4 countries'
                    cardPrice='300.000'
                    cardUnit={UNITS[1]}
                    cardUnitMonney={UNITS_MONNEY[1]}
                />
            </div>
            <div className='service-detail-office-wraper'>
                <div className="service-detail-office-column">
                    <div className='service-detail-office-column-space'>
                        <div className='service-detail-office-column-title'>Vietnam Office</div>
                        <div className='service-detail-office-column-content'>14F, APtower, Dien Bien Phu street, district 3, Ho Chi Minh city</div>
                        <div className='service-detail-office-column-content'>Business resigtration: 0315421202</div>
                        <div className='service-detail-office-column-content'>Tel: 028-3520-2367 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; sales@dkinno.com</div>
                        <div className='service-detail-office-column-content'>Copyright 2021 DaouKiwoom Innocation C0., Ltd</div>
                    </div>
                </div>
                <div className='service-detail-office-vertical'></div>
                <div className="service-detail-office-column">
                    <div className='service-detail-office-column-space'>
                        <div className='service-detail-office-column-title'>Indonesia Office</div>
                        <div className='service-detail-office-column-content'>Menara Mandiri II, Jl. jend. Sudirman No.54-55, South Jakarta, DKI Jakarta 12190, Indonsia</div>
                        <div className='service-detail-office-column-content'>Tel: +62-21-5082-0038</div>
                    </div>
                </div>
                <div className='service-detail-office-vertical'></div>
                <div className="service-detail-office-column">
                    <div className='service-detail-office-column-space'>
                        <div className='service-detail-office-column-title'>Korea Office</div>
                        <div className='service-detail-office-column-content'>5th Fl, C-dong, PDC, 242, Pangyo-ro, Bundang-gu, Seongnam-si, Gyeonggi-do, Korea</div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
