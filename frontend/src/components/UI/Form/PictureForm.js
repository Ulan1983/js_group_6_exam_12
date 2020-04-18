import React, {Component} from 'react';
import {Button, Col, Form, FormGroup} from "reactstrap";
import FormElement from "./FormElement";

class PictureForm extends Component {
	state = {
		title: '',
		image: '',
	};

	submitFormHandler = event => {
		event.preventDefault();

		const formData = new FormData();

		Object.keys(this.state).forEach(key => {
			formData.append(key, this.state[key]);
		});

		this.props.onSubmit(formData);
	};

	inputChangeHandler = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	fileChangeHandler = event => {
		this.setState({
			[event.target.name]: event.target.files[0]
		})
	};


	render() {
		return (
			<>
				<Form onSubmit={this.submitFormHandler}>
					<FormElement
						required
						type="text"
						propertyName="title"
						title="Title"
						placeholder="Enter picture title"
						onChange={this.inputChangeHandler}
						value={this.state.title}
					/>

					<FormElement
						required
						type="file"
						propertyName="image" title="Image"
						onChange={this.fileChangeHandler}
					/>

					<FormGroup row>
						<Col sm={{offset: 2, size: 10}}>
							<Button type="submit" color="primary">Create</Button>
						</Col>
					</FormGroup>
				</Form>
			</>
		);
	}
}

export default PictureForm;

