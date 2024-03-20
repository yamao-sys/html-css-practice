import styled from 'styled-components';

export const Flex = () => {
	return (
		<FlexBox>
			<Column>
				<p>吾輩は猫である。名前はまだない。</p>
				<p>
					どこで生まれたかと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで初めて人間というものを見た。
				</p>
			</Column>
			<Column>
				<p>しかもあとで聞くとそれは書生という人間中で一番...</p>
			</Column>
		</FlexBox>
	);
};

const FlexBox = styled.div`
	display: flex;
	justify-content: space-between;
	max-width: 640px;
	margin: 0 auto;
	outline: 1px dashed #999;
`;

// 同一比率で可変レイアウトにする
// (小要素のサイズ / 親要素のサイズ) × 100%
const Column = styled.div`
	width: calc((300 / 640) * 100%);
	background: #e7e7e7;
`;
