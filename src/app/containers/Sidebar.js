import React from "react";

import {
	SiderStyled,
	MenuStyled,
	MenuItemStyled,
	IconStyled,
	Delimiter,
	MenuItemActiveStyled
} from "../../styles/sidebar";

const Sidebar = ({}) => {
	return (
	<SiderStyled width={270}>
		<MenuStyled
			mode={"inline"}
			style={{height: "100%"}}
			defaultSelectedKeys={[1]}
		>
			<MenuItemActiveStyled
				key={1}
			>
				<IconStyled type={"bulb"}/>Notes
			</MenuItemActiveStyled>
			<Delimiter/>
			<MenuItemStyled
				key={2}
			>
				<IconStyled type={"inbox"}/>Archive
			</MenuItemStyled>
			<MenuItemStyled
				key={3}
			>
				<IconStyled type={"delete"}/>Trash
			</MenuItemStyled>
		</MenuStyled>
	</SiderStyled>
	);
};

export default Sidebar;