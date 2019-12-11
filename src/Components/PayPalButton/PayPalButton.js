import React from 'react'
import { PayPalButton } from "react-paypal-button-v2";
import { message } from 'antd';

export const PayPalCheckout = ({ onCompleted, amount }) => {
	const onSuccess = async data => {
		try {
			await onCompleted()
			message.success('Thanh toán thành công')
		} catch (error) {
			message.error('Thanh toán thất bại')
		}

	}
	return (
		<PayPalButton
			options={{
				clientId: "ARsP5araqIFvVeXPFdmLei9bqNnpl0QX_sklUSgUF5Lce7JFuVsBgXALAky-L0SwSQ-TEoaOgMAhAmB9"
			}}
			amount={amount}
			shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
			onSuccess={onSuccess}
		/>
	);

}