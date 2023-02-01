import HeadInfo from '@/components/HeadInfo';
import axios from 'axios';

const Home = ({ data }: any) => {
	return (
		<>
			<HeadInfo />
			<main style={main}>
				<h1>Welcome hh^-^ </h1>
				<ul>
					{data.map(({ id, title }) => (
						<li key={id}>{title}</li>
					))}
				</ul>
			</main>
		</>
	);
};

export default Home;

const main = {
	background: 'skyblue',
	width: '100%',
	height: '100vh',
};

// export const getServerSideProps = async () => {
// 	const { data } = await axios(process.env.REACT_APP_POST_API);

// 	return { props: { data } };
// };

export const getStaticProps = async () => {
	const { data } = await axios(process.env.REACT_APP_POST_API);

	return {
		props: { data },
		revalidate: 20,
	};
};

//getStaticProps,getServerSideProps 차이

// getServerSideProps 서버사이드 프롭스는 데이터가 바뀌면 바로바로 바뀜
// 그러나 next.js에서는 getStaticProps 를 추천함

// getStaticProps 는 build 후에 서버 데이터 바꾸고 다시 npm run dev
// 했을때 데이터가 바뀌지 않음
// next 파일의 page index 파일 까보면 빌드 전의 내용물이 들어있음
// StaticSideGeneration 이란 이렇게 미리 파일을 생성해서 접근을 바로바로 할 수 있도록 하는 것
// 만들어진 html을 통으로 받아보고 보여주는 것

// 그러면 빌드 후에 데이터가 바뀌었을 때 어떻게 하지?
//-> 위처럼 revalidtate 속성을 주어서
//(20초 지난 시점부터 접속이 일어난다면 파일을 새롭게 받아올 수 있도록 함)
