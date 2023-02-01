import React from 'react';
import Nav from './Nav';

const Layout = ({ children }: { children: JSX.Element }) => {
	return (
		<>
			<Nav />
			<div>{children}</div>
		</>
	);
};

export default Layout;
