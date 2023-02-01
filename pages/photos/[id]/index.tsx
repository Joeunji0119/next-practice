import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

const index = ({ photo }) => {
	const { id, title, url } = photo;
	console.log(id);

	return (
		<>
			<h1>{title}</h1>
			<Image src={url} width={500} height={500} alt={title} />
			<Link href='/photos'>go back</Link>
		</>
	);
};

export default index;

export const getStaticProps = async context => {
	const { id } = context.params;

	const data = await axios(`${process.env.REACT_APP_PHOTO_API}/${id}`);
	const photo = await data.data;

	return {
		props: {
			photo,
		},
		revalidate: 20,
	};
};

export const getStaticPaths = async () => {
	const res = await fetch(process.env.REACT_APP_PHOTOS_API);
	const photos = await res.json();
	const ids = photos.map(photo => photo.id);
	const paths = ids.map(id => {
		return { params: { id: id.toString() } };
	});

	return {
		paths,
		fallback: false,
	};
};
