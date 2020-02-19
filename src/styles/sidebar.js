import styled from "styled-components";
import {Layout, Menu, Icon} from "antd";

import appConfig from "./app-config";

const {SubMenu} = Menu;
const {Sider} = Layout;

export const SiderStyled = styled(Sider)`
	background-color: ${appConfig.COLOR.THEME};
	
	height: calc(100vh - ${appConfig.HEIGHT.HEADER});
`;

export const MenuStyled = styled(Menu)`
	background-color: ${appConfig.COLOR.THEME};
	
	border: none;
`;

export const SubMenuStyled = styled(SubMenu)``;

export const MenuItemStyled = styled(Menu.Item)`
    color: ${appConfig.COLOR.FONT};
    width: 100%;
    height: 45px!important;
    cursor: pointer;
    border-radius: 0 25px 25px 0;
    font-weight: 400;
    font-size: 20px!important;
    
    &:hover {
      background-color: #2F3034;
      color: ${appConfig.COLOR.FONT};
    }
`;

export const MenuItemActiveStyled = styled(MenuItemStyled)`
    background-color: #41331c;
`;

export const Delimiter = styled.div`
    width: 100%;
    height: 1px;
    border-bottom: 1px solid ${appConfig.COLOR.BORDER};
`;

export const IconStyled = styled(Icon)`
    color: ${appConfig.COLOR.FONT};
    font-size: 20px!important;
    margin-right: 20px!important;
`;