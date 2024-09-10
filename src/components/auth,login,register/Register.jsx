import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import verifyPassword from "./passwordCheck";
import { updateProfile } from "firebase/auth";
import { FaRegEye,FaRegEyeSlash  } from "react-icons/fa";

const Register = () => {
  document.title="Register";

  const navigate=useNavigate();
    const {createUser,updateUser}=useContext(AuthContext);
const [showPassword,setShowPassword]=useState(false);
    const handleRegister =e=>{
        e.preventDefault();
    const form=new FormData(e.currentTarget);
    const email=form.get('email');
    const passwordtest=form.get('password');
    const name=form.get('name');
    const photo=form.get('photo url');
    let password;
    if(verifyPassword(passwordtest)){
        password=passwordtest;
        navigate('/');
    }
    else{alert("Password must contain one uppercase letter, one lowercase letter and its length must be atleast 6 characters");
     return;}
    
createUser(email,password)
.then(result=>{
updateProfile(result.user,{
  displayName:name,
  photoURL:photo
})

    console.log(result);
    alert("Registration Successful")
})
.catch(error=>
alert(error.message));
}
    return (
        <div className=" rounded-md">
          <div className="hero min-h-screen bg-slate-200 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold mb-10"><span className="text-black">Register Now</span></h1>

<form onSubmit={handleRegister}>
<div className="form-control ">
          <label className="label">
            <span className="label-tex text-blue-500 font-bold ">Name</span>
          </label>
          <input type="name" name="name" placeholder="Name" className="input input-bordered  bg-rose-50 " required />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-tex text-blue-500 font-bold ">Photo</span>
          </label>
          <input type="photo url" name="photo url" placeholder="Photo URL" className="input input-bordered  bg-rose-50 " required />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-tex text-blue-500 font-bold ">Email</span>
          </label>
          <input type="email" name="email" placeholder="Email" className="input input-bordered  bg-rose-50 " required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text  text-blue-500 font-bold">Password</span>
            <span onClick={()=>{setShowPassword(!showPassword)}}>{!showPassword?<FaRegEyeSlash className="text-2xl text-black"></FaRegEyeSlash>:<FaRegEye className="text-2xl text-black"></FaRegEye>}</span>
          </label>
          <input type={showPassword?"text":"password"} name="password" placeholder="Password" className="input input-bordered bg-rose-50 " required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-red-400">Register</button>
        </div>
</form>
<p>Already have an account? <span className="text-orange-600 "><Link to={'/Login'}>Login</Link></span> </p>

    </div>
    
  </div>
</div></div>
    );
};

export default Register;