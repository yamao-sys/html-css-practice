import styled from 'styled-components';

export const PaddingTopHackAspect = () => {
	return (
		<PaddingTopHackWrapper>
			<Item>この文章はダミーです。</Item>
		</PaddingTopHackWrapper>
	);
};

// padding-topハックのアスペクト
// margin, paddingともに親要素の横幅を基準とする
// → padding-topを%指定すると、親要素の横幅を基準とする
const PaddingTopHackWrapper = styled.div`
	position: relative;
	padding-top: 56.25%; /* 9/16 * 100 */
`;

const Item = styled.div`
	position: absolute; /* padding-topハックで要素を指定のアスペクト比で配置するにはposition: absolute */
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;
