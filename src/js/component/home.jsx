import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className="d-flex">
			<h1>{Math.floor(props.second / 1000000)% 10}</h1>
			<h1>{Math.floor(props.second / 100000)% 10}</h1>
			<h1>{Math.floor(props.second / 10000)% 10}</h1>
			<h1>{Math.floor(props.second / 1000)% 10}</h1>
			<h1>{Math.floor(props.second / 100)% 10}</h1>
		</div>
	);
};

export default Home;
