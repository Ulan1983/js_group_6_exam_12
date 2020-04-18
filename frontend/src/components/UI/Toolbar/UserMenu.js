import React from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
import {Link} from "react-router-dom";

import {apiURL} from "../../../constants";

const UserMenu = ({user, logout}) => {
	return (
		<UncontrolledDropdown nav inNavbar>

			<DropdownToggle nav caret>
				{user.facebookId ?
					<img src={user.avatar} alt="avatar"
						 style={{maxWidth: '50px', borderRadius: '50px', marginRight: '10px'}}/>
					:
					<img src={apiURL + '/uploads/' + user.avatar} alt="avatar"
						 style={{maxWidth: '50px', borderRadius: '50px', marginRight: '10px'}}/>
				}
				Hello, {user.displayName}!
			</DropdownToggle>
			<DropdownMenu right style={{textAlign: 'center'}}>
				<DropdownItem>
					<Link to='/myPictures' style={{textDecoration: 'none', color: 'black', marginLeft: '10px'}}>My pictures</Link>
				</DropdownItem>
				<DropdownItem divider />
				<DropdownItem onClick={logout}>
					Logout
				</DropdownItem>
			</DropdownMenu>
		</UncontrolledDropdown>
	);
};

export default UserMenu;