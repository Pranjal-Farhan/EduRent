import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
const {signIn}=useContext(AuthContext);

const handleLogin =e=>{
    e.preventDefault();
const form=new FormData(e.currentTarget);
const email=form.get('email');
const password=form.get('password');
    signIn(email,password);


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

    </div>
    
  </div>
</div></div>
    );
};

export default Login;