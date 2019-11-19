import React, { useState } from 'react';
import './Modal2.css';
import { Modal, Card } from 'antd';
import 'antd/dist/antd.css';

const { Meta } = Card;

export const Modal2 = () => {
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
						src="https://file.hstatic.net/1000360860/file/27.1_d475213ec4034fb2a881c31304a6c773_grande.jpg"
					/>
				}
			>
				<Meta
					title="Thị trường trà sữa Việt: Thương hiệu nào là  'Chuẩn'?"
					description="Theo thống kê của Hiệp hội doanh nghiệp vừa và nhỏ Việt Nam, hiện cả nước có gần 2.000 điểm bán trà sữa và cứ 4 ngày có thêm một quán trà sữa xuất hiện ở các tỉnh, 
							thành phố đặc biệt là tại các thành phố lớn. Cùng với đó là sự xuất hiện của hàng chục thương hiệu trà sữa đến từ Đài Loan, Singapore, Malaysia…"
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
					<h2>Thị trường trà sữa Việt: Thương hiệu nào là “chuẩn”?</h2>
					<img
						alt="not found"
						src="https://file.hstatic.net/1000360860/file/27.1_d475213ec4034fb2a881c31304a6c773_grande.jpg"
					/>
					<h4>
						Theo thống kê của Hiệp hội doanh nghiệp vừa và nhỏ Việt Nam, hiện cả nước có gần 2.000 điểm bán
						trà sữa và cứ 4 ngày có thêm một quán trà sữa xuất hiện ở các tỉnh, thành phố đặc biệt là tại
						các thành phố lớn. Cùng với đó là sự xuất hiện của hàng chục thương hiệu trà sữa đến từ Đài
						Loan, Singapore, Malaysia…
					</h4>
					<h5>
						Mới đây, một thương hiệu trà sữa “thuần Việt” cũng tham gia “sân chơi” này và nhanh chóng chiếm
						lĩnh được thị trường với hệ thống hàng trăm cửa hàng trên toàn quốc.
					</h5>
					<h4>“Mê hồn trận” và bát nháo nguyên liệu trà sữa</h4>
					<h5>
						“Với hơn 50 thương hiệu trà sữa cùng gần 2.000 điểm bán trà sữa trải khắp các tỉnh thành phố 3
						miền Bắc, Trung, Nam, thị trường trà sữa của Việt Nam được đánh giá là bùng nổ nhưng chưa hề có
						dấu hiệu bão hòa. Tức là nhu cầu thị trường là rất lớn nên không hề thiếu “đất diễn” cho các
						thương hiệu trà sữa đi sau. Cái khó ở đây, chính là sự lựa chọn của người tiêu dùng” – Chuyên
						gia về thương hiệu và phân tích thị trường trà sữa Lê Anh Minh đưa ra nhận định.
					</h5>
					<img
						alt="not found"
						src="https://file.hstatic.net/1000360860/file/27.2_0ae81696c3fe4bf68f980b71a1e2e58d_grande.jpg"
					/>
					<h5>
						Nhiều thương hiệu trà sữa sử dụng nguyên liệu không rõ nguồn gốc, xuất xứ bị cơ quan chức năng
						tịch thu Theo chuyên gia này, nguyên nhân của sự bùng nổ thị trường trà sữa là do thay đổi trong
						xu hướng người tiêu dùng đặc biệt là người tiêu dùng ở các độ tuổi khác nhau chứ không chỉ khu
						biệt trong giới trẻ (độ tuổi 16-35). Cùng với việc thay đổi xu hướng trên diện rộng ở các độ
						tuổi khác nhau đã dẫn đến một trào lưu mới: Trào lưu trà sữa! “Sự kết hợp của trào lưu với sức
						hấp dẫn của thị trường trà sữa Việt – vốn được được đánh giá có giá trị lên đến khoảng 300 triệu
						USD và sức tăng trưởng 20% mỗi năm đã khiến những nhà cung cấp “bung” ra nhiều thương hiệu trà
						sữa kể cả việc chuyển nhượng thương hiệu cho các điểm bán hàng” – Chuyên gia Lê Anh Minh nói.
						Tuy nhiên, tăng trưởng nóng ở thị trường trà sữa cũng đem đến một hệ quả: Nhiều doanh nghiệp
						kinh doanh trà sữa lợi dụng lòng tin của khách hàng tiến hành pha trộn nhiều nguyên liệu không
						rõ nguồn gốc xuất xứ, chưa được kiểm định chất lượng hoặc trôi nổi trên thị trường. Gần đây
						nhất, tại Hà Nội, cơ quan quản lý thị trường phối hợp với các lực lượng chức năng phát hiện, thu
						giữ hàng chục tấn nguyên liệu trà sữa không rõ nguồn gốc xuất xứ, không hóa đơn chứng từ của một
						doanh nghiệp kinh doanh trà sữa. Trong đó, cơ quan chức năng đã tiến hành xử lý khi doanh nghiệp
						này cố tình sử dụng nhiều túi nguyên liệu trà sữa do nước ngoài sản xuất sau đó xé bỏ bao bì,
						đóng bao bì mới sau đó gắn nhãn sản xuất tại Việt Nam. Trong khi đó, điều tra độc lập của PV tại
						chợ Bình Tây (Q.6, TP.HCM), cũng ghi nhận tình trạng “bát nháo” trong việc kinh doanh các nguyên
						liệu pha chế trà sữa từ trân châu, bột sữa, bột trà, bột trà sữa hòa tan… và xuất xứ cũng hết
						sức đa dạng, từ Thái Lan, Đài Loan, Hàn Quốc, Nhật… Tất cả được xếp chồng chất, thành hàng dài
						và giá bán rất rẻ.
					</h5>
					<h4>Thương hiệu nào là “chuẩn”?</h4>
					<h5>
						Theo Quy định của Bộ Y tế và các bộ ngành liên quan, để có đủ điều kiện cho việc kinh doanh trà
						sữa, doanh nghiệp bắt buộc phải đáp ứng các yêu cầu cơ bản: Có giấy phép kinh doanh ngành nghề
						sản xuất hoặc kinh doanh thực phẩm; có giấy chứng nhận cơ sở đủ điều kiện về an toàn thực phẩm;
						nhãn sản phẩm, ảnh chụp sản phẩm và kết quả kiểm nghiệm an toàn đối với sản phẩm trà sữa; giấy
						tờ chứng minh nguồn gốc xuất xứ đối với các sản phẩm hoặc nguyên liệu nhập khẩu… Theo chuyên gia
						Lê Anh Minh thì đó chỉ là những điều kiện cần, còn điều kiện đủ phải còn cộng thêm sự đánh giá
						của chính khách hàng và người tiêu dùng. Đó mới là thước đo quan trọng nhất của một thương hiệu
						thế nào là “chuẩn”, thế nào là uy tín.
					</h5>
					<img
						alt="not found"
						src="https://file.hstatic.net/1000360860/file/27.3_9bd424eff6104c79a888c9ccbd7032d3_grande.jpg"
					/>
					<h5>
						Nếu nhìn chung về các thương hiệu trà sữa tại TP Hà Nội và TP.HCM, gần đây nhiều khách hàng nằm
						trong trào lưu “trà sữa” rất ít còn tình trạng “thấy quán nào, ngồi quán đó” theo thói quen mà
						bắt đầu chuyển sang lựa chọn các điểm bán trà sữa có thương hiệu và uy tín. “Một trong các điểm
						đến của nhóm bạn mình là những quán trà sữa mang thương hiệu TOCOTOCO” – Nguyễn Thùy Linh, SV
						trường Đại học Ngoại thương Hà Nội chia sẻ. Việc lựa chọn của Linh, nhóm bạn và nhiều khách hàng
						khác của gần 200 điểm bán hàng TOCOTOCO trên toàn quốc được cho là sự lựa chọn chuẩn khi nhiều
						cơ quan chức năng trong đã chứng nhận: Tất cả quy trình sản xuất, thiết bị pha chế được giám sát
						nghiêm ngặt. Các nguyên liệu như trân châu, trà, sữa non… đều có chứng nhận bởi Bộ Y tế, cơ quan
						an toàn thực phẩm… dù bất kể đó là sản phẩm nguyên chất từ Việt Nam hay nhập khẩu từ nước
						ngoài.
					</h5>
					<img
						alt="not found"
						src="https://file.hstatic.net/1000360860/file/27.4_50ea3205c7f24fe5a17abf212a7fc8eb_grande.jpg"
					/>
					<h5>
						Theo tìm hiểu của PV, thương hiệu trà sữa TocoToco được thành lập bởi công ty cổ phần TMDV Taco
						Việt Nam, với cửa hàng đầu tiên được mở tại phố Bạch Mai, Hà Nội, năm 2013. Sau 5 năm ra mắt,
						giờ đây TocoToco đã là một tên tuổi thuộc hàng “top” trong thị trường trà sữa Việt Nam, một cái
						tên bảo chứng cho cả vị ngon và chất lượng. Được biết, năm 2017, thương hiệu trà sữa TocoToco
						vừa được vinh danh trong top 10 thương hiệu, sản phẩm, dịch vụ hàng đầu Việt Nam 2017 do Viện
						Công nghệ chống làm hàng giả, Hiệp hội chống làm hàng giả, bảo vệ thương hiệu Việt Nam, Cục Quản
						lý thị trường, Trung tâm phát triển tài sản trí tuệ tổ chức.
					</h5>
				</div>
			</Modal>
		</div>
	);
};
