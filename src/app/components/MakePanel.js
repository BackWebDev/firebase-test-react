import React, {useState} from "react";
import {Icon} from "antd";

import {
    MakePanelStyled,
    MakeWrap,
    MakeNoteBlock,
    NoteSubject,
    NoteText,
    CloseNewNote
} from "../../styles/make-panel";

const MakePanel = ({}) => {
    const [state, setState] = useState({
        open: false
    });

    const openHandler = () => {
        setState({
            ...state,
            open: !state.open
        });
    };

    return (
        <MakeWrap>
            <MakePanelStyled>
                {
                    state.open
                    ?
                        <React.Fragment>
                            <CloseNewNote onClick={openHandler}><Icon type={"close"}/></CloseNewNote>
                            <NoteSubject placeholder={"Subject..."}/>
                            <NoteText placeholder={"Text..."}/>
                        </React.Fragment>
                    :
                        <MakeNoteBlock onClick={openHandler}>New note...</MakeNoteBlock>
                }
            </MakePanelStyled>
        </MakeWrap>
    );
};

export default MakePanel;