import React from "react";
import {Layout} from "antd";

import Header from "./containers/Header";
import Sidebar from "./containers/Sidebar";
import Content from "./containers/Content";

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
		<Layout>
			<Header/>
			<Layout>
				<Sidebar/>
				<Layout>
					<Content/>
				</Layout>
			</Layout>
		</Layout>
		);
	};
}

export default App;