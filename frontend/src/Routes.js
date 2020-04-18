import React from 'react';

import {Route, Switch} from "react-router-dom";

import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import Pictures from "./containers/Pictures/Pictures";
import NewPicture from "./containers/NewPicture/NewPicture";
import SinglePicture from "./containers/SinglePicture/SinglePicture";
import UserPictures from "./containers/UserPictures/UserPictures";


const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact component={Pictures}/>
			<Route path="/register" exact component={Register}/>
			<Route path="/login" exact component={Login} />
			<Route path="/pictures/new" exact component={NewPicture} />
			<Route path="/pictures/:id" exact component={SinglePicture} />
			<Route path="/myPictures" exact component={UserPictures} />

		</Switch>
	);
};

export default Routes;