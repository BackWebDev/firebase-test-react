import styled from "styled-components";
import {Layout} from "antd";

import appConfig from "./app-config";

const {Header} = Layout;

export const HeaderStyled = styled(Header)`
	background-color: ${appConfig.COLOR.THEME};
	border-bottom: 1px solid ${appConfig.COLOR.BORDER};
	height: ${appConfig.HEIGHT.HEADER};
`;