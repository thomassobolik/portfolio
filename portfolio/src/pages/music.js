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
		padding-left: 25px;
		padding-right: 25px;
	}
`

function Music() {
	return (
		<div className="parent">
			<header>		
				<div className="navContainer">
					<Animate>
						<Navbar onMusic/>
					</Animate>
				</div>
			</header>
			<div className="descriptionContainer">
				<Animate>
					<StyledDescription>
						<a className="description">I've been a music maker since the tender age of 10, when I picked up the guitar for the first time after finally beating Guitar Hero III. In university, I played in ensembles, but mostly focused on my electronic music practice.</a>
					</StyledDescription>
				</Animate>
			</div>
		</div>
	);
}

export default Music;