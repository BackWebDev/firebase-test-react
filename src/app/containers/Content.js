import React from "react";

import {ContentStyled} from "../../styles/content";

import MakePanel from "../components/MakePanel";
import NotesList from "../components/Notes/NotesList";

const Content = ({}) => {
	return (
	<ContentStyled>
		<MakePanel/>
		<NotesList/>
	</ContentStyled>
	);
};

export default Content;