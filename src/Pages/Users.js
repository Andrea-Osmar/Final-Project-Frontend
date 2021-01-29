import React, { useState } from "react"

import { SignUp } from "./SignUp"
import { SignIn } from './SignIn'
import { List } from './List'

import { signUpUrl, signInUrl } from "../Paths/api-paths"
import { ToggleButton } from '../Components/ToggleButton'
import { SignOutButton } from "../Components/SignOutButton"

export const Users = () => {
	const [mode, setMode] = useState("signIn")
	const tokenFromStorage = () => window.localStorage.getItem("tokenAuth") || ""
	const [token, setToken] = useState(tokenFromStorage)
	const [signUpOk, setSignUpOk] = useState()
	const [signInOk, setSignInOk] = useState()

	const handleChangeMode = (modeFromButton) => {
		setMode(modeFromButton)
	}

	const handleSignOut = () => {
		setToken("")
		//remove token from local storage
		localStorage.clear()
	}

	const signInUser = (user) => {
		const myHeaders = new Headers()
		myHeaders.append("Content-Type", "application/json")
		const userInfo = JSON.stringify({
			email: user.email,
			password: user.password,
		})
		const requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: userInfo,
		}

		fetch(signInUrl, requestOptions)
			.then((res) => {
				if (res.status === 200) {
					return res.json()
				} else throw new Error(res.status)
			})
			.then((data) => {
				setToken(data.accessToken)
				window.localStorage.setItem("tokenAuth", data.accessToken)
			})
			.catch((error) => {
				setSignInOk(false)
			})
	}

	const signUpUser = (user) => {
		const myHeaders = new Headers()
		myHeaders.append("Content-Type", "application/json")
		const userInfo = JSON.stringify({
			username: user.userName,
      password: user.password,
      email: user.email,
		})
		const requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: userInfo,
		}

		fetch(signUpUrl, requestOptions)
			.then((res) => {
				if (res.status === 201) {
					return res.json()
				} else throw new Error(res)
			})
			.then((data) => {
				setSignUpOk(true)
			})
			.catch((error) => {
				setSignUpOk(false)
			})
	}

	const [modalState, setModalState] = useState(false)

  const toggleModalState = () => {
    setModalState(!modalState)
  }

	return (
		<>
		<main>
			<button onClick={() => toggleModalState()}>Open modal</button>
		<div className={`modalBackground modalShowing-${modalState}`}>
        <div className="modalInner">
          <div className="modalImage">
            <img
              src="https://images.unsplash.com/photo-1609770231080-e321deccc34c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"
              alt="modal pic"
            />
          </div>
          <div className="modalText">
          {!token && mode === "signIn" && (
				<SignIn signInStatus={signInOk} signIn={signInUser} />
			)}
			{!token && mode === "signUp" && (
				<SignUp signUpStatus={signUpOk} signUp={signUpUser} />
			)}
			{!token && <ToggleButton mode={mode} setModeinApp={handleChangeMode} />}
			{token && <SignOutButton signOut={handleSignOut} />}
            <button className="exitButton" onClick={() => toggleModalState()}>
              exit
            </button>
						
          </div>
        </div>
      </div>
			
      
					
		{token && <List token={token} />}
		</main>

		</>
	)
}






/*  
import React, { useState } from "react"

import { SignUp } from "./SignUp"
import { SignIn } from './SignIn'
import { List } from './List'

import { signUpUrl, signInUrl } from "../Paths/api-paths"
import { ToggleButton } from '../Components/ToggleButton'
import { SignOutButton } from "../Components/SignOutButton"

export const Users = () => {
	const [mode, setMode] = useState("signIn")
	const tokenFromStorage = () => window.localStorage.getItem("tokenAuth") || ""
	const [token, setToken] = useState(tokenFromStorage)
	const [signUpOk, setSignUpOk] = useState()
	const [signInOk, setSignInOk] = useState()

	const handleChangeMode = (modeFromButton) => {
		setMode(modeFromButton)
	}

	const handleSignOut = () => {
		setToken("")
		//remove token from local storage
		localStorage.clear()
	}

	const signInUser = (user) => {
		const myHeaders = new Headers()
		myHeaders.append("Content-Type", "application/json")
		const userInfo = JSON.stringify({
			email: user.email,
			password: user.password,
		})
		const requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: userInfo,
		}

		fetch(signInUrl, requestOptions)
			.then((res) => {
				if (res.status === 200) {
					return res.json()
				} else throw new Error(res.status)
			})
			.then((data) => {
				setToken(data.accessToken)
				window.localStorage.setItem("tokenAuth", data.accessToken)
			})
			.catch((error) => {
				setSignInOk(false)
			})
	}

	const signUpUser = (user) => {
		const myHeaders = new Headers()
		myHeaders.append("Content-Type", "application/json")
		const userInfo = JSON.stringify({
			username: user.userName,
      password: user.password,
      email: user.email,
		})
		const requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: userInfo,
		}

		fetch(signUpUrl, requestOptions)
			.then((res) => {
				if (res.status === 201) {
					return res.json()
				} else throw new Error(res)
			})
			.then((data) => {
				setSignUpOk(true)
			})
			.catch((error) => {
				setSignUpOk(false)
			})
	}

	return (
		<main>
			{!token && mode === "signIn" && (
				<SignIn signInStatus={signInOk} signIn={signInUser} />
			)}
			{!token && mode === "signUp" && (
				<SignUp signUpStatus={signUpOk} signUp={signUpUser} />
			)}
			{!token && <ToggleButton mode={mode} setModeinApp={handleChangeMode} />}
			{token && <SignOutButton signOut={handleSignOut} />}
			{token && <List token={token} />}
		</main>
	)
}
*/ 