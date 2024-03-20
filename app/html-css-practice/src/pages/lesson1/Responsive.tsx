import styled from "styled-components";

export const Responsive = () => {
	return (
		<Dev>
			<p>吾輩は猫である。名前はまだない</p>
		</Dev>
	);
}

const Dev = styled.div`
	max-width: 1000px;
	margin-left: auto;
	margin-right: auto;
	background: #eee;
`
