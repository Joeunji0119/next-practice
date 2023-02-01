import HeadInfo from '@/components/HeadInfo';
import React from 'react';

const photos = () => {
	return (
		<div style={main}>
			<HeadInfo title='my blog photos' />
			<h1>photos</h1>
		</div>
	);
};

export default photos;

const main = {
	background: 'pink',
	width: '100%',
	height: '100vh',
};
