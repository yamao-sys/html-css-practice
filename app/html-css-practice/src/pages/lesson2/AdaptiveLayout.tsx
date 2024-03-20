import styled from 'styled-components';

export const AdaptiveLayout = () => {
	return (
		<Wrapper>
			<div className="cardList">
				<section className="cardList__item">
					{
						// eslint-disable-next-line jsx-a11y/anchor-is-valid
						<a href="#" className="card">
							<h2 className="card_ttl">見出しテキスト</h2>
							<p className="card_txt">この文章はダミーです。</p>
						</a>
					}
				</section>
				<section className="cardList__item">
					{
						// eslint-disable-next-line jsx-a11y/anchor-is-valid
						<a href="#" className="card">
							<h2 className="card_ttl">見出しテキスト</h2>
							<p className="card_txt">この文章はダミーです。</p>
						</a>
					}
				</section>
				<section className="cardList__item">
					{
						// eslint-disable-next-line jsx-a11y/anchor-is-valid
						<a href="#" className="card">
							<h2 className="card_ttl">見出しテキスト</h2>
							<p className="card_txt">この文章はダミーです。</p>
						</a>
					}
				</section>
				<section className="cardList__item">
					{
						// eslint-disable-next-line jsx-a11y/anchor-is-valid
						<a href="#" className="card">
							<h2 className="card_ttl">見出しテキスト</h2>
							<p className="card_txt">この文章はダミーです。</p>
						</a>
					}
				</section>
			</div>
		</Wrapper>
	);
};

// 多くのサイトはGradualMediaQueryのように段階的にメディアクエリを設定することで対応できるが、
// 中にはどうしてもPC向けレイアウトでデザインされている最大幅を維持しないと可読性が損なわれる or 実装コストがかかりすぎるケースがある
// その場合の対応として
// ・モバイル向けレイアウトは幅100%で伸縮
// ・PC向けレイアウトは幅固定
// このようにし、ブレイクポイントを跨いで2つのレイアウト(伸縮レイアウトと固定レイアウト)を切り替える手法がある
// → アダプティブレイアウトという

const Wrapper = styled.div`
	/* SP用のスタイル */
	.cardList__item + .cardList__item {
		margin-top: 30px;
	}

	/* for PC */
	@media screen and (min-width: 768px), print {
		body {
			min-width: 1000px;
		}
		.container {
			width: 100%;
			margin: 0 auto;
			padding: 0 auto;
		}
	}
`;
