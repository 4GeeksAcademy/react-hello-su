import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div> 
			<h2 class="header">My Counter</h2>
		<div className=" timer d-flex justify-content-center ">
			<h1>{Math.floor(props.second / 100000)% 10}</h1>
			<h1>{Math.floor(props.second / 10000)% 10}</h1>
			<h1>{Math.floor(props.second / 1000)% 10}</h1>
			<h1>{Math.floor(props.second / 100)% 10}</h1>
			<h1>{Math.floor(props.second / 10)% 10}</h1>
		</div>
		</div>
	);
};

export default Home;
