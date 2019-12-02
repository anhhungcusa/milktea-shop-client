import React from 'react';
import { Link } from 'react-router-dom';
import './HomeHeader.css';
export const HomeHeader = () => {
	return (
			<div className="home-main"  onClick={() => console.log(1)}>
				<div className="home-main1">
					<div className="home-main2" />
					<div className="side-content">
						<h1>Oal Milk Tea</h1>
						<div className="slide-bold-text">Trà Sữa Của Hạnh Phúc</div>
						<div className="slide-light-text">
							Với sứ mệnh mang tới niềm vui và hạnh phúc, Oal hy vọng sẽ tạo nên một nét văn hóa giải trí
							bên cạnh ly trà sữa Ngon - Sạch - Tươi
						</div>
						<div className="slide-btn">
							<div className="slide-btn1" >
								<Link to="/product">Tìm Hiểu Thêm</Link>
							</div>
							<div className="slide-btn2">
								<Link to="/product">Đặt Hàng Ngay</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
	);
};
