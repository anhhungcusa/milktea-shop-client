import React, { useContext } from 'react';
import './ProductBody.css';
import { DataContext } from '../../../context/DataProvider';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import { ProductDetail } from '../ProductDetail/ProductDetail';

import 'antd/dist/antd.css';
import { TimeStore } from '../../TimeStore/TimeStore';
const { Meta } = Card;

export const ProductBody = () => {
	let { store: { products, productCategories } } = useContext(DataContext);
	// findcategoryNameById
	const findCategoryNameById = (id) => {
		let category = productCategories.find((item) => item.id === id);
		if (category !== undefined) return category.name;
		return 'unknown';
	};
	// const [state, setState] = useState({ visible: false });
	// const [stateID, setStateID] = useState({});
	// const openModal = () => {
	// 	setState({visible: true});
	// }

	return (
		<div>
			<TimeStore />
			<div className="body">
				<div className="grid-item">
					<div className="menu">
						<div className="title">
							<h2>Menu</h2>
						</div>
						<div className="listcategory">
							{productCategories.map((item) => (
								<div key={item.id} className="list-itemCategory">
									{findCategoryNameById(item.id)}
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="grid-item">
					{productCategories.map((category1) => (
						<div key={category1.id} className="list-itemCate-right">
							{findCategoryNameById(category1.id)}
							{/* product */}
							<div className="pro-1">
								{products.filter((product) => product.categoryId === category1.id).map((item) => (
									<div key={item.id} className="list-itemproduct">
										{/* check category === category product name. */}
										{/* <div>{category1.name}</div> */}
										<Card
											key={item.id}
											className="grid-item1"
											hoverable
											style={{ width: 240 }}
											cover={<img alt="not found" src={item.imgURL} />}
										>
											{/* fix CSS text-overflow Property */}
											<Meta title={item.name} />
											<div className="button">
												<div className="btn_detail1">
													{/* <div className="buynow1">
												</div> */}
													<Link to="/order">Mua Ngay</Link>
												</div>
												<div className="btn_detail2">
													<ProductDetail wrapClassName="btn_detail1" product={item} />
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
		</div>
	);
};
