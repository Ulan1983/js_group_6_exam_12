import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import {fetchPictures} from "../../store/actions/picturesActions";
import {connect} from "react-redux";
import PictureList from "../../components/PictureList/PictureList";

class Pictures extends Component {
	async componentDidMount() {
		await this.props.fetchPictures();
	}

	render() {
		return (
			<>
				<Row>
					{this.props.pictures && this.props.pictures.map(picture => (
						<Col key={picture._id}>
							<PictureList
								id={picture._id}
								title={picture.title}
								image={picture.image}
								author={picture.user.displayName}
							/>

						</Col>
					))}
				</Row>
			</>
		);
	}
}

const mapStateToProps = state => ({
	pictures: state.pictures.pictures,
});

const mapDispatchToProps = dispatch => ({
	fetchPictures: () => dispatch(fetchPictures()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Pictures);