import React from 'react';
import { Helmet } from 'react-helmet'
import { News1Header } from './News1Header/News1Header';
import { News1Body } from './News1Body/News1Body';
export const News1 = () => {
    return(
        <div>
            <Helmet>
                <title>Oal Milk Tea - Story</title>
                <meta
					name="Description"
					content="Câu truyện thương hiệu Oal Milk Tea trà sữa của hạnh phúc"
				/>
            </Helmet>
            <News1Header/>
            <News1Body/>
        </div>
    )
}