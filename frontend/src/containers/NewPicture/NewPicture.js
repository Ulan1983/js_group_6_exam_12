import React, {Component} from 'react';
import {createPicture} from "../../store/actions/picturesActions";
import {connect} from "react-redux";
import PictureForm from "../../components/UI/Form/PictureForm";

class NewPicture extends Component {
	createPicture = formData => {
		this.props.createPicture(formData);
	};

	render() {
		return (
			<>
				<PictureForm
					onSubmit={this.createPicture}
				/>
			</>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	createPicture: pictureData => dispatch(createPicture(pictureData)),
});

export default connect(null, mapDispatchToProps)(NewPicture);