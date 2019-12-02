import React from 'react';
import { Helmet } from "react-helmet";
// import './HomePage.css';
import { HomeHeader } from './HomeHeader/HomeHeader';
import { HomeBody } from './HomeBody/HomeBody';
import { HomeFooter } from './HomeFooter/HomeFooter';

export const HomePage = () => {
	return (
		<div>
			<Helmet>
				<title>Oal Milk Tea - Trang Chủ </title>
				<meta
					name="Description"
					content="Oal Milk Tea trà sữa của hạnh phúc"
				/>
				<meta name="google" content="notranslate" />
			</Helmet>
			<div className="Home-header">
				<HomeHeader />
			</div>
			<div className="Home-body">
				<HomeBody />
			</div>
			<div>
				<HomeFooter />
			</div>
		</div>
	);
};
