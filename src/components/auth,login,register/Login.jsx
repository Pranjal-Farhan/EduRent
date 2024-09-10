import { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext, auth } from "../../Providers/AuthProvider";
import { signInWithPopup,GoogleAuthProvider,FacebookAuthProvider  } from "firebase/auth";
import { FaGoogle,FaFacebook  } from "react-icons/fa";

const Login = () => {
 
    document.title="Login";

  const navigate=useNavigate();
const location=useLocation();

const {signIn}=useContext(AuthContext);

const handleLogin =e=>{
    e.preventDefault();
const form=new FormData(e.currentTarget);
const email=form.get('email');
const password=form.get('password');
    signIn(email,password)
    .then(()=>{alert("Login Successful");
      navigate(location?.state? location.state:'/');
    })
.catch((error) => {
    alert(error.message);
  }
)
}
const providerGoogle= new GoogleAuthProvider();
const providerFacebook = new FacebookAuthProvider();

const handleGoogle=()=>{
  signInWithPopup(auth, providerGoogle)
  .then(()=>{alert("Login Successful");
  navigate(location?.state? location.state:'/');
})
  .catch(error=>{alert(error)})
}
const handleFacebook=()=>{
  signInWithPopup(auth, providerFacebook)
  .then(()=>{alert("Login Successful");
   navigate(location?.state? location.state:'/');
 })
  .catch(error=>{alert(error)})
}

    return (
  <div className=" rounded-md">
          <div className="hero min-h-screen bg-slate-200 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold mb-10"><span className="text-black">Login Now</span></h1>

<form onSubmit={handleLogin}>
<div className="form-control ">
          <label className="label">
            <span className="label-tex text-blue-500 font-bold ">Email</span>
          </label>
          <input type="email" name="email" placeholder="Email" className="input input-bordered  bg-rose-50 " required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text  text-blue-500 font-bold">Password</span>
          </label>
          <input type="password" name="password" placeholder="Password" className="input input-bordered bg-rose-50 " required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-red-400">Login</button>
        </div>
</form>
<p>Don't have an account? <span className="text-orange-600 "><Link to={'/Register'}>Register</Link></span> </p>
<p className="text-black font-bold text-2xl text-center">Sign-In with:</p>

<div className="flex space-x-20 mt-4 ">
  <div><button onClick={handleGoogle} className="btn btn-primary bg-orange-500 font-bold"><FaGoogle /> Google  </button></div>
  <div><button onClick={handleFacebook} className="btn btn-primary bg-blue-500 font-bold"><FaFacebook /> Facebook </button></div>
</div>
    </div>
    
  </div>
</div>


</div>
    );
};

export default Login;