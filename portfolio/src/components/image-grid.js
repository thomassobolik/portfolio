import React from 'react';
import styled from 'styled-components';
import jeff from '../assets/images/jeff-mills.png';
import julien from '../assets/images/julien-baker.png';
import vmag1 from '../assets/images/v-mag_spring19.png';
import vmag2 from '../assets/images/vmag-fall18.png';


const StyledImage = styled.div`
	.image {
		height: 100%;
		width: 100%;
	}

	display: flex;
  	justify-content: center;
  	align-items: center;

  	figure {
  		display: flex;
  		justify-content: center;
  		align-items: center;
  	}

  	a {
  		text-align: center;
  	}
`

const StyledGrid = styled.div`

	ul {
	    list-style-type: none;
	    display: grid;
	    grid-template-columns: 1fr 1fr;
	    grid-template-rows: 1fr 1fr;
	    padding-inline-start: 0px;
	    padding: 10px;
	    grid-gap: 25px;
	}


	li a {
   		color: black;
    	font-size: 14pt;
    	text-decoration: none;
  	}

  	li a:hover {
    	font-style: italic;
    	color: mediumpurple;
  	}

	.1 {
    	grid-column: 1;
    	grid-row: 1;
  	}

  	.2 {
    	grid-column: 2;
    	grid-row: 1;
  	}

  	.3 {
    	grid-column: 1;
    	grid-row: 2;
  	}

  	.4 {
    	grid-column: 2;
    	grid-row: 2;
  	}
`


const Image = (props) => (
	<StyledImage>
		<figure>
			<a href={props.link} target="_blank" rel="noopener noreferrer">
				<img className="image" src={props.img} alt={"logo"}/>
				<figcaption >{props.title}</figcaption>
			</a>
		</figure>
	</StyledImage>
)

const ImageGrid = () => (
	<StyledGrid>
	  <div class="container">
        <ul>
          <li><Image className="1" title="Launched From Detroit: Underground Resistance, Afrofuturism, and the racial politics of techno's Berlin-Detroit axis" link="#" img={jeff}></Image></li>
          <li><Image className="2" title="On the laptop as a nexus of art-making, art consumption, and social media voyeurism" link="https://issuu.com/v-magazine-uva/docs/v_magazine_spring__19-issuu/4" img={vmag1}></Image></li>
          <li><Image className="3" title="Review: Mount Eerie's Distortion" link="https://issuu.com/v-magazine-uva/docs/v_mag_autumn_18/4" img={vmag2}></Image></li>
          <li><Image className="4" title="Interview with Julien Baker" link="https://www.cavalierdaily.com/article/2017/10/julien-baker-brings-fresh-perspective-to-local-music-scene" img={julien}></Image></li>
        </ul>
      </div>
    </StyledGrid>
)

export default ImageGrid;
