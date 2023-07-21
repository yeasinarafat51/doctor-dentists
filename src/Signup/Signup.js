import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createuser, updateuser} = useContext(AuthContext);
    const [signerror, setsignerror] = useState('')
    const handlesignup = data =>{
        setsignerror('')
        createuser(data.email, data.password)
        .then(result =>{
            const user = result.user;
            toast('create a user')
            const userinfo = {
                displyName: data.name
            }
            updateuser(userinfo)
            .then(()=>{})
            .catch(err =>console.log(err))
            console.log(user)
        })
        .catch(error =>{console.log(error)
        setsignerror(error.message)})
      console.log(data)
    } 
    return (
        <div className="h-[800px]  flex justify-center items-center">
        <div className="w-96 p-7">
          <h1 className="text-xl text-center">Signup</h1>
          <form onSubmit={handleSubmit(handlesignup)}>
            <div className="form-control w-full max-w-xs">
              <label className="label"> <span className="label-text">Name</span></label>
              <input
                type="text"className="input input-bordered w-full max-w-xs"{...register("name", )}/>
                 {/* {errors.email && <p role="alert">{errors.email?.message}</p>} */}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label"> <span className="label-text">Email</span></label>
              <input
                type="email"className="input input-bordered w-full max-w-xs"{...register("email", {required:"Email Address is required"})}/>
                 {errors.email && <p role="alert">{errors.email?.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label"> <span className="label-text">Password</span></label>
              <input
                type="password"className="input input-bordered w-full max-w-xs"{...register("password",{required:"password is required", minLength:{value:6 , message: "password is 6 charecter"}})}/>
                <label className="label"> <span className="label-text">Forget Password</span></label>
            </div>
  
           
            <input className="btn btn-accent w-full" value="Signup" type="submit" />
          </form>
          {signerror && <p>{signerror}</p>}
          <p>Allready have an account <Link to='/login' className="text-secondary">Login</Link> </p>
          <div className="divider">OR</div>
          <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
        </div>
      </div> 
    );
};

export default Signup;