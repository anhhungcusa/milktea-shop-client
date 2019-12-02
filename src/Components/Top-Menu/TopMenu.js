import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Menu, Icon, Input } from 'antd';
import { Login } from './Login/Login';
import { ReactComponent as Logo } from '../../Asset/Image/2.svg';

import './TopMenu.css';


const { SubMenu } = Menu;

export const TopMenu = () => {
	return (
		<>
			<Menu mode="horizontal" className="container">
				<Menu.Item key="z1" className="logo">
					{/* <a href="https://www.facebook.com/banhthi.tet.50"> */}
						<Logo height="30px" width="30px"  style={{margin: 0, padding: 0}} />
					{/* </a> */}
				</Menu.Item>
				<Menu.Item key="home" >
					<Link to="/">Trang Chủ</Link>
				</Menu.Item>
				<SubMenu title={<span className="submenu-title-wrapper">Giới Thiệu</span>}>
					<Menu.Item key="setting:1">
						<Link to="/introduct1">Lịch Sử Và Sứ Mệnh</Link>
					</Menu.Item>
					<Menu.Item key="setting:2">
						<Link to="/introduct2">Thanh Tựu Đạt Được</Link>
					</Menu.Item>
				</SubMenu>
				<Menu.Item key="">
					<Link to="/product">Sản Phẩm</Link>
					{/* Sản Phẩm */}
				</Menu.Item>

				<SubMenu title={<span className="submenu-title-wrapper">Tin Tức</span>}>
					<Menu.Item key="news1">
						<Link to="/news1">Câu truyện thương hiệu</Link>
					</Menu.Item>
					{/* <Menu.Item key="news2">
						<Link to="news2">Tin Tức Khuyến Mãi</Link>
					</Menu.Item> */}
				</SubMenu>
				<Menu.Item key="search" className="item">
					<Input placeholder="Basic usage" />
					<Icon className="search" type="search" />
				</Menu.Item>
				<Menu.Item className="login">
					<Login/>
				</Menu.Item>
			</Menu>
		</>
	);
};
