import React from 'react';
import { ProductBody } from './ProductBody/ProductBody';
import { ProductHeader } from './ProductHeader/ProductHeader';
import { HomeFooter } from '../HomePage/HomeFooter/HomeFooter';
export const Product = () => {
    return(
        <div>
            <ProductHeader/>
            <ProductBody/>
            <HomeFooter/>
        </div>
    )
}