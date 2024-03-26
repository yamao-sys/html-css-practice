import styled from 'styled-components';

export const Block1 = () => {
	return (
		<>
			<Wrapper>
				<Item>
					<Button href="#">ボタン</Button>
				</Item>
				<Item>
					<Button href="#">ボタン</Button>
				</Item>
			</Wrapper>

			<Wrapper>
				<Item>
					<BlockButton href="#">ボタン</BlockButton>
				</Item>
				<Item>
					<BlockButton href="#">ボタン</BlockButton>
				</Item>
			</Wrapper>

			<InlineBlockWrapper>
				<InlineItem>
					<Button href="#">ボタン</Button>
				</InlineItem>
				<InlineItem>
					<Button href="#">ボタン</Button>
				</InlineItem>
			</InlineBlockWrapper>

			<InlineBlockWrapper>
				<InlineItem>
					<InlineItemButton href="#">ボタン</InlineItemButton>
				</InlineItem>
				<InlineItem>
					<InlineItemButton href="#">ボタン</InlineItemButton>
				</InlineItem>
			</InlineBlockWrapper>
		</>
	);
};

const Wrapper = styled.div`
	background: #e7e7e7;
`;

const Item = styled.div`
	margin: 10px;
	border: 1px dashed #999;
`;

// インライン要素はwidth/heightが効かず
const Button = styled.a`
	width: 80%;
	max-width: 300px;
	padding: 15px;
	background: skyblue;
	border-radius: 8px;
	text-align: center;
	text-decoration: none;
`;

// インライン要素をblock化 → width/heightを効かせる
const BlockButton = styled.a`
	display: block;
	width: 80%;
	max-width: 300px;
	padding: 15px;
	background: skyblue;
	border-radius: 8px;
	text-align: center;
	text-decoration: none;
`;

// 親要素からインラインに対してtext-alignが効く(inlineの特徴)
const InlineBlockWrapper = styled.div`
	background: #e7e7e7;
	text-align: center;
`;

// 要素に幅や高さを持たせてブロック状にする(blockの特徴)
// 自動的に横並びにする(inlineの特徴)
const InlineItem = styled.div`
	display: inline-block;
	width: 80%;
	max-width: 300px;
	margin: 10px;
	border: 1px dashed #999;
`;

const InlineItemButton = styled.a`
	display: block;
	padding: 15px;
	background: skyblue;
	border-radius: 8px;
	text-align: center;
	text-decoration: none;
`;
