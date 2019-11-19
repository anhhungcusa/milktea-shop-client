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
import { formatDate } from '../../../constant/firebase';
import { FirebaseService } from '../../../service/firebase';

// const { SubMenu } = Menu;
const { Step } = Steps;
const { TabPane } = Tabs;


function onChange(e) {
}


export const Login = () => {
	const { action: { auth: { signIn } } } = useContext(DataContext);
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
				cart: [],
				point: 0,
				numberOfCancels: 0,
				numberOfReturns: 0,
				createAt: new Date(),
				updateAt: new Date(),
				isDeleted: false
			}
			await FirebaseService.addNewMembership(membership)
			setIsRegistering(false)
			message.success('Đăng ký thành công!')
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
			<Avatar size="large" />
			<Button id="sign-in" size="small" onClick={() => setLgShow(true)}
				style={{ marginLeft: 16, verticalAlign: 'middle' }}>
				Login
			</Button>

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
								<h3>Chào Mừng Đến Với AOL Milktea</h3>
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