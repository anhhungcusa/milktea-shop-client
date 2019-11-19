import React, { useState } from 'react';
import './Modal3.css';
import { Modal, Card } from 'antd';
import 'antd/dist/antd.css';

const { Meta } = Card;

export const Modal3 = () => {
	const [ lgShow, setLgShow ] = useState({ visible: false });

	return (
		<div>
			<Card
				className="card"
				onClick={() => setLgShow(!lgShow)}
				hoverable
				style={{ width: 400, height: 500 }}
				cover={
					<img
						alt="not found"
						height="350px"
						width="400px"
						src="https://file.hstatic.net/1000360860/file/24.1_915aed6663244ebcbc614db7d54453de_grande.jpg"
					/>
				}
			>
				<Meta
					title="Mục sở thị công việc của các chuyên gia R&D Ola Milktea"
					description="Để có một đồ uống chất lượng được đưa tới tay khách hàng, bộ phận R&D (phát triển sản phẩm) TocoToco đã phải trải qua những ngày dài dày công nghiên cứu lặng thầm mà không phải ai cũng biết đến.
							Vai trò của R&D tại TocoToco là gì?

							Một sản phẩm được nằm trong danh sách menu TocoToco không phải là điều dễ dàng, bởi ngoài độ ngon là chưa đủ, đồ uống đó còn phải thật sự an toàn, chất lượng và tốt cho sức khoẻ. 
							Và bộ phận đảm nhận công việc tìm ra những đồ uống đó là phòng R&D."
				/>
			</Card>
			<Modal
				title="Câu Chuyện Thương Hiệu"
				width="1000px"
				visible={!lgShow}
				onOk={() => setLgShow(!lgShow)}
				onCancel={() => setLgShow(!lgShow)}
			>
				<div className="contentmodal">
					<h2>Mục sở thị công việc của các chuyên gia R&D Ola Milktea</h2>
					<img
						alt="not found"
						src="https://file.hstatic.net/1000360860/file/24.1_915aed6663244ebcbc614db7d54453de_grande.jpg"
					/>
					<h4>
						Để có một đồ uống chất lượng được đưa tới tay khách hàng, bộ phận R&D (phát triển sản phẩm)
						TocoToco đã phải trải qua những ngày dài dày công nghiên cứu lặng thầm mà không phải ai cũng
						biết đến.
					</h4>
					<h4>Vai trò của R&D tại Ola Milktea là gì?</h4>
					<h5>
						Một sản phẩm được nằm trong danh sách menu TocoToco không phải là điều dễ dàng, bởi ngoài độ
						ngon là chưa đủ, đồ uống đó còn phải thật sự an toàn, chất lượng và tốt cho sức khoẻ. Và bộ phận
						đảm nhận công việc tìm ra những đồ uống đó là phòng R&D.
					</h5>
					<img
						alt="not found"
						src="https://file.hstatic.net/1000360860/file/24.1_915aed6663244ebcbc614db7d54453de_grande.jpg"
					/>
					<h5>
						R&D (tên tiếng Anh là Research and Development) là bộ phận “nghiên cứu và phát triển”. Trong
						ngành F&B (dịch vụ nhà hàng và đồ uống), R&D có vai trò nghiên cứ và phát triển để cho ra đời
						những sản phẩm mới. Tại TocoToco, R&D sẽ đảm nhận vai trò tìm ra những đồ uống mới bắt kịp xu
						hướng, có diện mạo, công dụng cũng như thành phần mới. Ngoài ra, phòng ban này còn thực hiện quá
						trình cải thiện và nâng cao chất lượng của những đồ uống hiện có của thương hiệu để phù hợp và
						theo kịp thị hiếu của khách hàng.
					</h5>
					<h4>R&D Ola Milktea – Một trong những chìa khoá thành công của thương hiệu</h4>
					<h5>
						Tại TocoToco, R&D được coi là một trong những chìa khoá làm nên thành công của thương hiệu. Việc
						cho ra đời sản phẩm mới, hay cải tiến những đồ uống đã có đều là những mảnh ghép không thể
						thiếu, là một trong những yếu tố quyết định việc sự nhìn nhận, đánh giá của khách hàng đối với
						sản phẩm, cũng như quyết định họ sẽ tiếp tục ủng hộ hay từ bỏ thương hiệu.
					</h5>
					<img
						alt="not found"
						src="https://file.hstatic.net/1000360860/file/21.2_bd50379433834f64b93befea007b0124_grande.jpg"
					/>
					<h5>
						Để có thể cho ra đời một đồ uống mới, các chuyên gia của phòng R&D sẽ “xuống phố” tìm hiểu đối
						tượng khách hàng mà thương hiệu đang chú trọng tiếp cận, khảo sát xem thị trường đang cần gì,
						khách hàng mong muốn điều gì về đồ uống trong thời điểm hiện tại. Nắm bắt được thị hiếu khách
						hàng cũng như điều mà thị trường đang thiếu mà lại rất cần, lúc đó việc nảy ra đáp án cho bài
						toán đồ uống mới đã không còn là một ấn số nữa.
					</h5>
					<img
						alt="not found"
						src="https://file.hstatic.net/1000360860/file/24.3_bc10bcb7b36b4553a096aca75ca38dc2_grande.jpg"
					/>
					<h5>
						Với những đồ uống đã có, để tránh sự quen thuộc đến nhàm chán của khách hàng, các chuyên gia R&D
						sẽ đặt ra một bài toán so sánh giữa các giá trị từ công thức cũ đem lại với công thức mới. Nếu
						công thức cải tiến mới vẫn giữ nguyên vẹn được giá trị của sản phẩm từ chất lượng nguyên liệu,
						giá trị dinh dưỡng nhưng hương vị lại ngon hơn thì sự thay đổi này hoàn toàn hợp lý, xứng đáng
						được đưa đến tay khách hàng với diện mạo hoàn toàn mới.
					</h5>
					<h4>Đổi mới hay cải tiến vẫn phải giữ nguyên giá trị cốt lõi</h4>
					<h5>
						Sử dụng phương châm lấy “giá trị cốt lõi” của thương hiệu làm nền tảng để phát triển sản phẩm,
						các đồ uống tại TocoToco dù mới hay cải tiến từ sản phẩm đã có đều phải trải qua quá trình kiểm
						định chất lượng nghiêm ngặt, khi đã đạt chuẩn thì mới được đem ra sử dụng.
					</h5>
					<img
						alt="not found"
						src="https://file.hstatic.net/1000360860/file/24.4_673973a2589f499db0316e31ef4e02b0_grande.jpg"
					/>
					<h5>
						Các chuyên gia R&D mỗi ngày vẫn miệt mài trên hành trình tìm kiếm các vùng nguyên liệu. Là một
						thương hiệu Việt, TocoToco chủ trương ưu tiên sử dụng các nguyên liệu thuần Việt để tạo nên các
						đồ uống. Các nguyên liệu từ trà hay tinh bột sắn TocoToco đều được ươm trồng và sản xuất tại
						Việt Nam, đạt chuẩn về giá trị dinh dưỡng cũng như hương vị quê hương trong từ ly thành phẩm.
						Nhờ chủ trương này, TocoToco đã phần lớn giải quyết được vấn đề đầu ra của các nông sản tại Việt
						Nam.
					</h5>
					<h5>
						Để tạo ra một ly thành phẩm đạt chuẩn đưa tới tay khách hàng, các chuyên gia pha chế tại
						TocoToco chắc chắn không thể mắc những sai lầm cơ bản trong quá trình pha chế. Nhân viên tại cửa
						hàng được đào tạo chuyên sâu và trải qua quá trình kiểm tra trình độ định kỳ. Việc đảm bảo các
						nguyên vật liệu được sử dụng đúng quy định, các vật dụng đảm bảo vệ sinh cũng như quy trình pha
						đúng quy cách đều được kiểm tra thường xuyên. TocoToco – Thương hiệu trà sữa Việt Nam với dịch
						vụ thân thiện, chuyên nghiệp sẽ không ngừng cải thiện chất lượng cũng như từng ngày nghiên cứu
						để cho ra đời những đồ uống mới đáp ứng kịp thời nhu cầu của khách hàng.
					</h5>
				</div>
			</Modal>
		</div>
	);
};
