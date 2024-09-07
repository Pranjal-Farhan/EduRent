import {Link} from "react-router-dom"
const ErrorPage = () => {
    return (
        <div className="text-center align-middle text-black font-bold text-3xl">
           <h2>Opps!!! page not Found</h2>
           <br />
           <Link to="/"><button>Return Home</button></Link>
        </div>
    );
};

export default ErrorPage;