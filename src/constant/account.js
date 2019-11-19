export const accountLimitValue = {
    name: {
        min: 3,
        max: 10
    },
    address: {
        min: 10,
        max: 50
    },
    phone: {
        min: 10,
        max: 11
    }
}

export const errorMessage = {
    email:`Địa chỉ email không hợp lệ`,
    password: `Mật khẩu phải lớn hơn 6 ký tự`,
    password_again: `Nhập lại mật khẩu không hợp lệ`,
    name: `Không được để trống`,
    address: `Địa chỉ phải từ ${accountLimitValue.address.min} đến ${accountLimitValue.address.max} ký tự`,
    phone: `Số điện thoại phải từ ${accountLimitValue.phone.min} đến ${accountLimitValue.phone.max} số`,
    ngaysinh: `Ngày sinh không được để trống`
}