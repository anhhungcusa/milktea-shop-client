import React, { useState, useContext } from 'react';
import { DataContext } from '../../../context/DataProvider';
import 'antd/dist/antd.css';
import './ProductDetail.css';
import { Modal, Button } from 'antd';
import { Link } from 'react-router-dom';

// const formItemLayout = {
// 	labelCol: { span: 9 },
// 	wrapperCol: { span: 12 }
// };

export const ProductDetail = ({ product }) => {
	// let { store: { product } } = useContext(DataContext);
	const [ state, setState ] = useState({ visible: false });

	return (
		<div>
			<button className="viewdetail" onClick={() => setState(!state)}>
				XEM CHI TIẾT
			</button>
			<Modal
				title="Chi Tiết Sản Phẩm"
				visible={!state}
				onOk={() => setState(!state)}
				onCancel={() => setState(!state)}
			>
				<div className="body">
					<div className="img">
						<img src={product && product.imgURL} />
						{/* {product && product.imgURL} */}
					</div>
					<div className="description">
						<h2>{product && product.name}</h2>
						<h3>{product && product.price}</h3>
						<h4>{product && product.description}</h4>
						<div className="btn_buynow">
							<Link to="/order">MUA NGAY</Link>
						</div>
					</div>
				</div>
			</Modal>
		</div>
	);
};
