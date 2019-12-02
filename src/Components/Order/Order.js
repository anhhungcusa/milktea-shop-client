import React from 'react';
import { Helmet } from 'react-helmet'
import './Order.css';
import { OrderBody } from './OrderBody/OrderBody';
export const Order = () => {
    return (
        <div>
            <Helmet>
                <title>Oal Milk Tea - Order</title>
            </Helmet>
            <OrderBody />
        </div>
    )
}