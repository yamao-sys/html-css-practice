import styled from 'styled-components';

export const MediaQuery = () => {
	return (
		<>
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
				</div>
			</MobileFirstWrapper>
			<DesktopFirstWrapper>
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
				</div>
			</DesktopFirstWrapper>
		</>
	);
};

// モバイルファーストとデスクトップファースト
// 一般的にはモバイルへの負荷が小さく、記述もシンプルなコードで書きやすいという点からモバイルファーストが採用される

const MobileFirstWrapper = styled.div`
	/* SP用のスタイル */
	.cardList__item + .cardList__item {
		margin-top: 30px;
	}

	/* PC用のスタイル */
	/* min-widthを指定したスタイルで画面幅が大きくなった場合のスタイルを上書きする(モバイルファースト) */
	/* printを入れておくことで印刷時にモバイル用のレイアウトで出力されてしまうことを防ぐ */
	@media screen and (min-width: 768px), print {
		.cardList {
			display: flex;
			justify-content: space-between;
		}
		.cardList__item {
			width: calc((100% - 60px) / 3);
		}
		.cardList__item + .cardList__item {
			margin-top: 0;
		}
	}
`;

const DesktopFirstWrapper = styled.div`
	/* PC用のスタイル */
	.cardList {
		display: flex;
		justify-content: space-between;
	}
	.cardList__item {
		width: calc((100% - 60px) / 3);
	}

	/* SP用のスタイル */
	/* max-widthを指定したスタイルで画面幅が小さくなった場合のスタイルを上書きする(デスクトップファースト) */
	@media screen and (max-width: 767px) {
		.cardList {
			display: block;
		}
		.cardList__item {
			width: auto;
		}
		.cardList__item + .cardList__item {
			margin-top: 30px;
		}
	}
`;
