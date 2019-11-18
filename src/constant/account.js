export const accountLimitValue = {
    name: {
        min: 3,
        max: 10
    },
    address: {
        min: 10,
        max: 20
    },
    phone: {
        min: 10,
        max: 11
    }
}

export const errorMessage = {
    email:`Email không được để trống`,
    password: `Không được để trống và gồm chữ và số`,
    password_again: `Không được để trống và gồm chữ và số`,
    name: `Không được để trống`,
    address: `ít nhất ${accountLimitValue.address.min} đến ${accountLimitValue.address.max} ký tự`,
    phone: `Là số và  ít nhất từ ${accountLimitValue.phone.min} đến ${accountLimitValue.phone.max} số`,
    ngaysinh: `Ngày sinh không được để trống`
}