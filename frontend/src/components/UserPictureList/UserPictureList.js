import React from 'react';
import {Button, Card, CardBody, Col, FormGroup} from "reactstrap";
import {Link} from "react-router-dom";
import {apiURL} from "../../constants";

const UserPictureList = props => {

	return (
		<>
			<Card style={{marginTop: '10px', textAlign: 'center'}}>
				<CardBody>
					<Link to={"/pictures/" + props.id} style={{textDecoration: 'none', color: 'black'}}>
						<img src={apiURL + '/uploads/' + props.image} alt="" style={{maxWidth: '200px'}}/>
						<h4 style={{marginTop: '10px', marginBottom: '10px'}}>{props.title}</h4>
					</Link>
				</CardBody>
				<FormGroup row>
					<Col sm={{offset: 1, size: 10}}>
						<Button type="submit" color="primary"
								onClick={props.delete}
						>
							Delete
						</Button>
					</Col>
				</FormGroup>
			</Card>
		</>
	);
};


export default UserPictureList;