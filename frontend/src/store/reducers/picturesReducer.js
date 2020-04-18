import {
	FETCH_PICTURE_FAILURE,
	FETCH_PICTURE_SUCCESS,
	FETCH_PICTURES_FAILURE,
	FETCH_PICTURES_SUCCESS, FETCH_USER_PICTURES_FAILURE, FETCH_USER_PICTURES_SUCCESS
} from "../actions/picturesActions";


const initialState = {
	pictures: [],
	picturesError: null,
	picture: null,
	pictureError: null,
	userPictures: [],
	userPicturesError: null
};

const picturesReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PICTURES_SUCCESS:
			return {...state, pictures: action.pictures};
		case FETCH_PICTURES_FAILURE:
			return {...state, picturesError: action.error};
		case FETCH_PICTURE_SUCCESS:
			return {...state, picture: action.picture};
		case FETCH_PICTURE_FAILURE:
			return {...state, pictureError: action.error};
		case FETCH_USER_PICTURES_SUCCESS:
			return {...state, userPictures: action.userPictures};
		case FETCH_USER_PICTURES_FAILURE:
			return {...state, userPicturesError: action.error};
		default:
			return state;
	}
};

export default picturesReducer;