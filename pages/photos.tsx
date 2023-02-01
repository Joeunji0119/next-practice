import HeadInfo from '@/components/HeadInfo';
import { css } from '@emotion/react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

const photos = ({ photos }: any) => {
	return (
		<div style={{ width: '100vw', height: '100vh', background: 'pink' }}>
			<HeadInfo title='my blog photos' />
			<h1>photos</h1>
			<ul css={photoDisplay}>
				{photos.map(photo => (
					<ul key={photo.id}>
						<Link href={`photos/${photo.id}`}>
							<Image
								src={photo.thumbnailUrl}
								width={100}
								height={100}
								alt={photo.title}
							/>
							<h4>{photo.title}</h4>
						</Link>
					</ul>
				))}
			</ul>
		</div>
	);
};

export default photos;

export const getStaticProps = async () => {
	const data = await axios(process.env.REACT_APP_PHOTOS_API);
	const photos = await data.data;
	return {
		props: { photos },
		revalidate: 20,
	};
};

const photoDisplay = css({
	display: 'grid',
	gridTemplateColumns: 'repeat(4,1fr)',
	gridGap: '1rem',
});
