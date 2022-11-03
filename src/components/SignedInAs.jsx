import {  useContext } from "react"
import { UserContext } from "../context/UserContext"

const SignedInAs = () => {

    const { user } = useContext(UserContext)

    return <footer className="SignedInAs">signed in as: {user}</footer>
}

export default SignedInAs