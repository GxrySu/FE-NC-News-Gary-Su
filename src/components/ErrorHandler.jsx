import { Link } from "react-router-dom"

const ErrorHandler = ({ error }) => {
    return <>
    <h2>oops looks like you're lost</h2>
    <Link to="/"><p>Go back to Home Page</p></Link>
    </>
}

export default ErrorHandler