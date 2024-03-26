import styled from 'styled-components';

export const Flex1 = () => {
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

			<FlexWrapper>
				<Item>
					<Button href="#">ボタン</Button>
				</Item>
				<Item>
					<Button href="#">ボタン</Button>
				</Item>
			</FlexWrapper>

			<ResponsiveFlexWrapper>
				<Item>
					<Button href="#">ボタン</Button>
				</Item>
				<Item>
					<Button href="#">ボタン</Button>
				</Item>
			</ResponsiveFlexWrapper>
		</>
	);
};

const Wrapper = styled.div`
	background: #e7e7e7;
`;

const Item = styled.div`
	margin: 10px;
	width: 80%;
	max-width: 300px;
	border: 1px dashed #999;
`;

const Button = styled.a`
	display: block;
	padding: 15px;
	background: skyblue;
	border-radius: 8px;
	text-align: center;
	text-decoration: none;
`;

const FlexWrapper = styled.div`
	display: flex;
	justify-content: center;
	background: #e7e7e7;
`;

const ResponsiveFlexWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media screen and (min-width: 768px), print {
		flex-direction: row;
		justify-content: center;
	}
`;
