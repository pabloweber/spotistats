import React, { Component } from "react";

export default class Home extends Component {
	constructor(props) {
		super(props);

		// Get and set token as state
		const [token, error] = this.getToken();

		this.state = {
			token: token,
			error: error,
		};

		this.getToken = this.getToken.bind(this);
	}

	async componentDidMount() {
		const url = "https://api.spotify.com/v1/me";

		const response = await fetch(url, {
			method: "GET",
			headers: { Authorization: "Bearer " + this.state.token },
		});
		const hed = this.state.token;
		const data = await response.json();
		console.log(data);
		console.log(this.state.token);
		console.log(hed);
	}

	// Set code as state
	getToken() {
		const hash = window.location.hash;
		const params = hash.split("#")[1].split("&");

		const token = hash.includes("access_token=")
			? decodeURIComponent(params[0].split("=")[1])
			: "";
		const error = hash.includes("error=");

		return [token, error];
	}

	render() {
		return !this.state.error ? (
			<div style={{ color: "white" }}>You are logged in!</div>
		) : (
			<div>Bye!</div>
		);
	}
}
