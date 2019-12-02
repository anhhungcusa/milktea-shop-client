import React from 'react';
import { Helmet } from 'react-helmet'
import { ProductBody } from './ProductBody/ProductBody';
import { ProductHeader } from './ProductHeader/ProductHeader';
import { HomeFooter } from '../HomePage/HomeFooter/HomeFooter';
export const Product = () => {
    return (
        <div>
            <Helmet>
                <title>Oal Milk Tea - Menu</title>
            </Helmet>
            <ProductHeader />
            <ProductBody />
            <HomeFooter />
        </div>
    )
}