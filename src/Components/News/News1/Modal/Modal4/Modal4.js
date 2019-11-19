import React, { useState } from 'react';
import './Modal4.css';
import { Modal, Card } from 'antd';
import 'antd/dist/antd.css';

const { Meta } = Card;

export const Modal4 = () => {
	const [ lgShow, setLgShow ] = useState({ visible: false });

	return (
		<div>
			<Card
				className="card"
				hoverable
				onClick={() => setLgShow(!lgShow)}
				style={{ width: 400, height: 500 }}
				cover={
					<img
						alt="not found"
						height="350px"
						width="400px"
						src="https://file.hstatic.net/1000360860/file/17.5_1dd21feafb5948319679b8860aef893a_grande.jpg"
					/>
				}
			>
				<Meta
					title="Hé lộ chặng đường tạo ra một ly trà sữa Ola Milktea ngon đúng điệu"
					description="Uống trà sữa ngon, nhưng liệu bạn đã tường tận quá trình biến những nguyên liệu thô thành những ly trà sữa thơm ngon, tốt cho sức khỏe và ngập tràn tiếng cười hạnh phúc của TocoToco?"
				/>
			</Card>
			<Modal
				title="Chi Tiết Sản Phẩm"
				width="1000px"
				visible={!lgShow}
				onOk={() => setLgShow(!lgShow)}
				onCancel={() => setLgShow(!lgShow)}
			>
				<div className="contentmodal">
					<h2>Hé lộ chặng đường tạo ra một ly trà sữa TocoToco ngon đúng điệug</h2>
					<img
						alt="not found"
						src="https://file.hstatic.net/1000360860/file/17.5_1dd21feafb5948319679b8860aef893a_grande.jpg"
					/>
					<h4>
						Uống trà sữa ngon, nhưng liệu bạn đã tường tận quá trình biến những nguyên liệu thô thành những
						ly trà sữa thơm ngon, tốt cho sức khỏe và ngập tràn tiếng cười hạnh phúc của TocoToco?
					</h4>
					<img
						alt="not found"
						src="https://file.hstatic.net/1000360860/file/22.2_eaf775e824bf4f8fa0f6ee54588ce065_grande.jpg"
					/>
					<h4>Tìm kiếm các vùng nguyên liệu trên mảnh đất Việt Nam</h4>
					<h5>
						TocoToco sử dụng loại trà xanh được trồng trên vùng núi mát mẻ, có sương mù độ cao trên 1000m
						tại Việt Nam. Trà được hái bằng tay, định kì 45 ngày một lần và được hái sau khi tan sương vào
						buổi sáng, không hái vào trời nắng gắt hoặc vào những ngày trời mưa. Đặc biệt, trà chỉ được dùng
						pha chế trong ngày nên luôn đảm bảo được độ đạt chuẩn về hương vị và giá trị dinh dưỡng.
					</h5>
					<img
						alt="not found"
						src="https://file.hstatic.net/1000360860/file/19.8_6ec0d37f072749b28989621529be1d74_grande.jpg"
					/>
					<h5>
						TocoToco sử dụng sữa bột ngọt thơm và có độ ngậy hấp dẫn. Đặc biệt dòng kem phô mai TocoToco sử
						dụng là cream cheese Anchor nức danh ở New Zealand. Topping trân châu tại TocoToco đạt tới độ
						dẻo bùi thời thượng do được làm từ tinh bột sắn nguyên chất tại Việt Nam.
					</h5>
					<h4>Chỉn chu từ những khâu nhỏ nhất</h4>
					<h5>
						Nguyên liệu nhập về kho đều được được kiểm tra đảm bảo chất lượng sản phẩm và đầy đủ giấy tờ do
						cơ quan chức năng chứng nhận. Tại xưởng, tất cả các nguyên liệu sử dụng được sản xuất theo quy
						trình khép kín. Máy móc, thiết bị, môi trường sản xuất được diệt khuẩn, công nhân được trang bị
						đầy đủ bảo hộ, trước khi vào khu vực sản xuất đều rửa tay bằng nước diệt khuẩn, đi qua tủ hút
						mùi để đảm bảo không lây nhiễm chéo cho khu vực sản xuất. Bao bì chứa đựng sản phẩm đều đạt
						chuẩn bao bì sử dụng trong thực phẩm và được thanh trùng diệt khuẩn để đảm bảo an toàn vệ sinh
						thực phẩm.
					</h5>
					<img
						alt="not found"
						src="https://file.hstatic.net/1000360860/file/22.4_b6f5a1cf3ff14621bddbd89d970e8643_grande.jpg"
					/>
					<h5>
						Tại cửa hàng, dụng cụ pha chế đều được tráng nước lọc trước khi sử dụng, nước nấu đồ được xử lý
						qua máy lọc RO, được đun sôi đảm bảo an toàn chất lượng sản phẩm. Nguyên liệu trước khi pha chế
						được kiểm tra đảm bảo chất lượng cảm quan, hạn sử dụng...
					</h5>
				</div>
			</Modal>
		</div>
	);
};
