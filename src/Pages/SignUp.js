import React, { useState } from "react"

import { ErrorMessage } from '../Components/ErrorMessage'

export const SignUp = ({ signUp, signUpStatus }) => {
	const [userName, setUserName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [repeatPassword, setRepeatPassword] = useState("")
	const [passwordMatch, setPasswordMatch] = useState()

	const checkPasswordMatch = () => {
		if (password === repeatPassword) {
			setPasswordMatch(true)
			return true
		} else {
			setPasswordMatch(false)
			return false
		}
	}

	const handleRegistration = (event) => {
		event.preventDefault()
		const user = {
			userName: userName,
			password: password,
			email: email,
		}
		if (checkPasswordMatch()) {
			signUp(user)
		} else console.log("passwords don't match")
	}

	return (
		<section>
			<div className='form-container'>
			<form onSubmit={(event) => handleRegistration(event)} className="form">
				<h2>Sign up here</h2>
				<input
					type="email"
					id="email"
					required
					placeholder="E-mail address"
					onChange={(event) => setEmail(event.target.value)}
					value={email}
					pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
					disabled={signUpStatus}
				></input>
				<input 
				type="text"
				id="userName"
				placeholder="Username"
				onChange={(event) => setUserName(event.target.value)}
				value={userName}
				disabled={signUpStatus}
				></input>
				<input
					type="password"
					id="password"
					required
					placeholder="Password"
					onChange={(event) => setPassword(event.target.value)}
					value={password}
					minLength="5"
					disabled={signUpStatus}
				></input>
				<input
					type="password"
					id="repeatPassword"
					required
					placeholder="Repeat your password"
					onChange={(event) => setRepeatPassword(event.target.value)}
					value={repeatPassword}
					minLength="5"
					disabled={signUpStatus}
				></input>
				<output>
					{passwordMatch === false && (
						<ErrorMessage message={"Passwords are not matching."} />
					)}
				</output>
				<output>
					{signUpStatus === false && (
						<ErrorMessage message={"Sign up failed."} />
					)}
				</output>
				<output className="sign-up-success">
					{signUpStatus === true &&
						"Registration successful. Continue to sign in."}
				</output>
				<button className="button" type="submit" disabled={signUpStatus}>
					Sign Up
				</button>
			</form>
			</div>
		</section>
	)
}
