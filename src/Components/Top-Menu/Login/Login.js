import React, { useState, useContext, useCallback, useMemo } from 'react';
import 'antd/dist/antd.css';
import './Login.css';
import { DataContext } from '../../../context/DataProvider';
import { checkIsNaN, checkMinMax, checkEmail } from "../../../utils/Validates";
// Add the Firebase services that you want to use
import "firebase/auth";
import { Avatar, Button, Modal, Checkbox, Tabs, Steps, message, Icon, DatePicker } from 'antd';
import { ReactComponent as Man } from '../../../Asset/Image/man.svg';
import { ErrorMessage } from '../../ErrorMessage/ErrorMessage';
import { errorMessage, accountLimitValue } from '../../../constant/account';
import moment from 'moment';
import { formatDate, collections } from '../../../constant/firebase';
import { FirebaseService } from '../../../service/firebase';
import { Table, Divider } from 'antd';

// const { SubMenu } = Menu;
const { Step } = Steps;
const { TabPane } = Tabs;


function onChange(e) {
}

export const Login = () => {
	const { store: { isLoggedIn, membership, myProcessingOrders, products, myProcessedOrders }, action: { auth: { signIn, signOut }, orders: { deleteProcessinOrderAPI, addOrderToProcessedOrder } } } = useContext(DataContext);

	const handleDeleteProcessingOrder = (id, record, idstate)  => {
		const neworder = {...record};
		neworder.idState = idstate;
		addOrderToProcessedOrder(neworder);
		deleteProcessinOrderAPI(neworder.id);
	}

	// list my processed order
	const columns2 = [
		{
			key: 'createAt',
			title: 'Ngày Đặt Hàng',
			dataIndex: 'createAt',
			render: createAt => moment(createAt).format("DD/MM/YYYY"),
			width: 100,
			align: 'center'
		},
		{
			key: 'id',
			title: 'ID',
			dataIndex: 'id',
			width: 100,
		},
		{
			key: 'name',
			title: 'Tên',
			dataIndex: 'receiverInfo.name',
			width: 50,
			align: 'center'
		},
		{
			key: 'address',
			title: 'Địa Chỉ',
			dataIndex: 'receiverInfo.address',
			width: 150,
			align: 'center'
		},
		{
			key: 'phoneNumber',
			title: 'SĐT',
			dataIndex: 'receiverInfo.phoneNumber',
			width: 80,
			align: 'center'
		},
		{
			key: 'product',
			title: 'Chi Tiết Đơn Hàng',
			dataIndex: 'detail',
			width: 250,
			align: 'center',
			render: (detail) => detail.map((item) => (
				<div className="detail_row" key={item.id}>
					<table>
						<thead>
							<tr className="body1">
								<th>
									<span>Tên</span>
								</th>
								<th>
									<span>Số Lượng</span>
								</th>
								<th>
									<span>Giá</span>
								</th>
								<th>
									<span>Tổng Tiền</span>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className="body1">
								<td>
									{products.filter((product) => product.id === item.id).map((item2) => <span key={item2.id} className="sub_table">{item2.name}</span>)}
								</td>
								<td>
									<span>{item.count}</span>
								</td>
								<td>
									<span>{item.price}</span>
								</td>
								<td>
									<span>{item.count * item.price}</span>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			))
		},
		{
			key: 'discount',
			title: 'Khuyến Mãi',
			dataIndex: 'discount.value',
			render: discount1 => <span>{discount1} VNĐ</span>,
			width: 100,
			align: 'center'
		},
		{
			key: 'priceTotal',
			title: 'Tổng Tiền',
			dataIndex: 'priceTotal',
			render: priceTotal => <span>{priceTotal} VNĐ</span>,
			width: 100,
			align: 'center'
		},
		{
			width: 100,
			key: 'action',
			title: 'Action',
			render: (record) => (
				<span>
					<Divider type="vertical" />
					<span className="fake-link">Đánh Giá</span>
					{/* <Divider type="vertical" /> */}
					{/* <DetailOrder orderDetail={myProcessingOrders} /> */}
					{/* <span className="fake-link">Xóa</span> */}
				</span>
			),
			align: 'center'
		},
	]

	// list my processing order
	const columns = [
		{
			key: 'createAt',
			title: 'Ngày Đặt Hàng',
			dataIndex: 'createAt',
			render: createAt => moment(createAt).format("DD/MM/YYYY"),
			width: 100,
			align: 'center'
		},
		{
			key: 'id',
			title: 'ID',
			dataIndex: 'id',
			width: 100,
		},
		{
			key: 'name',
			title: 'Tên',
			dataIndex: 'receiverInfo.name',
			width: 50,
			align: 'center'
		},
		{
			key: 'address',
			title: 'Địa Chỉ',
			dataIndex: 'receiverInfo.address',
			width: 150,
			align: 'center'
		},
		{
			key: 'phoneNumber',
			title: 'SĐT',
			dataIndex: 'receiverInfo.phoneNumber',
			width: 80,
			align: 'center'
		},
		{

			key: 'product',
			title: 'Chi Tiết Đơn Hàng',
			dataIndex: 'detail',
			width: 250,
			align: 'center',
			render: (detail) => detail.map((item) => (
				<div className="detail_row" key={item.id}>
					<table>
						<thead>
							<tr className="body1">
								<th>
									<span>Tên</span>
								</th>
								<th>
									<span>Số Lượng</span>
								</th>
								<th>
									<span>Giá</span>
								</th>
								<th>
									<span>Tổng Tiền</span>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className="body1">
								<td>
									{products.filter((product) => product.id === item.id).map((item2) => <span key={item2.id} className="sub_table">{item2.name}</span>)}
								</td>
								<td>
									<span>{item.count}</span>
								</td>
								<td>
									<span>{item.price}</span>
								</td>
								<td>
									<span>{item.count * item.price}</span>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			))
		},
		{
			key: 'discount',
			title: 'Khuyến Mãi',
			dataIndex: 'discount.value',
			render: discount1 => <span>{discount1} VNĐ</span>,
			width: 100,
			align: 'center'
		},
		{
			key: 'priceTotal',
			title: 'Tổng Tiền',
			dataIndex: 'priceTotal',
			render: priceTotal => <span>{priceTotal} VNĐ</span>,
			width: 100,
			align: 'center'
		},
		{
			width: 100,
			key: 'action',
			title: 'Action',
			dataIndex: 'id',
			render: (dataIndex, record) => (
				<span>
					<Divider type="vertical" />
					<span className="fake-link" onClick={() => handleDeleteProcessingOrder(dataIndex, record, 'pqVXUj9onmC07620vaZD')} >Hủy</span>
				</span>
			),
			align: 'center'
		},
	];

	const data2 = myProcessedOrders;
	const data = myProcessingOrders;

	//handle onpen/close model detail account
	const [AccShow, setAccShow] = useState(false);
	// handle open/close model
	const [lgShow, setLgShow] = useState(false);
	// handle tabs
	const [step, setStep] = useState(0);
	const handleChangeStep = curr => {
		if (curr === 1 && formAccountSignUpValid === false) {
			message.error('Thông tin tài khoản không hợp lệ, hảy nhập thông tin chính xác!')
			return
		}
		setStep(curr);
	};
	//validate
	const [formErrors, setFormErrors] = useState({
		email: true,
		password: true,
	})
	const formValid = useMemo(() => {
		return Object.values(formErrors).every(item => item === false)
	}, [formErrors])
	const handleValidateSignIn = useCallback((name, value) => {
		let isValid = false;
		switch (name) {
			case 'email':
				isValid = value !== ''
				break;
			case 'password':
				isValid = value !== ''
				break;
			default:
				break;
		}
		setFormErrors(formErrors => ({ ...formErrors, [name]: !isValid }))
	}, []);

	const [formSignUpErrors, setSignUpErrors] = useState({
		email: true,
		password: true,
		password_again: true,
		name: true,
		address: true,
		phoneNumber: true
	})
	const formSignUpValid = useMemo(() => {
		return Object.values(formSignUpErrors).every(item => item === false)
	}, [formSignUpErrors])
	const formAccountSignUpValid = useMemo(() => {
		return !formSignUpErrors.email && !formSignUpErrors.password && !formSignUpErrors.password_again
	}, [formSignUpErrors])
	const handleValidateSignUp = useCallback((name, value, password) => {
		let isValid = false;
		switch (name) {
			case 'email':
				isValid = checkEmail(value)
				break;
			case 'password':
				isValid = checkMinMax(value.length, 6, 30)
				break;
			case 'password_again':
				isValid = (checkMinMax(value.length, 6, 30) && value === password)
				break;
			case 'name':
				isValid = value !== ''
				break;
			case 'address':
				isValid = checkMinMax(value.length, accountLimitValue.address.min, accountLimitValue.address.max)
				break;
			case 'phoneNumber':
				isValid = !checkIsNaN(+value) && checkMinMax(value.length, accountLimitValue.phone.min, accountLimitValue.phone.max)
				break;
			default:
				break;
		}
		setSignUpErrors(formErrors1 => ({ ...formErrors1, [name]: !isValid }))
	}, []);
	const [signin, setSignIn] = useState({
		email: '',
		password: ''
	})
	const onChangeSignIn = ({ target: { value, name } }) => {
		setSignIn({
			...signin,
			[name]: value
		});
		handleValidateSignIn(name, value);
	}

	// handle Sign up
	const [account, setAccount] = useState({
		email: '',
		password: '',
		password_again: '',
	});
	const onChangeAccount = ({ target: { name, value } }) => {
		setAccount({
			...account,
			[name]: value
		});
		if (name === 'password_again') {
			handleValidateSignUp(name, value, account.password);
			return
		}
		handleValidateSignUp(name, value);
	};
	const [userInfo, setUserInfo] = useState({
		name: '',
		address: '',
		phoneNumber: '',
		birthday: moment()
	})

	const [isRegistering, setIsRegistering] = useState(false)
	const [isLogging, setIsLogging] = useState(false)

	const onChangeUserInfo = ({ target: { name, value } }) => {
		let realValue = value
		if (name === 'phoneNumber' && !checkIsNaN(+realValue) && realValue !== '' && realValue[0] !== '0') {
			realValue = Math.floor(+value)
		}
		setUserInfo({
			...userInfo,
			[name]: realValue
		})
		handleValidateSignUp(name, value)
	}

	const onChangeBirthday = (date) => {
		if (date === null)
			return
		setUserInfo({
			...userInfo,
			birthday: date
		})
	}

	const handleSignIn = () => {
		setIsLogging(true)
		signIn(signin.email, signin.password).then(status => {
			setIsLogging(false)
			switch (status) {
				case 200:
					message.success('Đăng nhập thành công', 1)
					setLgShow(false);
					break;
				case 401:
					message.error('Tài khoản của bạn đã bị khóa', 1)
					break;
				default:
					message.error('Tên tài khoản hoặc mật khẩu không hợp lệ', 2)
					break;
			}
		})
	}

	const handleSignUp = async () => {
		setIsRegistering(true)
		try {
			const resSignUp = await FirebaseService.signUpNewUser(account.email, account.password)
			const membership = {
				...userInfo,
				birthday: userInfo.birthday.toDate(),
				email: account.email,
				id: resSignUp.user.uid,
				orders: [],
				point: 0,
				numberOfCancels: 0,
				numberOfReturns: 0,
				createAt: new Date(),
				updateAt: new Date(),
				isDeleted: false
			}
			await FirebaseService.addNewMembership(membership)
			await FirebaseService.db.collection(collections.carts).doc(resSignUp.user.uid).set({
				cart: [],
				updateAt: new Date()
			})
			setIsRegistering(false)
			message.success('Đăng ký thành công!')
			setLgShow(false)
		} catch (error) {
			setIsRegistering(false)
			if (error.code === "auth/email-already-in-use") {
				message.error('Đăng ký thất bại, Email đã tồn tại!')
			} else {
				message.error('Đăng ký thất bại!')
			}
		}
	};

	const render = curr => {
		switch (curr) {
			case 0:
				return (
					<div className="signup_1">
						<div className="title">
							<h3>Tạo Tài Khoản</h3>
						</div>
						<div className="line">
							<div className="item">
								<label>Email: </label>
							</div>
							<div className="item">
								<input
									className="ipName"
									type="text"
									value={account.email}
									name="email"
									onChange={onChangeAccount}
									placeholder="ex: vanha@gmail.com"
								/>
								<ErrorMessage hasError={formSignUpErrors.email} message={errorMessage.email} />

							</div>
						</div>
						<div className="line">
							<div className="item">
								<label>Mật khẩu: </label>
							</div>
							<div className="item">
								<input
									className="password"
									type="password"
									value={account.password}
									name="password"
									onChange={onChangeAccount}
									placeholder="Nhập mật khẩu"
								/>
								<ErrorMessage hasError={formSignUpErrors.password} message={errorMessage.password} />

							</div>
						</div>
						<div className="line">
							<div className="item">
								<label>Xác nhận mật khẩu: </label>
							</div>
							<div className="item">
								<input
									className="password_again"
									type="password"
									value={account.password_again}
									name="password_again"
									onChange={onChangeAccount}
									placeholder="Nhập lại mật khẩu"
								/>
								<ErrorMessage hasError={formSignUpErrors.password_again} message={errorMessage.password_again} />
							</div>
						</div>
					</div>
				);
			case 1:
				return (
					<div className="detail_information">
						<div className="title">
							<h3>Thông Tin Khách Hàng</h3>
						</div>
						<div className="line">
							<div className="item">
								<label>Tên: </label>
							</div>
							<div className="item">
								<input
									className="name"
									type="text"
									value={userInfo.name}
									name="name"
									onChange={onChangeUserInfo}
									placeholder="Tên Khách Hàng"
								/>
								<ErrorMessage hasError={formSignUpErrors.name} message={errorMessage.name} />
							</div>
						</div>
						<div className="line">
							<div className="item">
								<label>Địa Chỉ: </label>
							</div>
							<div className="item">
								<input
									className="address"
									type="text"
									value={userInfo.address}
									name="address"
									onChange={onChangeUserInfo}
									placeholder="Địa Chỉ Khách Hàng"
								/>
								<ErrorMessage hasError={formSignUpErrors.address} message={errorMessage.address} />
							</div>
						</div>

						<div className="line">
							<div className="item">
								<label>Số Điện Thoại: </label>
							</div>
							<div className="item">
								<input
									className="phone"
									type="text"
									value={userInfo.phoneNumber}
									name="phoneNumber"
									onChange={onChangeUserInfo}
									placeholder="Số Điện Thoại Khách Hàng"
								/>
								<ErrorMessage hasError={formSignUpErrors.phoneNumber} message={errorMessage.phone} />
							</div>
						</div>

						<div className="line">
							<div className="item">
								<label>Ngày Sinh: </label>
							</div>
							<div className="item">
								<DatePicker
									className="ngay_sinh"
									value={userInfo.birthday === null ? null : userInfo.birthday}
									name="birthday"
									format={formatDate}
									onChange={onChangeBirthday}
								/>
								<ErrorMessage hasError={formSignUpErrors.ngaysinh} message={errorMessage.ngaysinh} />
							</div>
						</div>

						<div>
							<Button loading={isRegistering} className={`btn-register`} disabled={!formSignUpValid} onClick={handleSignUp}>Đăng ký</Button>
						</div>
					</div>
				);
			default:
				return '';
		}
	};
	return (
		<>
			{!isLoggedIn && (
				<Avatar size="large" style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }}>None</Avatar>
			)}
			{isLoggedIn && (
				<Avatar size="large" onClick={() => setAccShow(true)} style={{ backgroundColor: '#00a2ae', verticalAlign: 'middle' }}>{membership.name.slice(0, 1)}
				</Avatar>
			)}
			{/* {console.log('sss:', membership.email)} */}
			{!isLoggedIn && (
				<Button id="sign-in" size="small" onClick={() => setLgShow(true)}
					style={{ marginLeft: 16, verticalAlign: 'middle' }}>
					Login
				</Button>
			)}
			{isLoggedIn && (
				<Button id="sign-out" size="small" onClick={() => signOut()}
					style={{ marginLeft: 16, verticalAlign: 'middle' }}>
					logout
				</Button>
			)}
			{/* {isLoggedIn && (<h1>{membership.name}</h1>)} */}
			{/* Detail account */}
			{isLoggedIn && (
				<Modal
					width="1100px"
					style={{ padding: 0 }}
					visible={AccShow}
					onOk={() => setAccShow(false)}
					onCancel={() => setAccShow(false)}
					className="modal"
				>
					<Tabs defaultActiveKey="1">
						<TabPane tab="Thông tin cá nhân" key="1">
							<div className="show_data">
								<div className="row1">
									<div className="label1">
										<h5>Tên:</h5>
									</div>
									<div className="content1">
										<h5>{membership.name}</h5>
									</div>
								</div>
								<div className="row1">
									<div className="label1">
										<h5>Ngày Sinh:</h5>
									</div>
									<div className="content1">
										<h5>{moment(membership.birthday).format("DD/MM/YYYY")}</h5>
									</div>
								</div>
								<div className="row1">
									<div className="label1">
										<h5>Địa Chỉ:</h5>
									</div>
									<div className="content1">
										<h5>{membership.address}</h5>
									</div>
								</div>
								<div className="row1">
									<div className="label1">
										<h5>Email:</h5>
									</div>
									<div className="content1">
										<h5>{membership.email}</h5>
									</div>
								</div>
							</div>
						</TabPane>
						<TabPane tab="Lịch sử đơn hàng đang xử lý" key="2">
							<h4 className="title_history">Đang Xử Lý</h4>
							<div className="history_processing">
								<Table columns={columns} rowKey={row => row.id} dataSource={data} />
							</div>
						</TabPane>
						<TabPane tab="Lịch sử đơn hàng đã xử lý" key="3">
							<h4 className="title_history">Đã Xử Lý</h4>
							<div className="history_processing">
								<Table columns={columns2} rowKey={row => row.id} dataSource={data2} />
							</div>
						</TabPane>
					</Tabs>
				</Modal>
			)}
			{/* Login */}
			<Modal
				width="1000px"
				style={{ padding: 0 }}
				visible={lgShow}
				onOk={() => setLgShow(false)}
				onCancel={() => setLgShow(false)}
				className="modal"
			>
				<Tabs defaultActiveKey="1">
					<TabPane tab="Đăng Nhập" key="1">
						<div className="signin">
							<div className="img">
								<Man className="man" height="150px" width="150px" />
							</div>
							<div className="title">
								<h3>Chào Mừng Đến Với Oal Milk Tea</h3>
							</div>
							<div className="input">
								<input
									value={signin.email}
									name="email"
									onChange={onChangeSignIn}
									type="text"
									placeholder="Nhập email" />
								<ErrorMessage hasError={formErrors.email} message="Email không hợp lệ" />
								<input
									type="password"
									value={signin.password}
									name="password"
									onChange={onChangeSignIn}
									placeholder="Nhập mật khẩu" />
								<ErrorMessage hasError={formErrors.password} message="Mật khẩu không hợp lệ" />
								<div className="check">
									<div className="remember-user">
										<Checkbox className="checked" onChange={onChange}>
											Ghi Nhớ Tài Khoản</Checkbox>
										<label className="forgot" htmlFor="forgot">Quên Tài Khoản</label>

									</div>
								</div>
								<Button className="btn-submit" loading={isLogging} disabled={!formValid} onClick={handleSignIn}>Đăng Nhập</Button>
							</div>
						</div>
					</TabPane>
					<TabPane tab="Đăng Ký Tài Khoản" key="2">
						<div className="sign-up">
							<div>
								<Steps current={step} onChange={handleChangeStep}>
									<Step title="Bước 1" icon={<Icon type="user" />} description="Nhập Thông Tin Tài Khoản" />
									<Step title="Bước 2" icon={<Icon type="solution" />} description="Nhập Thông Tin Người Dùng" />
								</Steps>
								{render(step)}
								<div className="steps-action">
									{step === 0 && (
										<Button disabled={!formAccountSignUpValid} onClick={() => handleChangeStep(1)} type="primary">Tiếp</Button>
									)}
									{step === 1 && (
										<Button onClick={() => handleChangeStep(0)} >Quay Lại</Button>
									)}
								</div>
							</div>
						</div>
					</TabPane>
				</Tabs>
			</Modal>
		</>
	);
};