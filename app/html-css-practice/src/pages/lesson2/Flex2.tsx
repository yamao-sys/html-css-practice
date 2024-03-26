import styled from 'styled-components';

export const Flex2 = () => {
	return (
		<>
			<FourColumnCardList className="card-list">
				<FourCardListItem>この文章はダミーです。</FourCardListItem>
				<FourCardListItem>この文章はダミーです。</FourCardListItem>
				<FourCardListItem>この文章はダミーです。</FourCardListItem>
				<FourCardListItem>この文章はダミーです。</FourCardListItem>
				<FourCardListItem>この文章はダミーです。</FourCardListItem>
				<FourCardListItem>この文章はダミーです。</FourCardListItem>
			</FourColumnCardList>
		</>
	);
};

// space-betweenを使用してカラムレイアウトの幅を調整する

const ThreeColumnCardList = styled.ul`
	display: flex;
	flex-direction: column;
	margin-top: -20px; /* 1行目の上マージンを相殺(ネガティブマージン) */

	@media screen and (min-width: 768px), print {
		flex-direction: row;
		justify-content: space-between; /* アイテムを両端に揃えて均等配置 */
		flex-wrap: wrap; /* 折り返して複数行にする */
	}

	@media screen and (min-width: 992px), print {
		&:after {
			content: '';
			display: block;
			width: calc((100% - 40px) / 3);
		}
	}
`;

const ThreeCardListItem = styled.li`
	margin-top: 20px;

	@media screen and (min-width: 768px), print {
		width: calc((100% - 20px) / 2);
	}

	@media screen and (min-width: 992px), print {
		width: calc((100% - 40px) / 3);
	}
`;

const FourColumnCardList = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: -20px; /* 1行目のマージンを相殺(ネガティブマージン) */

	@media screen and (min-width: 768px), print {
		flex-direction: row;
		justify-content: space-between; /* アイテムを両端に揃えて均等配置 */
		flex-wrap: wrap; /* 折り返して複数行にする */
	}

	@media screen and (min-width: 1200px), print {
		&:before,
		&:after {
			content: '';
			display: block;
			width: calc((100% - 60px) / 4);
		}

		&:before {
			order: 1;
		}
	}
`;

const FourCardListItem = styled.li`
	margin-top: 20px;

	@media screen and (min-width: 768px), print {
		width: calc((100% - 20px) / 2);
	}

	@media screen and (min-width: 1200px), print {
		width: calc((100% - 60px) / 4);
	}
`;
