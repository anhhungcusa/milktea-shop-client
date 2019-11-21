import React, { useState, useContext } from 'react';
import { DataContext } from '../../../context/DataProvider';
import 'antd/dist/antd.css';
import './OrderModal.css';
import { Form, Modal, Button, Input, Checkbox, Select } from 'antd';
// const { Option } = Select;

const formItemLayout = {
	labelCol: { span: 9 },
	wrapperCol: { span: 12 }
};

export const OrderModal = () => {
	let { store: { paymentMethod } } = useContext(DataContext);
	const [ state, setState ] = useState({ visible: false });
	const [selectMethod, setSelectMethod] = useState(0);
	const onChangeSelectedMethod = value => setSelectMethod(value);
	return (
		<div>
			<Button className="btn_order1" onClick={() => setState(!state)}>
				ĐẶT HÀNG
			</Button>
			<Modal
				title="Thông Tin Người Nhận"
				visible={!state}
				onOk={() => setState(!state)}
				onCancel={() => setState(!state)}
			>
				<div className="Information">
					<Form.Item {...formItemLayout} label="Tên:">
						<Input placeholder="Please input your name" />
					</Form.Item>
					<Form.Item {...formItemLayout} label="Địa Chỉ:">
						<Input placeholder="Please input your address" />
					</Form.Item>
					<Form.Item {...formItemLayout} label="Số Điện Thoại:">
						<Input placeholder="Please input your phone number" />
					</Form.Item>
					<Form.Item 
					// wrapperCol={{ span: 6, offset: 1 }}
					{...formItemLayout}
					label="Select" >
							<Select 
							
							// wrapperCol={{ span: 8 }}
							value={selectMethod}
							onChange={onChangeSelectedMethod}
                            placeholder="Please select a country">
                                {paymentMethod.map((item) => (
									<Select.Option  key={item.id}>{item.name}</Select.Option>
								))}
							</Select>
					</Form.Item>
					<Form.Item labelCol={{ span: 9 }} wrapperCol={{ offset: 9 }}>
						<Checkbox>Sử dụng thông tin người dùng</Checkbox>
					</Form.Item>
				</div>
			</Modal>
		</div>
	);
};
