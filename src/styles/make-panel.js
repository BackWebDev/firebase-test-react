import styled from "styled-components";

import appConfig from "./app-config";

export const MakeWrap = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MakePanelStyled = styled.div`
    width: 50%;
    min-height: ${appConfig.HEIGHT.MAKE_PANEL};
    border: 1px solid ${appConfig.COLOR.BORDER};
    border-radius: 8px;
    box-shadow: 0 0 10px 4px;
    overflow: hidden;
    margin-top: 50px;
    position: relative;
`;

export const MakeNoteBlock = styled.div`
    width: 100%;
    height: ${appConfig.HEIGHT.MAKE_PANEL};
    font-size: 18px;
    padding-left: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: ${appConfig.COLOR.BORDER};
    position: relative;
`;

export const NoteSubject = styled.input`
    width: 100%;
    height: ${appConfig.HEIGHT.MAKE_PANEL};
    padding: 0 10px;
    font-size: 18px;
    background: none;
    border: none;
    outline: none;
    color: ${appConfig.COLOR.FONT};
`;

export const NoteText = styled.textarea`
    width: 100%;
    height: 30px;
    resize: none;
    font-size: 15px;
    background: none;
    border: none;
    outline: none;
    padding: 0 10px;
    color: ${appConfig.COLOR.FONT};
`;

export const CloseNewNote = styled.div`
    width: 15px;
    height: 15px;
    position: absolute;
    top: 0;
    right: 5px;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: ${appConfig.COLOR.FONT};
`;