import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
    const {createUser}=useContext(AuthContext);

    const handleRegister =e=>{
        e.preventDefault();
    const form=new FormData(e.currentTarget);
    const email=form.get('email');
    const password=form.get('password');
    // const name=form.get('name');
    // const photo=form.get('photo url');
createUser(email,password)
.then(result=>{
    console.log(result);
})
.catch(error=>
alert(error));
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
          </label>
          <input type="password" name="password" placeholder="Password" className="input input-bordered bg-rose-50 " required />
          
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