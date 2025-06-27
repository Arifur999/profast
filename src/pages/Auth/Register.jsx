import React  from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import SocialLogin from "./SocialLogin";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
    const {createUser}=useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email,data.password)
    .then(result => {
      console.log(result.user);
  })
  .catch((error) => {
    console.log(error);
  });
   
  };

  return (
    <div className="hero  ">
      <div className="hero-content flex-col w-full lg:flex-row-reverse">
        <div className="card  w-full max-w-sm shrink-0  ">
          <h1 className="text-3xl  text-primary py-3 font-bold">
            Create an Account
          </h1>
          <p>
            <small>Register with Profast</small>
          </p>

          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  className="input"
                  placeholder="Name"
                />
                {
                    errors?.name?.type==='required'&& <p className="text-red-600">name required</p>
                  }
                
                <label className="label">Email</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="input"
                  placeholder="Email"
                />
                {
                    errors?.email?.type==='required'&& <p className="text-red-600">email required</p>
                  }
                <label className="label">Password</label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  className="input"
                  placeholder="Password"
                />
                {
                    errors?.password?.type==='minLength'&& <p className="text-red-600">password must be a 6 character</p>
                  }
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
                <p className="font-bold">
                  You have an account?
                  <Link to="/login" className="text-primary">
                    Login
                  </Link>
                </p>
              </fieldset>
            </form>
            <span className="text-center">OR</span>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
