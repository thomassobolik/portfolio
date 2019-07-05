import React from "react";
import styled from 'styled-components';
import Navbar from '../components/navbar';
import Animate from '../components/animate';
import ImageGrid from '../components/image-grid';

const StyledDescription = styled.div`
	display: flex;
	justify-content: center;
	
	.description {
		text-align: center;
		font-size: 16pt;
		padding-bottom: 10px;
	}
`

function Writing() {
	return (
		<div className="parent">
			<header>		
				<div className="navContainer">
					<Animate>
						<Navbar onWriting/>
					</Animate>
				</div>
			</header>
			<div className="descriptionContainer">
				<Animate>
					<StyledDescription>
						<a className="description">Here's some of the best writing I did at university, printed in student publications.</a>
					</StyledDescription>
				</Animate>
			</div>
			<div className="articlesContainer">
				<Animate down>
					<ImageGrid />
				</Animate>
			</div>
		</div>
	);
}

export default Writing;