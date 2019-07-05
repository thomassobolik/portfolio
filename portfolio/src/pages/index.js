import React from "react";
import styled from 'styled-components';
import Navbar from '../components/navbar';
import Animate from '../components/animate';

const Header = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(4, 1fr);
	grid-auto-flow: dense;
	margin: 25px;
`

const Name = styled.div`
	grid-column-start: 1;
	grid-column-end: 3;
	grid-row-start: 3;
	font-size: 20pt;
	align-self: center;
	padding-left: 20px;
`

const Subtitle = styled.div`
	grid-column-start: 1;
	grid-column-end: 3;
	grid-row-start: 4;
	font-size: 12pt;
	align-content: center;
	align-self: center;
	padding-left: 20px;
`

const Contact = styled.div`
	grid-column: 3;
	grid-row: 4;
`

const ContactPage = styled.div`
	ul {
		display: flex;
		justify-content: center;
    	list-style-type: none;
    	margin: 20px;
    	padding: 20px;
    	overflow: hidden;
  	}

  	li a {
    	display: flex;
    	color: black;
    	font-size: 16pt;
    	padding: 16px 16px;
    	justify-content: center;
    	text-decoration: none;
  	}

  	li a:hover {
    	font-style: italic;
    	color: mediumpurple;
  	}
`

function Home() {
	return (
		<div>
			<div className="navContainer">
				<Animate>
					<Navbar />
				</Animate>
			</div>
			<Header>
				<Name>
					<Animate down>
					<h1>
						<div style={{"text-align":"left"}}>
							<s>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</s>
							Tom Sobolik
							<s>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</s>
						</div>
					</h1>
					</Animate>
				</Name>
				<Subtitle>
					<Animate down>
					<h1 style={{"font-style": "bold"}}>
						<div style={{"text-align":"left"}}>
							I'm a creative based in New York. I make music, <br></br> build software, 
							and write about culture and the arts.
						</div>
					</h1>
					</Animate>
				</Subtitle>
				<Contact>
					<ContactPage>
						<Animate down>
							<ul>
								<li><a href="mailto:ts3bj@virginia.edu" target="_blank" rel="noopener noreferrer">email</a></li>
    							<li><a href="https://www.linkedin.com/in/thomas-sobolik-311074137/" target="_blank" rel="noopener noreferrer">linkedin</a></li>
    							<li><a href="https://twitter.com/tom_sobolik" target="_blank" rel="noopener noreferrer">twitter</a></li>
    							<li><a href="https://soundcloud.com/tomsobolikmusic" target="_blank" rel="noopener noreferrer">sc</a></li>
							</ul>
						</Animate>	
					</ContactPage>
				</Contact>
			</Header>
		</div>
	);
}

export default Home;
