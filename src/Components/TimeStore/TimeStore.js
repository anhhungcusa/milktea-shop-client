import React, { useContext, useMemo } from 'react';
import './TimeStore.css';
import 'antd/dist/antd.css';
import { DataContext } from '../../context/DataProvider';
import { checkTimeActive } from '../../utils';

export const TimeStore = () => {
	let { store: {  timeStore } } = useContext(DataContext);
	const isActive = useMemo(() => {
		return checkTimeActive(timeStore.start, timeStore.end, timeStore.status)
	}, [timeStore.end, timeStore.start, timeStore.status])
 
	return (
		// <Router>
		<div className="time-Store">
			<div className="timeStore">
				{
					<h2>
						Thời Gian Mở Cửa: {timeStore.start}h đến {timeStore.end}h ({isActive? "Đang mở": "Đã đóng cửa"})
					</h2>
				}
			</div>
		</div>
		// </Router>
	);
};
