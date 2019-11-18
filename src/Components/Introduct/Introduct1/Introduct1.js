import React from 'react';
import { IntroductHeader } from './IntroductHeader/IntroductHeader';
import { IntroductBody } from './IntrodyctBody/IntrodyctBody';
import { HomeFooter } from '../../HomePage/HomeFooter/HomeFooter';
export const Introduct1 = () => {
	return (
		<div>
			<div>
				<IntroductHeader />
			</div>
            <div>
                <IntroductBody/>
            </div>
			<div>
				<HomeFooter/>
			</div>
		</div>
	);
};
