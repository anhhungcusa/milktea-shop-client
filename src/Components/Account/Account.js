import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './HomeBody.css';
import 'antd/dist/antd.css';
import  { TimeStore }  from '../../TimeStore/TimeStore';
import { DataContext } from '../../../context/DataProvider';
import { Card } from 'antd';

export const HomeBody = () => {
	let { store: { products }} = useContext(DataContext);

	return (
        <div>

        </div>
	);
};
