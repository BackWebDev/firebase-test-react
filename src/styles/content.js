import styled from "styled-components";
import {Layout} from "antd";

import appConfig from "./app-config";

const {Content} = Layout;

export const ContentStyled = styled(Content)`
	background-color: ${appConfig.COLOR.THEME};
`;