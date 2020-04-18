import {push} from "connected-react-router";

import axiosApi from "../../axiosApi";

export const FETCH_PICTURES_SUCCESS = 'FETCH_PICTURES_SUCCESS';
export const FETCH_PICTURES_FAILURE = 'FETCH_PICTURES_FAILURE';

export const FETCH_PICTURE_SUCCESS = 'FETCH_PICTURE_SUCCESS';
export const FETCH_PICTURE_FAILURE = 'FETCH_PICTURE_FAILURE';

export const CREATE_PICTURE_SUCCESS = 'CREATE_PICTURE_SUCCESS';
export const CREATE_PICTURE_FAILURE = 'CREATE_PICTURE_FAILURE';

export const FETCH_USER_PICTURES_SUCCESS = 'FETCH_USER_PICTURES_SUCCESS';
export const FETCH_USER_PICTURES_FAILURE = 'FETCH_USER_PICTURES_FAILURE';

export const DELETE_PICTURE_SUCCESS = 'DELETE_PICTURE_SUCCESS';
export const DELETE_PICTURE_FAILURE = 'DELETE_PICTURE_FAILURE';

export const fetchPicturesSuccess = pictures => ({type: FETCH_PICTURES_SUCCESS, pictures});
export const fetchPicturesFailure = error => ({type: FETCH_PICTURES_FAILURE, error});

export const fetchPictureSuccess = picture => ({type: FETCH_PICTURE_SUCCESS, picture});
export const fetchPictureFailure = error => ({type: FETCH_PICTURE_FAILURE, error});

export const createPictureSuccess = () => ({type: CREATE_PICTURE_SUCCESS});
export const createPictureFailure = error => ({type: CREATE_PICTURE_FAILURE, error});

export const fetchUserPicturesSuccess = userPictures => ({type: FETCH_USER_PICTURES_SUCCESS, userPictures});
export const fetchUserPicturesFailure = error => ({type: FETCH_USER_PICTURES_FAILURE, error});

export const deletePictureSuccess = () => ({type: DELETE_PICTURE_SUCCESS});
export const deletePictureFailure = error => ({type: DELETE_PICTURE_FAILURE, error});

export const fetchPictures = (userId) => {
	return async (dispatch) => {
		let url = '/pictures';

		if (userId) {
			url += '?user=' + userId;
		}
		try {
			const response = await axiosApi.get(url);
			dispatch(fetchPicturesSuccess(response.data));
		} catch (error) {
			dispatch(fetchPicturesFailure(error));
		}
	}
};

export const fetchPicture = id => {
	return async (dispatch) => {
		try {
			const response = await axiosApi.get('/pictures/' + id);
			dispatch(fetchPictureSuccess(response.data));
		} catch (error) {
			dispatch(fetchPictureFailure(error));
		}
	}
};

export const createPicture = pictureData => {
	return async (dispatch) => {
		try {
			await axiosApi.post('/pictures', pictureData);
			dispatch(createPictureSuccess());
			dispatch(push('/'));
		} catch (error) {
			dispatch(createPictureFailure(error));
		}
	}
};

export const fetchUserPictures = () => {
	return async (dispatch) => {
		try {
			const response = await axiosApi.get('/pictures/myPictures');
			dispatch(fetchUserPicturesSuccess(response.data));
		} catch (error) {
			dispatch(fetchUserPicturesFailure(error));
		}
	}
};

export const deletePicture = id => {
	return async (dispatch) => {
		try {
			await axiosApi.delete('/pictures/' + id);
			dispatch(deletePictureSuccess());
			dispatch(push('/'));
		} catch (error) {
			dispatch(deletePictureFailure(error));
		}
	}
};