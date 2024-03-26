import styled from 'styled-components';

export const Flex3 = () => {
	return (
		<>
			<Wrapper>
				<Item>この文章はダミーです。</Item>
				<Item>この文章はダミーです。</Item>
				<Item>この文章はダミーです。</Item>
				<Item>この文章はダミーです。</Item>
				<Item>この文章はダミーです。</Item>
			</Wrapper>
		</>
	);
};

// space-betweenを使用せずにカラムレイアウトの幅を調整する

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 20px;

	@media screen and (min-width: 768px), print {
		flex-direction: row;
		flex-wrap: wrap;
		margin-left: -20px;
	}
`;

const Item = styled.div`
	margin-top: 20px;
	margin-left: 20px;

	@media screen and (min-width: 768px), print {
		margin-left: -20px;
		width: calc((100% - 40px) / 2);
	}

	@media screen and (min-width: 992px), print {
		margin-left: -20px;
		width: calc((100% - 60px) / 3);
	}

	@media screen and (min-width: 1200px), print {
		margin-left: -20px;
		width: calc((100% - 80px) / 4);
	}
`;
