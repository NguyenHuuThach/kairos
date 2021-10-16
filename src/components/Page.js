import React from 'react'
import { Rectangle } from './Rectangle'
import { Analyze } from './Analyze/index'
import { Banner } from './Banner/index'
import { ServiceDetail } from './ServiceDetail'

// const TITLES_BUSINESS = ['Assets', 'Accounting', 'HR & Admin', 'Sales']
// const CONTENT_ITEMS_BUSINESS = ['Inventory Management', 'Accounting',
// 'Webmail', 'E- Apporval', 'E- Document', 'E- Check in.out', 'Co-work/Project',
// 'Create Homepage Youtube & Instagram']
// const TEXTS_BUTTON_CONTENT_ITEM_BUSINESS = ['G-Book', 'G-Book']

const RECTANGLE_STYLES = ['rectangle-gray', 'rectangle-white',]
const NUMBERS_ITEM_BUSINESS_IMAGE = [1, 2, 3, 4]


const oddTwo = (value) => value % 2 === 0 

const isGray = (value) => {
    return oddTwo(value) ? RECTANGLE_STYLES[0] : RECTANGLE_STYLES[1]
}

export const Page = () => {
    return (
        <div className='page-wraper'>
            <Analyze />
            <Banner />
            <Rectangle
                imageLeft={ oddTwo(1) }
                rectangleStyle={ isGray(1) }
                numberItemBusinessImage={NUMBERS_ITEM_BUSINESS_IMAGE[0]}
                titleItemBusiness={['Assets']}
                contentItemBusiness={['Inventory Management']}
                textButtonItemBusiness={['G-Book']}
            />
            <Rectangle
                imageLeft={ oddTwo(2) }
                rectangleStyle={ isGray(2) }
                numberItemBusinessImage={NUMBERS_ITEM_BUSINESS_IMAGE[1]}
                titleItemBusiness={['Accounting']}
                contentItemBusiness={['Accounting']}
                textButtonItemBusiness={['G-Book']}
            />
            <Rectangle
                imageLeft={ oddTwo(3) }
                rectangleStyle={ isGray(3) }
                numberItemBusinessImage={NUMBERS_ITEM_BUSINESS_IMAGE[2]}
                titleItemBusiness={['HR & Admin']}
                contentItemBusiness={['Webmail', 'E- Apporval', 'E- Document', 'E- Check in.out', 'Co-work/Project']}
                textButtonItemBusiness={['E-office', 'E-office', 'E-office', 'E-office', 'E-office']}
            />
            <Rectangle
                imageLeft={ oddTwo(4) }
                rectangleStyle={ isGray(4) }
                numberItemBusinessImage={NUMBERS_ITEM_BUSINESS_IMAGE[3]}
                titleItemBusiness={['Sales']}
                contentItemBusiness={['Create Homepage Youtube & Instagram']}
                textButtonItemBusiness={['Fieldmake']}
            />
            <ServiceDetail />
        </div>
    )
}
