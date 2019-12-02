import React from 'react';
import './HomeFooter.css';
import { ReactComponent as Facebook } from '../../../Asset/Image/facebook-logo.svg';
import { ReactComponent as Instagram } from '../../../Asset/Image/instagram.svg';
import { ReactComponent as Youtube } from '../../../Asset/Image/youtube.svg';
import { ReactComponent as Twitter } from '../../../Asset/Image/twitter.svg';
import { ReactComponent as Googleplus } from '../../../Asset/Image/google-plus.svg';
export const HomeFooter = () => {
	return (
		<footer id="footer">
			<div className="cover" />
			<div className="wrapper">
				<div className="inner">
					<div className="grid">
						<div className="grid-item" />
						<div className="grid-item">
							<div>
								<h3>Công ty CP TM & Dv Taco Việt Nam</h3>
								<ul className="no-bullets">
									<li>
										{/* <svg /> */}
										<h4>495/21/8 Tô Hiến Thành,P14,Q10,TP Hồ Chí Minh.</h4>
									</li>

									<li>
										<h4>0346.252626</h4>
									</li>
									<li>
										<h4>lekhachai9999@gmail.com</h4>
									</li>
									<li>
										<h4>Số ĐKKĐ: 12345678999. Ngày Cấp: 31/01/2018</h4>
									</li>
									<li>
										<div className="grid1">
											<div className="grid-logo">
												<Facebook height="30px" width="30px" />
											</div>
											<div className="grid-logo">
												<Instagram height="30px" width="30px" />
											</div>
											<div className="grid-logo">
												<Youtube height="30px" width="30px" />
											</div>
											<div className="grid-logo">
												<Twitter height="30px" width="30px" />
											</div>
											<div className="grid-logo">
												<Googleplus height="30px" width="30px" />
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className="grid-item">
							<h3>Về Chúng Tôi</h3>
							<ul className="no-bullets">
								<li>
									<h4>Giới Thiệu về Oal Milk Tea</h4>
								</li>
								<li>
									<h4>Nhượng Quyền</h4>
								</li>
								<li>
									<h4>Tin tức và ưu đãi</h4>
								</li>
								<li>
									<h4>Quy Định Chung</h4>
								</li>
							</ul>
						</div>
						<div className="grid-item">
							<h3>Chính Sách</h3>
							<ul className="no-bullets">
								<li>
									{/* <svg /> */}
									<h4>Chính Sách Thành Viên</h4>
								</li>
								<li>
									<h4>Hình Thức Thanh Toán</h4>
								</li>
								<li>
									<h4>Bảo Vệ Thông Tin Cá Nhân</h4>
								</li>
								<li>
									<h4>Vận Chuyển Giao Nhận</h4>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
