import {  useContext } from "react"
import { UserContext } from "../context/UserContext"

const SignedInAs = () => {

    const { user } = useContext(UserContext)

    return <div className="SignedInAs">signed in as: {user}</div>
}

export default SignedInAs