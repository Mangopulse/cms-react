import React from "react";
import {useEffect, useState} from "react";

const Home = () => {

	// Set loading state to true initially
	const [loading, setLoading] = useState(true);
	
	useEffect(() => {
	// Loading function to load data or
	// fake it using setTimeout;
	const loadData = async () => {

		// Wait for two second
		await new Promise((r) => setTimeout(r, 2000));

		// Toggle loading state
		setLoading((loading) => !loading);
	};
		
	loadData();
	}, [])
	
	// If page is in loading state, display
	// loading message. Modify it as per your
	// requirement.
	if (loading) {
		return <div>Loading....</div>
	}
	
	// If page is not in loading state, display page.
	else {
		return <h1>Home</h1>
	}
}

export default Home;
