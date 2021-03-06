import React, { Component } from "react";
import MainStats from '../Components/MainStats.js'

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
			<MainStats token={this.state.token} />
		) : (
			<div>Bye!</div>
		);
	}
}
