import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Form } from "react-router-dom";

const UpdateProfile = () => {
    document.title="Update Profile";
const {user}=useContext(AuthContext);
let displayName,photoURL,email;
if(user){const {displayName:name,photoURL:URL,email:Email}=user;
displayName=name;
photoURL=URL;
email=Email;}

const Update=e=>{

    e.preventDefault();
    const form=new FormData(e.currentTarget);
    const name=form.get('name');
    const photo=form.get('photo url');
    updateProfile(user,{
        displayName:name,
        photoURL:photo
      })
}

    return (
        <div className="px-4 w-1/2 mx-auto pb-8">
         <form onSubmit={Update}>
<div className="form-control ">
          <label className="label">
            <span className="label-tex text-blue-500 font-bold ">Name</span>
          </label>
          <input type="name" name="name" placeholder={displayName} className="input input-bordered  bg-rose-50 " required />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-tex text-blue-500 font-bold ">Photo URL</span>
          </label>
          <input type="photo url" name="photo url" placeholder={photoURL} className="input input-bordered  bg-rose-50 " required />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-tex text-blue-500 font-bold ">Email</span>
          </label>
          <input type="email" name="email" placeholder={email} className="input input-bordered  bg-rose-50 " required />
        </div>
        
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-red-400">Update</button>
        </div>
</form>
        </div>
    );
};

export default UpdateProfile;