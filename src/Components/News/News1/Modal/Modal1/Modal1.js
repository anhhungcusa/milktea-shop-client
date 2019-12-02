import React, { useState } from 'react';
import './Modal1.css';
import { Modal, Card } from 'antd';
import 'antd/dist/antd.css';

const { Meta } = Card;

export const Modal1 = () => {
	const [ lgShow, setLgShow ] = useState({ visible: false });

	return (
		<div>
			<Card
				onClick={() => setLgShow(!lgShow)}
				className="card"
				hoverable
				style={{ width: 400, height: 500 }}
				cover={
					<img
						alt="not found"
						height="350px"
						width="400px"
						src="https://file.hstatic.net/1000360860/file/33.1_91c9f76634e7466abe7dc6b783cd7347_grande.jpg"
					/>
				}
			>
				<Meta
					title="Khái niệm 'bubble' trong 'bubble tea' hoá ra không phải "
					description="Thì ra có hẳn một giai thoại rõ ràng cho khái niệm “bubble” trong thế giới trà sữa đấy nhé!

							Khoảng những năm 80 của thế kỷ 20, lĩnh vực kinh doanh đồ uống giải khát, cụ thể là trà của Đài Loan khá biến động..."
				/>
			</Card>
			<Modal 
			title="Câu truyện thương hiệu"
			width="1000px"
			visible={!lgShow}
			onOk={() => setLgShow(!lgShow)}
			onCancel={() => setLgShow(!lgShow)}>
				<div className="contentmodal">
					<h2>Khái niệm “bubble” trong “bubble tea” hoá ra không phải là hạt trân châu như chúng ta vẫn lầm tưởng</h2>
					<img alt="not found" src="https://file.hstatic.net/1000360860/file/33.1_91c9f76634e7466abe7dc6b783cd7347_grande.jpg" />
					<h4>Thì ra có hẳn một giai thoại rõ ràng cho khái niệm “bubble” trong thế giới trà sữa đấy nhé!</h4>
					<h5>
					Khoảng những năm 80 của thế kỷ 20, lĩnh vực kinh doanh đồ uống giải khát, cụ thể là trà của Đài Loan khá biến động. 
					Từ những ly trà có vị chát đơn thuần, người bán đã biết cách biến hoá công thức pha chế để phù hợp và gây chú ý đối với khách hàng.

					Một số cửa hàng đã thêm vị hoa quả vào công thức pha trà để kích thích vị giác của khách hàng, tránh nhàm chán, gây ấn tượng và may mắn trở thành trào lưu lan rộng ra các quán khác. 
					Để có thể hòa quyện các nguyên liệu với nhau, người bán cho các nguyên liệu vào một chiếc bình, sau đó lắc mạnh để cho hương vị được hòa đều. Hành động lắc mạnh đã tạo ra bọt “bong bóng”, 
					trong tiếng anh là “bubble” nên từ đó khái niệm “bubble tea” đã ra đời, hoàn toàn không phải là hạt trân châu mà chúng ta vẫn nghĩ.
					</h5>
					<img alt="not found" src="https://file.hstatic.net/1000360860/file/33.2_deab42dc26f74cb7b9b1d8d3005f366d_grande.jpg"/>
					<h5>Cũng trong những năm đó, một ông chủ thương hiệu trà của Đài Loan đã cho ra đời ý tưởng thêm sữa vào những ly trà được làm lạnh. May mắn kể từ đó, Đài Loan có thêm một trào lưu 
						“uống trà sữa lạnh”. Không lâu sau, thêm một “cơn sốt” nằm ngoài mong đợi, khi quản lý của ông đã biết cách thêm đồ ăn kèm khi uống trà sữa, đó là “Fen Yuan” – 
						một đồ ăn tráng miệng màu đen và dẻo bùi của Đài Loan (chính là hạt trân châu). Nhanh chóng, sự kết hợp mới lạ này tiếp tục gây bão và được đón nhận cho đến tận bây giờ.
					</h5>
					<img alt="not found" src="https://file.hstatic.net/1000360860/file/33.3_ff2cf175dce145fc8b0bcf590bf2428d_grande.jpg"/>
					<h5>
					Khi đã hiểu hơn về trà sữa trân châu – đồ uống “vạn người mê” này, thì đừng chậm trễ mà hãy đến ngay Oal Milk Tea Bubble Tea – thương hiệu trà sữa Việt với hệ thống hơn 200 cửa hàng trong và ngoài nước.

					Trân châu tại Oal Milk Tea được sản xuất dưới dạng hạt tròn và sợi. Quá trình tạo ra trân châu cũng thật sự cầu kỳ. Tinh bột sắn sau khi được nhào với nước theo “tỷ lệ vàng” để tránh sự nhão hoặc cứng sẽ được mang đi 
					nấu ở nhiệt độ cao. Nghệ nhân Oal Milk Tea phải đảo cho thật đều tay để những hạt trân châu không bị dính vào nhau, cuối cùng cho ngâm với nước lọc.
					Những hạt trân châu đen nhánh, dẻo bùi hay những sợi trân châu vàng óng sẽ được ngâm với mật ong. Topping trân châu Oal Milk Tea đều được tán dương khi luôn ngọt ngào và đem lại những trải nghiệm thú vị cho khách hàng.
					</h5>
				</div>
			</Modal>
		</div>
	);
};
