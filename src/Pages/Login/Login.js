import React, { useContext, useState }    from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
 
  const {signin} = useContext(AuthContext);
  const [loginerror,setloginerror] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';
  const handlelogin = data =>{
    setloginerror('')
    signin(data.email, data.password)
    .then(result => {
      const user= result.user;
      console.log(user);
      navigate(from, {replace: true});
    }).catch(error =>{console.log(error)
      setloginerror(error.message)
    
    })

    console.log(data)
  }
  return (
    <div className="h-[800px]  flex justify-center items-center">
      <div className="w-96 p-7">
        <h1 className="text-xl text-center">Login</h1>
        <form onSubmit={handleSubmit(handlelogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label"> <span className="label-text">Email</span></label>
            <input
              type="text"className="input input-bordered w-full max-w-xs"{...register("email", {required:"Email Address is required"})}/>
               {errors.email && <p role="alert">{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label"> <span className="label-text">Password</span></label>
            <input
              type="password"className="input input-bordered w-full max-w-xs"{...register("password")}/>
              <label className="label"> <span className="label-text">Forget Password</span></label>
          </div>

         
          <input className="btn btn-accent w-full" value="Login" type="submit" />
         <div>
         { loginerror && <p className="text-red">{loginerror} </p>}
         </div>
        </form>
        <p>New to Doctors Portal <Link to='/signup' className="text-secondary">Create new Account</Link> </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
