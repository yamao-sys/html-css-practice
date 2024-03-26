import styled from 'styled-components';

export const Gap = () => {
	return (
		<>
			<CardList>
				<CardListItem>この文章はダミーです。</CardListItem>
				<CardListItem>この文章はダミーです。</CardListItem>
				<CardListItem>この文章はダミーです。</CardListItem>
				<CardListItem>この文章はダミーです。</CardListItem>
				<CardListItem>この文章はダミーです。</CardListItem>
				<CardListItem>この文章はダミーです。</CardListItem>
			</CardList>
		</>
	);
};

// gridレイアウトでgapを指定することで、カラムレイアウトを作ることができる
// 以下はメディアクエリを使用した実装例
// gridを使用した手法として、他にもrepeat関数で第一引数にauto-fill/auto-fit、第二引数にminmax関数を使用したものもある
// 後者はメディアクエリなしで書けるが、慎重に扱わんと意図せずモジュール幅の均等が取れなくなってしまい得るため注意

const CardList = styled.ul`
	display: grid;
	gap: 20px;

	@media screen and (min-width: 768px), print {
		grid-template-columns: repeat(2, 1fr); /* 均等2カラム指定 */
	}

	@media screen and (min-width: 992px), print {
		grid-template-columns: repeat(3, 1fr);
	}

	@media screen and (min-width: 1200px), print {
		grid-template-columns: repeat(4, 1fr);
	}
`;

const CardListItem = styled.li``;
