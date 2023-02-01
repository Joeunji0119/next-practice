import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<meta property='custom' content='pratice' />
				{/* 모든 페이지에 아래 메타 태그가 head로 들어감
        루트 파일이기 때문에 전역 파일을 엉망으로 만들면 안됨 */}
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
//meta Tag 정의 하거나 전체 페이지 관리하는 컴포넌트
