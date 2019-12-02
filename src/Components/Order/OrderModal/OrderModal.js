import React, { useState, useContext, useEffect, useMemo } from 'react';
import { DataContext } from '../../../context/DataProvider';
import 'antd/dist/antd.css';
import './OrderModal.css';
import { Form, Modal, Button, Input, Checkbox, Select, message } from 'antd';
import { checkIsNaN, checkMinMax } from '../../../utils/Validates';
import { accountLimitValue, errorMessage } from '../../../constant/account';
import { checkTimeActive } from '../../../utils';


const { Option } = Select;
export const OrderModal = () => {
	let { store: { paymentMethod, isLoggedIn, membership, cart, timeStore, rewards }, action: { orders: { order } } } = useContext(DataContext);
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
			realValue = Math.floor(+value).toString()
		}
		setReceiver({
			...receiver,
			[name]: realValue
		})
	}
	const [visible, setVisible] = useState(false);
	const [nextButton, setnextButton] = useState(false);
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
		/**
		 * {
		 * 	value: 11,
		 * 	idDiscount: asdasdasd
		 * }
		 */
		// order(receiverCoppy, receiver.idPaymentMethod, idMembership, discount?)
		order(receiverCoppy, receiver.idPaymentMethod, idMembership, discount).then(status => {
			setIsOrdering(false)
			switch (status) {
				case 200:
					message.success('Đặt hàng thành công', 2);
					setnextButton(false);
					break;
				default:
					message.error('Đặt hàng thất bại', 2);
					break;
			}

		})
	}

	const handlePayment = () => {

	}

		const handleDisableButton = useMemo(() => {
		return checkTimeActive(timeStore.start, timeStore.end, timeStore.status)
	}, [timeStore.end, timeStore.start, timeStore.status])
	return (
		<div>
			<Button className="btn_order1" disabled={(cart.length > 0 && handleDisableButton ) ? false : true} onClick={() => setVisible(true)}>
				ĐẶT HÀNG
			</Button>
			{handleDisableButton ? "" : (
				<h4>Cữa hàng hiện đóng cửa, vui lòng quay lại sau!</h4>
			)}
			<Modal
				title="Thông Tin Người Nhận"
				visible={visible}
				// onOk={() => setVisible(false)}
				onCancel={() => setVisible(false)}
				footer={
					[
						<Button key={1} onClick={() => setVisible(false)}>Quay lại</Button>,
						receiver.idPaymentMethod === 'dgVFdZxX89bHpPJRkNW0' ?
							<Button key={2} disabled={!formValid} loading={isOrdering} onClick={() => setnextButton(true)}>Tiếp Theo</Button> :
							<Button key={2} disabled={!formValid} loading={isOrdering} onClick={handlePayment}> Thanh toán và đặt hàng</Button>
					]
				}
			>
				{/* method pay: cash. When click next button show modal below */}
				<Modal 
					// width="700px"
					title="Chi tiết đơn hàng"
					visible={nextButton}
					// onOk={() => setnextButton(false)}
					onCancel={() => setnextButton(false)}
					footer = {
						[
							<Button key={0} onClick={() => setnextButton(false)} >Quay Lại</Button>,
							<Button key={1} loading={isOrdering} onClick={handleOrder} >Đặt Hàng</Button>
						]
					}
				>
					<div className="show_data">
						<div className="row">
							<div className="label">
								<h5>Tên:</h5>
							</div>
							<div className="content">
								<h5>{receiver.name}</h5>
							</div>
						</div>
						<div className="row">
							<div className="label">
								<h5>Địa Chỉ:</h5>
							</div>
							<div className="content">
								<h5>{receiver.address}</h5>
							</div>
						</div>
						<div className="row">
							<div className="label">
								<h5>Số Điện Thoại:</h5>
							</div>
							<div className="content">
								<h5>{receiver.phoneNumber}</h5>
							</div>
						</div>
						<div className="row">
							<div className="label">
								<h5>Khuyến Mãi:</h5>
							</div>
							<div className="content">
								<Select defaultValue="" style={{ width: 120 }} >
									{rewards.map((item) => (
										<Option key={item.id} value={item.id}>{item.name}</Option>
									))}
								</Select>
							</div>
						</div>
					</div>
				</Modal>

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
