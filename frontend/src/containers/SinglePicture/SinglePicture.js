import React, {Component} from 'react';
import {fetchPicture} from "../../store/actions/picturesActions";
import {connect} from "react-redux";
import {Button, Card} from "reactstrap";
import {apiURL} from "../../constants";
import Modal from "../../components/UI/Modal/Modal";

class SinglePicture extends Component {
	state = {
		isModalOpen: true
	};

	async componentDidMount() {
		await this.props.fetchPicture(this.props.match.params.id);
	}

	closeModal = () => {
		this.setState({isModalOpen: false});
		this.props.history.push('/');
	};

	render() {
		return (
			<>
				{this.props.picture &&
					<Modal
						show={this.state.isModalOpen}
						close={this.closeModal}>
						<Card>
							<img
								src={apiURL + '/uploads/' + this.props.picture.image}
								alt=""
								style={{width: '100%'}}
							/>
							<Button
								type="button"
								color="primary"
								onClick={this.closeModal}
								style={{marginTop: '20px'}}
							>
								Close
							</Button>
						</Card>
					</Modal>

				}
			</>
		);
	}
}

const mapStateToProps = state => ({
	picture: state.pictures.picture,
});

const mapDispatchToProps = dispatch => ({
	fetchPicture: id => dispatch(fetchPicture(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePicture);