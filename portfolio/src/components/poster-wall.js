import React from 'react';
import styled from 'styled-components';
import cookout from '../assets/images/shhocookout.jpg';
import wxtjxshho from '../assets/images/wxtjxshho.jpg';
import houseshow1 from '../assets/images/houseshow1.jpg';
import djtomtakeover from '../assets/images/djtomtakeover.jpg';
import colortheory from '../assets/images/colortheory-southern.jpg';
import chapelshow5 from '../assets/images/chapelshow5.jpg';
import chapelshow4 from '../assets/images/chapelshow4.jpg';
import chapelshow3 from '../assets/images/chapelshow3.jpg';


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
	    grid-template-columns: 1fr 1fr 1fr 1fr;
	    grid-template-rows: 1fr 1fr;
	    padding-inline-start: 0px;
	    grid-gap: 5px;
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

	  1 {
    	grid-column: 1;
    	grid-row: 1;
  	}

  	2 {
    	grid-column: 2;
    	grid-row: 1;
  	}

  	3 {
    	grid-column: 3;
    	grid-row: 1;
  	}

    6 {
      grid-column: 4;
      grid-row: 1;
    }

  	4 {
    	grid-column-start: 3;
      grid-column-end: 4;
    	grid-row: 2;
  	}

    7 {
      grid-column: 1;
      grid-row: 2;
    }

    8 {
      grid-column: 2;
      grid-row: 2;
    }
`


const Image = (props) => (
	<StyledImage>
		<figure>
			<a target="_blank" rel="noopener noreferrer">
				<img className="image" src={props.img} alt={"logo"}/>
			</a>
		</figure>
	</StyledImage>
)

const ImageGrid = () => (
	<StyledGrid>
	  <div class="container">
        <ul>
          <li><Image className="1" img={cookout}></Image></li>
          <li><Image className="2" img={wxtjxshho}></Image></li>
          <li><Image className="3" img={houseshow1}></Image></li>
          <li><Image className="6" img={chapelshow3}></Image></li>
          <li><Image className="7" img={chapelshow4}></Image></li>
          <li><Image className="8" img={chapelshow5}></Image></li>
        </ul>
      </div>
    </StyledGrid>
)

export default ImageGrid;
