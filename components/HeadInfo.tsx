import Head from 'next/head';

interface Props {
	title: string;
	name: string;
	content: string;
}

const HeadInfo = ({ title, name, content }: Props) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name={name} />
			<meta content={content} />
		</Head>
		// 	<Head>
		//     <title>My Blog</title>
		//     <meta name='My blog powered by Next jS' />
		//     <meta content='aaaaMy blog powered by Next jS' />
		// </Head>
	);
};

HeadInfo.defaultProps = {
	title: 'My Blog',
	name: "My blog powered by Next jS'",
	content: "'aaaaMy blog powered by Next jS",
};

export default HeadInfo;
