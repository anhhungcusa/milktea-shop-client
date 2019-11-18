import React from 'react';
import './News1Body.css';
import { Card } from 'antd';
import 'antd/dist/antd.css';

const { Meta } = Card;

export const News1Body = () => {
	return (
		<div>
			<div className="news1">
				<div className="label">
					<h2>Câu Chuyện Thương Hiệu</h2>
				</div>
				<div className="row1">
					<div className="rowItem">
						<Card
							hoverable
							style={{ width: 400, height: 550 }}
							cover={
                                <img alt="not found" 
                                height="350px" 
                                width="400px" 
                                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
							}
						>
							<Meta title="Europe Street beat" description="www.instagram.com" />
						</Card>
					</div>
					<div className="rowItem">dsadsad</div>
				</div>
			</div>
		</div>
	);
};
