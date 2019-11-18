import React, { useContext, useMemo } from 'react';
import { DataContext } from '../../../context/DataProvider';
import './OrderBody.css';
import { Card } from 'antd';
import 'antd/dist/antd.css';
// import { Link } from 'react-router-dom';
import { OrderModal } from '../OrderModal/OrderModal';
import { ReactComponent as Plus } from '../../../Asset/Image/plus.svg';
import { ReactComponent as Increase } from '../../../Asset/Image/plus1.svg';
import { ReactComponent as Decrease } from '../../../Asset/Image/minus (1).svg';
import { findItemNameByID, formatVND } from '../../../utils';
const { Meta } = Card;

export const OrderBody = () => {
	let {
		store: { products, productCategories, cart },
		action: { cart: { addProduct, updateCountInCart } }
	} = useContext(DataContext);
	const totalPrice = useMemo(() => {
		let total = cart.reduce((acc, curr) => {
			const price = curr.count * curr.price
			return acc + price
		}, 0)
		return total
	}, [cart])
	// handle add product to card
	const handleAddProduct = (product) => {
		addProduct(product);
	};

	const handleUpdateCount = (id, value) => {
		updateCountInCart(id, value);
	};

	return (
		<div className="order">
			<div className="order-item">
				<div className="title">
					<h2>Menu</h2>
				</div>
				<div className="listcategory">
					{productCategories.map((item) => (
						<div key={item.id} className="list-itemCategory">
							{findItemNameByID(productCategories,item.id)}
						</div>
					))}
				</div>
			</div>
			<div className="order-item">
				<div className="order-center">
					{productCategories.map((category1) => (
						<div key={category1.id} className="list-cate">
							<h2>
							{findItemNameByID(productCategories,category1.id)}
								</h2>
							<div className="pro-1">
								{products.filter((product) => product.categoryId === category1.id).map((item) => (
									<div key={item.id} className="list-itemproduct">

										<Card
											key={item.id}
											className="grid-item1"
											hoverable
											style={{ width: 240 }}
											cover={<img alt="not found" src={item.imgURL} />}
										>
											<Meta title={item.name} />
											<div className="button">
												<div className="price">
													<h3>{item.price}</h3>
												</div>
												<div className="btn_add">
													<Plus
														onClick={() => handleAddProduct(item)}
														height="30px"
														width="30px"
													/>
												</div>
											</div>
										</Card>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="order-item">
				<div className="cart">
					<div className="cart-title">GIỎ HÀNG CỦA TÔI</div>
					<div className="buyproduct">
						<div>
							{cart.map((item) => (
								<div key={item.id} className="buy-item">
									<div className="increase pointer">
										<Increase
											className="increase"
											height="20px"
											width="20px"
											onClick={() => handleUpdateCount(item.id, 1)}
										/>
									</div>
									<div className="countid">{item.count}</div>
									<div className="descrease pointer"> 
										<Decrease
											className="decrease"
											height="20px"
											width="20px"
											onClick={() => handleUpdateCount(item.id, -1)}
										/>
									</div>
									<div className="product-name">{findItemNameByID(products,item.id)}</div>
									<div className="product-price">{item.count * item.price}</div>
								</div>
							))}{' '}
						</div>
					</div>
					<div className="total">
						<div className="total-title">
							<div className="total-item">
							<h2>Tổng Cộng</h2>
							</div>
							<div className="total-item"><h2>{formatVND(totalPrice)} VNĐ</h2></div>
						</div>
						<div className="btn_order">
							<OrderModal wrapClassName="btn_order1"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
