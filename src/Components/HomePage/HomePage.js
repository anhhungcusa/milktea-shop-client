import React from 'react';
// import './HomePage.css';
import { HomeHeader } from './HomeHeader/HomeHeader';
import { HomeBody } from './HomeBody/HomeBody';
import { HomeFooter } from './HomeFooter/HomeFooter';

export const HomePage = () => {
	return (
		<div>
			<div className="Home-header">
				<HomeHeader/>
			</div>
			<div className="Home-body">
				<HomeBody/>
			</div>
			<div>
				<HomeFooter/>
			</div>
			{/* <div className="home-main">
				<div className="home-main1">
					<div className="home-main2" />
					<div className="side-content">
						<h3>Oal Milk Tea</h3>
						<div className="slide-bold-text">Trà Sữa Của Hạnh Phúc</div>
						<div className="slide-light-text">
							Với sứ mệnh mang tới niềm vui và hạnh phúc, OAL hy vọng sẽ tạo nên một nét văn hóa giải trí
							bên cạnh ly trà sữa Ngon - Sạch - Tươi
						</div>
						<div className="slide-btn">
							<a className="slide-btn1">Tìm Hiểu Thêm</a>
							<a className="slide-btn2">Đặt Hàng Ngay</a>
						</div>
					</div>
				</div>
			</div>
			<HomeBody/> */}
		</div>
	);
};
