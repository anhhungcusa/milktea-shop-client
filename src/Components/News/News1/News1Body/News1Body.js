import React from 'react';
import './News1Body.css';
import { Modal1 } from '../Modal/Modal1/Modal1';
import 'antd/dist/antd.css';
import { Modal2 } from '../Modal/Modal2/Modal2';
import { Modal3 } from '../Modal/Modal3/Modal3';
import { Modal4 } from '../Modal/Modal4/Modal4';
import { TimeStore } from '../../../TimeStore/TimeStore';

export const News1Body = () => {
	return (
		<div>
			<TimeStore className=".timeStore-news1"/>
			<div className="news1">
				<div className="label">
					<h2>Câu truyện thương hiệu</h2>
				</div>
				<div className="row1">
					<div className="rowItem">
						<Modal1 />
					</div>
					<div className="rowItem">
						<Modal2 />
					</div>
				</div>

				<div className="row1">
					<div className="rowItem">
						<Modal3 />
					</div>
					<div className="rowItem">
						<Modal4 />
					</div>
				</div>
			</div>
		</div>
	);
};
