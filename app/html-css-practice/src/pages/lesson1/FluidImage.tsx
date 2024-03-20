import styled from "styled-components"

export const FluidImage = () => {
	return (
		<Div>
			<p>吾輩は猫である。名前はまだない</p>
			<Image src="./logo512.png"/>
		</Div>
	);
}

const Div = styled.div`
	max-width: 1000px;
	margin-left: auto;
	margin-right: auto;
	background: #eee;
`

// height: auto...画像の縦横のアスペクト比を維持するため。これなしだと、伸縮時に縦横のアスペクト比がおかしくなってしまう。
const Image = styled.img`
	max-width: 100%;
	height: auto;
`
