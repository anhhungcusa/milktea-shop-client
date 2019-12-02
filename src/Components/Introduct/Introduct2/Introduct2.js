import React from 'react';
import { Helmet } from 'react-helmet'
import { IntroductHeader } from '../Introduct1/IntroductHeader/IntroductHeader';
import { IntroductBody2 } from './IntroductBody2/IntroductBody2';
import { HomeFooter } from '../../HomePage/HomeFooter/HomeFooter';
export const Introduct2 = () => {
    return (
        <div>
            <Helmet>
                <title>Oal Milk Tea - Thành Tựu </title>
                <meta name="google" content="notranslate" />
            </Helmet>
            <IntroductHeader />
            <IntroductBody2 />
            <HomeFooter />
        </div>
    )
}