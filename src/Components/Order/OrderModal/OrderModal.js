import React, { useState, useContext, useEffect, useMemo } from 'react';
import { DataContext } from '../../../context/DataProvider';
import 'antd/dist/antd.css';
import './OrderModal.css';
import { Form, Modal, Button, Input, Checkbox, Select, message } from 'antd';
import { checkIsNaN, checkMinMax } from '../../../utils/Validates';
import { accountLimitValue, errorMessage } from '../../../constant/account';

export const OrderModal = () => {
	let { store: { paymentMethod, isLoggedIn, membership, cart }, action: { orders: { order } } } = useContext(DataContext);
	const initReceiver = useMemo(_ => ({
		name: '',
		address: '',
		phoneNumber: '',
		idPaymentMethod: 'dgVFdZxX89bHpPJRkNW0'
	}), [])
	const [receiver, setReceiver] = useState(initReceiver)
	const hasErrors = useMemo(() => {
		return {
			name: receiver.name === '' ? true : false,
			address: receiver.address === '' ? true : false,
			phoneNumber: (checkIsNaN(+receiver.phoneNumber) === false && checkMinMax(receiver.phoneNumber.length, accountLimitValue.phone.min, accountLimitValue.phone.max) === true) ? false : true
		}
	}, [receiver])
	const formValid = useMemo(() => {
		return Object.values(hasErrors).every(item => item === false)
	}, [hasErrors])
	const onChangeReceiver = ({ target: { name, value } }) => {
		let realValue = value
		if (name === 'phoneNumber' && !checkIsNaN(+realValue) && realValue !== '' && realValue[0] !== '0') {
			realValue = Math.floor(+value)
		}
		setReceiver({
			...receiver,
			[name]: realValue
		})
	}
	const [visible, setVisible] = useState(false);
	const [isUseMyInfo, setIsUseMyInfo] = useState(false)
	const onChangeIsUseMyInfo = e => {
		setIsUseMyInfo(e.target.checked)
	}

	const [isOrdering, setIsOrdering] = useState(false)

	useEffect(() => {
		if (isLoggedIn && isUseMyInfo) {
			setReceiver(receiver => ({
				...receiver,
				name: membership.name,
				address: membership.address,
				phoneNumber: membership.phoneNumber
			}))
		} else {
			setReceiver({ ...initReceiver })
		}
	}, [initReceiver, isLoggedIn, isUseMyInfo, membership])
	const onChangeSelectedMethod = value => {
		setReceiver({
			...receiver,
			idPaymentMethod: value
		})
	};
	const handleOrder = () => {
		setIsOrdering(true)
		const receiverCoppy = { ...receiver }
		delete receiverCoppy.idPaymentMethod
		const idMembership = isLoggedIn ? membership.id : undefined
		const discount = undefined
		// order(receiverCoppy, receiver.idPaymentMethod, idMembership, discount?)
		order(receiverCoppy, receiver.idPaymentMethod, idMembership, discount).then(status => {
			setIsOrdering(false)
			switch (status) {
				case 200:
					message.success('Đặt hàng thành công', 2);
					break;
				default:
					message.error('Đặt hàng thất bại', 2);
					break;
			}

		})
	}

	// const handlePayment = () => {

	// }
	return (
		<div>
			<Button className="btn_order1" disabled={cart.length > 0 ? false : true} onClick={() => setVisible(true)}>
				ĐẶT HÀNG
			</Button>
			<Modal
				title="Thông Tin Người Nhận"
				visible={visible}
				onOk={() => setVisible(false)}
				onCancel={() => setVisible(false)}
				footer={
					[
						<Button key={1} onClick={() => setVisible(false)}>Quay lại</Button>,
						receiver.idPaymentMethod === 'dgVFdZxX89bHpPJRkNW0' ?
							<Button key={2} disabled={!formValid} loading={isOrdering} onClick={handleOrder}>Đặt hàng</Button> :
							<Button key={2} disabled={!formValid} loading={isOrdering} onClick={handleOrder}> Thanh toán và đặt hàng</Button>
					]
				}
			>
				<Form labelCol={{ span: 9 }} wrapperCol={{ span: 12 }}>
					<Form.Item label="Tên:"
						hasFeedback={true}
						validateStatus={hasErrors.name ? 'error' : 'success'}
						help={hasErrors.name && 'Tên người nhận không hợp lệ'}
					>
						<Input placeholder="Nhập tên" name="name" value={receiver.name} onChange={onChangeReceiver} />
					</Form.Item>
					<Form.Item label="Địa Chỉ:"
						hasFeedback={true}
						validateStatus={hasErrors.address ? 'error' : 'success'}
						help={hasErrors.address && 'Địa chỉ người nhận không hợp lệ'}
					>
						<Input placeholder="Nhập địa chỉ" name="address" value={receiver.address} onChange={onChangeReceiver} />
					</Form.Item>
					<Form.Item label="Số Điện Thoại:"
						hasFeedback={true}
						validateStatus={hasErrors.phoneNumber ? 'error' : 'success'}
						help={hasErrors.phoneNumber && errorMessage.phone}
					>
						<Input placeholder="Nhập số điện thoại" name="phoneNumber" value={receiver.phoneNumber} onChange={onChangeReceiver} />
					</Form.Item>
					<Form.Item
						label="Phươmg thức thanh toán" >
						<Select
							value={receiver.idPaymentMethod}
							onChange={onChangeSelectedMethod}
						>
							{paymentMethod.map((item) => (
								<Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>
							))}
						</Select>
					</Form.Item>
					{
						isLoggedIn && (
							<Form.Item wrapperCol={{ offset: 9 }}>
								<Checkbox checked={isUseMyInfo} onChange={onChangeIsUseMyInfo}>Sử dụng thông tin của tôi</Checkbox>
							</Form.Item>
						)
					}
				</Form>
			</Modal>
		</div >
	);
};
