import React, {Component} from 'react';
import {deletePicture, fetchUserPictures} from "../../store/actions/picturesActions";
import {connect} from "react-redux";
import UserPictureList from "../../components/UserPictureList/UserPictureList";
import {Link} from "react-router-dom";
import {Col, Row} from "reactstrap";

class UserPictures extends Component {
	async componentDidMount() {
		await this.props.fetchUserPictures();
	}

	deletePicture = async (id) => {
		await this.props.deletePicture(id)
	};

	render() {
		return (
			<>
				<h4 style={{textAlign: 'center'}}>{this.props.user.displayName}'s gallery</h4>
				<Link
					to='/pictures/new'
					style={{textDecoration: 'none', color: 'blue', marginTop: '30px', fontSize: '18px'}}
				>
					Add new photo
				</Link>
				<Row>
					{this.props.userPictures && this.props.userPictures.map(picture => (
						<Col key={picture._id}>
							<UserPictureList
								id={picture._id}
								title={picture.title}
								image={picture.image}
								delete={() => this.deletePicture(picture._id)}
							/>
						</Col>
					))}
				</Row>
			</>
		);
	}
}

const mapStateToProps = state => ({
	user: state.users.user,
	userPictures: state.pictures.userPictures
});

const mapDispatchToProps = dispatch => ({
	fetchUserPictures: () => dispatch(fetchUserPictures()),
	deletePicture: id => dispatch(deletePicture(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPictures);