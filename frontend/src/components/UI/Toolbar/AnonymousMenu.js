import React from 'react';
import {NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

const AnonymousMenu = () => (
	<div style={{textAlign: 'center'}}>
		<NavItem>
			<NavLink tag={RouterNavLink} to="/register" exact>Register</NavLink>
			<NavLink tag={RouterNavLink} to="/login" exact>Login</NavLink>
		</NavItem>
	</div>
);

export default AnonymousMenu;