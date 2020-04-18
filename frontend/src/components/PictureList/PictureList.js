import React from 'react';
import {Card, CardBody} from "reactstrap";
import {Link} from "react-router-dom";
import {apiURL} from "../../constants";

const PictureList = props => {
	return (
		<>
			<Card style={{marginTop: '10px'}}>
				<CardBody>
					<Link to={"/pictures/" + props.id} style={{textDecoration: 'none', color: 'black'}}>
						<img src={apiURL + '/uploads/' + props.image} alt="" style={{maxWidth: '200px'}}/>
						<h4 style={{marginTop: '10px', marginBottom: '10px'}}>{props.title}</h4>
					</Link>
					<br/>
					<Link to="/myPictures" style={{textDecoration: 'none', color: 'black'}}>
						<p><strong>By: </strong>{props.author}</p>
					</Link>
				</CardBody>
			</Card>
		</>
	);
};


export default PictureList;