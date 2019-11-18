import React, { useState, useContext, useCallback, useMemo } from 'react';
import 'antd/dist/antd.css';
import './Login.css';
import { DataContext } from '../../../context/DataProvider';
import * as firebase from "firebase/app";
import { checkIsNaN, checkMinMax, checkIsInterge } from "../../../utils/Validates";
// Add the Firebase services that you want to use
import "firebase/auth";
import {  Avatar, Button, Modal, Checkbox, Tabs, Steps, message, Icon  } from 'antd';
import { ReactComponent as Man } from '../../../Asset/Image/man.svg';
import { ErrorMessage } from '../../ErrorMessage/ErrorMessage';
import { errorMessage, accountLimitValue } from '../../../constant/account';

// const { SubMenu } = Menu;
const { Step } = Steps;	
const { TabPane } = Tabs;


function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}


export const Login = () => {
	//validate
const [formErrors, setFormErrors] = useState({
	email: true,
	password: true,
})
const formValid = useMemo(() => {
	return Object.values(formErrors).every(item => item === false)
}, [formErrors])

const [formErrors1, setFormErrors1] = useState({
	email1: true,
	password1: true,
	password_again: true,
	name: true,
	address: true,
	phone: true
})
const formValid1 = useMemo(() => {
	return Object.values(formErrors1).every(item => item === false)
}, [formErrors1])
const handleValidate = useCallback((name, value ) => {
	let isValid = false;
	switch (name) {
		case 'email':
			isValid = !checkIsNaN(+value)
			console.log('email', isValid)
			break;
		case 'password':
			isValid = checkIsNaN(!value) 
			console.log('password', isValid)
			break;
		default:
			break;
	}
	setFormErrors(formErrors => ({ ...formErrors, [name]: isValid }))
}, []);
const handleValidate1 = useCallback((name, value ) => {
	let isValid = false;
	switch (name) {
		case 'email1':
			isValid = !checkIsNaN(+value)
			console.log('email1', isValid)
			break;
		case 'password1':
			isValid = !checkIsNaN(+value) 
			console.log('password1', isValid)
		break;
		case 'password_again':
			isValid = !checkIsNaN(+value)
			console.log('password122', isValid)
		break;
		case 'name':
			isValid = !checkIsNaN(value) && checkIsInterge(+value) 
			// !checkIsNaN(value) && checkIsInterge(+value)
			console.log('name', isValid)
			break;
		case 'address':
			isValid = !checkIsNaN(value) && checkMinMax(value.length, accountLimitValue.address.min, accountLimitValue.address.max)
			console.log('address', isValid)
			break;
		case 'phone':
			isValid =  !checkIsNaN(+value) && checkIsInterge(+value) && checkMinMax(+value, accountLimitValue.phone.min, accountLimitValue.phone.max)
			console.log('phone', isValid)	
			// console.log('password12', typeof(+value))	
			break;
		case 'ngaysinh':
			isValid = checkIsNaN(!value)
			break;
		default:
			break;
	}
	setFormErrors1(formErrors1 => ({ ...formErrors1, [name]: isValid }))
}, []);
const [signin, setSignIn] = useState({
	email: "",
	password: ""
})
const [account, setAccount] = useState({
	email1: "",
	password1: "",
	password_again: "",
	name: "",
	address: "",
	phone: "",
	ngaysinh: "mm/dd/yyyy"
});
const [step, setStep] = useState(0);
let {
	action: { accountIF: { SignIn } }
} = useContext(DataContext);
const [ lgShow, setLgShow ] = useState({ visible: false });  
const callback= (key) =>  {
// console.log(key);
}
const handleSignIn = ( email, password) => {
	SignIn(email, password);
};
// // handle change step
const handleChangeStep1 = (value) => {
	setStep(step + value);
}

// handle Sign up
const handleSignUp = () => {
	console.log("Click Sign up");

	if (account.email.length < 4) {
        alert('Please enter an email address.');
        return;
      }
      if (account.password.length < 4) {
        alert('Please enter a password.');
        return;
      }
	  firebase.auth().createUserWithEmailAndPassword(account.email, account.password)
	  .then(_ => {
		message.success(account.email + " Sign up Success");
	  })
	  .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
	  });
}

// useEffect(() => {
// 	console.log(account);
// }) 

  const handleChangeStep = curr => {
    setStep(curr);
  };
  const onChangeSignIn = event => {
	  setSignIn({
		  ...signin,
		  [event.target.name]: event.target.value
	  });
	  handleValidate(event.target.name, event.target.value);
  }
  const onChangeAccount = event => {
    setAccount({
      ...account,
      [event.target.name]: event.target.value
	});
	handleValidate1(event.target.name, event.target.value);
  };
//   const [state, setState] = useState();
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
					value={account.email1}
            		name="email1"
					onChange={onChangeAccount}
					placeholder="Please enter email address"
            />
				<ErrorMessage  hasError={formErrors1.email1} message={errorMessage.email} />

				</div>
			  </div>
			  <div className="line">
				<div className="item">
					<label>Password: </label>
				</div>
				<div className="item">
				<input
				className="password"
				type="password"
				value={account.password1}
            	name="password1"
				onChange={onChangeAccount}
				placeholder="Please enter your password"
            />
				<ErrorMessage  hasError={formErrors1.password1} message={errorMessage.password} />

				</div>
			  </div>
			  <div className="line">
				<div className="item">
					<label>Password again: </label>
				</div>
				<div className="item">
				<input
				className="password_again"
				type="password"
				value={account.password_again}
            	name="password_again"
				onChange={onChangeAccount}
				placeholder="Please enter your password"
            />
				<ErrorMessage  hasError={formErrors1.password_again} message={errorMessage.password_again} />
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
            		value={account.name}
            		name="name"
					onChange={onChangeAccount}
					placeholder="Tên Khách Hàng"
            />
				<ErrorMessage  hasError={formErrors1.name} message={errorMessage.name} />
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
				value={account.address}
            	name="address"
				onChange={onChangeAccount}
				placeholder="Địa Chỉ Khách Hàng"
            />
				<ErrorMessage  hasError={formErrors1.address} message={errorMessage.address} />
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
				value={account.phone}
            	name="phone"
				onChange={onChangeAccount}
				placeholder="Số Điện Thoại Khách Hàng"
            />
				<ErrorMessage  hasError={formErrors1.phone} message={errorMessage.phone} />
				</div>
			  </div>

			  <div className="line">
				<div className="item">
					<label>Ngày Sinh: </label>
				</div>
				<div className="item">
				<input
				className="ngay_sinh"
				type="date"
            	value={account.ngaysinh}
            	name="ngaysinh"
				onChange={onChangeAccount}
            />
				<ErrorMessage  hasError={formErrors1.ngaysinh} message={errorMessage.ngaysinh} />

				</div>
			  </div>

			  <div>
			  	<Button className="btn-register" disabled={!formValid1} onClick={handleSignUp}>Register</Button>
			  </div>
		</div>
		);
      default:
        return <div>4444</div>;
    }
  };
	return (
		<>
			<Avatar size="large" />
      		<Button id="sign-in" size="small" onClick={() => setLgShow(!lgShow)} 
      				style={{ marginLeft: 16, verticalAlign: 'middle' }}>
					Login
			</Button>
		
			<Modal
				width="1000px"
				style={{padding: 0}}
				visible={!lgShow}
				onOk={() => setLgShow(!lgShow)}
				onCancel={() => setLgShow(!lgShow)}
				className="modal"
			>

				<Tabs   defaultActiveKey="1" onChange={callback}>
					<TabPane tab="Đăng Nhập" key="1">
						<div className="signin">
							<div className="img">
								<Man className="man" height="150px" width="150px"/>
							</div>
							<div className="title">
								<h3>Chào Mừng Đến Với Aol Milk Tea</h3>
							</div>
							<div className="input">
								<input
								value={signin.email}
								name="email"
								onChange={onChangeSignIn}
								type="text" 
								placeholder="Nhập Tài Khoản"/>
								<ErrorMessage  hasError={formErrors.email} message={errorMessage.email} />
								<input 
								type="password" 
								value={signin.password}	
								name="password"
								onChange={onChangeSignIn}
								placeholder="Nhập Mật Khẩu"/>
								<ErrorMessage  hasError={formErrors.password} message={errorMessage.password} />
								<div className="check">
									<div className="remember-user">
									<Checkbox className="checked" onChange={onChange}>
										<label htmlFor="remember">Ghi Nhớ Tài Khoản</label></Checkbox>
										<label className="forgot" htmlFor="forgot">Quên Tài Khoản</label>

									</div>
								</div>
								<Button className="btn-submit" disabled={!formValid} onClick={() => handleSignIn(signin.email, signin.password)}>Đăng Nhập</Button>
							</div>
						</div>
					</TabPane>
					<TabPane tab="Đăng Ký Tài Khoản" key="2">
						<div className="sign-up">
							<div>
								<Steps current={step} onChange={handleChangeStep}>
									<Steps.Step title="Bước 1" icon={<Icon type="user" />} description="Nhập Thông Tin Tài Khoản" />
									<Step title="Bước 2" icon={<Icon type="solution" />} description="Nhập Thông Tin Người Dùng" />
								</Steps>
								{render(step)}
								<div className="steps-action">
									{step === 0 && (
										<Button onClick={() => handleChangeStep1(1)} type="primary">Tiếp</Button>
									)}
									{step === 1 && (
										<Button onClick={() => handleChangeStep1(-1)} >Quay Lại</Button>
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