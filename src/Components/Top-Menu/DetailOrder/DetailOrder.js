import React, { useContext, useState } from 'react';
import { DataContext } from '../../../context/DataProvider';
import moment from 'moment';
import { Modal, Descriptions, Table } from 'antd';



export const DetailOrder = ({orderDetail}) => {
    const { store: { myProcessingOrders } } = useContext(DataContext);


    // const data = orderDetail;

    const [showModal, setShowModal] = useState(false);

    // detail order
    // const column1 = [
    //     {
    //         key: 'createAt',
    //         title: 'Ngày Đặt Hàng',
    //         dataIndex: 'createAt',
    //         render: createAt => moment(createAt).format("DD/MM/YYYY"),
    //         width: 150,
    //         align: 'center'
    //     },
    //     {
    //         key: 'name',
    //         title: 'Tên',
    //         dataIndex: 'receiverInfo.name',
    //         width: 150,
    //         align: 'center'
    //     },
    //     {
    //         key: 'address',
    //         title: 'Địa Chỉ',
    //         dataIndex: 'receiverInfo.address',
    //         width: 200,
    //         align: 'center'
    //     },
    //     // {
    //     // 	key: 'phoneNumber',
    //     // 	title: 'SĐT',
    //     // 	dataIndex: 'receiverInfo.phoneNumber',
    //     // 	width: 100,
    //     // 	align: 'center'
    //     // },
    //     {
    //         key: 'product',
    //         title: 'product',
    //         dataIndex: 'detail',
    //         width: 100,
    //         align: 'center'
    //     },
    // ]
    return (
        <div>
            <button className="viewdetail" onClick={() => setShowModal(true)}>
                Xem
			</button>
            <Modal
                width="1000px"
                title="Chi Tiết Sản Phẩm"
                visible={showModal}
                onOk={() => setShowModal(false)}
                onCancel={() => setShowModal(false)}
            >
                <Descriptions layout="vertical" title="Chi Tiết Hóa Đơn">
                    <Descriptions.Item label="Ngày">
                        {moment(orderDetail.createAt).format("DD/MM/YYYY")}
                    </Descriptions.Item>
                    {/* <Descriptions.Item label="Tên">
                        {orderDetail.priceTotal}
                    </Descriptions.Item> */}
                    {/* <Descriptions.Item label="Địa Chỉ">
                        {orderDetail.receiverInfo.address}
                    </Descriptions.Item>
                    <Descriptions.Item label="SĐT">
                        {orderDetail.receiverInfo.phoneNumber}
                    </Descriptions.Item> */}
                    
                </Descriptions>
            </Modal>
        </div>
    );
};
