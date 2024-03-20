import styled from 'styled-components';

export const FlexWithParentPadding = () => {
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
	padding: 20px;
	outline: 1px dashed #999;
`;

// 親要素の左右のpaddingを除いた幅に対し、小要素の幅の割合でwidthを設定
const Column = styled.div`
	width: calc((290 / 600) * 100%);
	background: #e7e7e7;
`;
