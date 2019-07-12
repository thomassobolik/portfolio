import React from "react";
import styled from 'styled-components';
import Navbar from '../components/navbar';
import Animate from '../components/animate';
import PosterWall from '../components/poster-wall';

const StyledDescription = styled.div`
	display: flex;
	justify-content: center;
	padding-bottom: 25px;
	
	.description {
		text-align: center;
		font-size: 14pt;
		padding-bottom: 10px;
		padding-left: 200px;
		padding-right: 200px;
	}

	.sub-description {
		text-align: center;
		font-size: 12pt;
		padding-bottom: 10px;
		padding-left: 200px;
		padding-right: 200px;
	}
`
const StyledLinks = styled.div`
	display: flex;
	justify-content: center;
	padding: 10px;
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
						<a className="description">I've been a music maker since the tender age of 10, 
						when I picked up the guitar for the first time after finally beating Guitar 
						Hero III. In university, I played in some jazz groups, but mostly focused 
						on gathering experience putting on events and developing my electronic music practice.
						<br></br><br></br>
						I DJ'd and performed live regularly at a number of locations around Charlottesville, VA - 
						bars, small venues, and spaces rented by student organizations. With a cohort of friends
						at WXTJ (University of Virginia's student radio station), I put on DIY shows in living rooms,
						backyards, and at the University Chapel, where I helped bring Milo, Shabazz Palaces, and McKinley Dixon
						to town. Usually we were able to donate most of the profits from the show to charity, benefitting groups
						like RAICES, The United Negro College Fund, the Charlottesville Sexual Assault Resource Agency, and 
						Planned Parenthood. I'm proud of what we were able to contribute to the scene on
						campus!
						<br></br><br></br>
						Below you can hear some examples of my production and mixes, as well as some of the shows I've helped put on.
						</a>
					</StyledDescription>
				</Animate>
			<div className="soundcloud-links">
				<Animate down>
					<StyledLinks>
						<iframe className="track" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/583380054&color=%2336347c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
						<iframe width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Ftom-sobolik%2Fdj-toms-afro-techno-globalization-mix%2F" frameborder="0" ></iframe>
					</StyledLinks>
				</Animate>
			</div>
			<div className="mixcloud-links">
				<Animate down>
					<StyledLinks>
						<iframe width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Ftom-sobolik%2Fstrictly-tom-sophie-on-wxtj-charlottesville-21619%2F" frameborder="0" ></iframe>
						<iframe width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Ftom-sobolik%2Fstrictly-tom-sophie-on-wxtj-charlotesville-22319%2F" frameborder="0" ></iframe>
					</StyledLinks>
				</Animate>
			</div>
			<div className="poster-wall">
				<Animate down>
					<PosterWall></PosterWall>
				</Animate>
			</div>
			</div>
		</div>
	);
}

export default Music;