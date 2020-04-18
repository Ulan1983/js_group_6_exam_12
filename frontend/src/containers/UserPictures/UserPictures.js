import React, {Component} from 'react';
import {deletePicture, fetchUserPictures} from "../../store/actions/picturesActions";
import {connect} from "react-redux";
import {Col, Row} from "reactstrap";
import UserPictureList from "../../components/UserPictureList/UserPictureList";
import {Link} from "react-router-dom";

class UserPictures extends Component {
	async componentDidMount() {
		await this.props.fetchUserPictures();
	}

	deletePicture = async (id) => {
		await this.props.deletePicture(id);
	};

	render() {
		return (
			<>
				<h4 style={{textAlign: 'center'}}>{this.props.user.displayName}'s gallery</h4>
				<Link
					to='/pictures/new'
					style={{textDecoration: 'none', color: 'black',
						marginLeft: '10px', marginTop: '30px', fontSize: '20px'}}
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
	userPictures: state.pictures.userPictures,
	user: state.users.user
});

const mapDispatchToProps = dispatch => ({
	fetchUserPictures: () => dispatch(fetchUserPictures()),
	deletePicture: id => dispatch(deletePicture(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPictures);