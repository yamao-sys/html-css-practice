import styled from 'styled-components';

export const GradualMediaQuery = () => {
	return (
		<MobileFirstWrapper>
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
		</MobileFirstWrapper>
	);
};

// ブレイクポイントを増やすことで段階的にレイアウトを変更する
// 単一のブレイクポイントだと特定の範囲で折り返しがおかしくなったりするため

const MobileFirstWrapper = styled.div`
	/* SP用のスタイル */
	.cardList__item + .cardList__item {
		margin-top: 30px;
	}

	/* for Tab */
	@media screen and (min-width: 768px) {
		.cardList {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
		}
		.cardList__item {
			margin-top: 30px;
			width: calc((100% - 30px) / 2);
		}
	}

	/* for PC */
	@media screen and (min-width: 992px) {
		.cardList__item {
			margin-top: 30px;
			width: calc((100% - 60px) / 4);
		}
	}
`;
