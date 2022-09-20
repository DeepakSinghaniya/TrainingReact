import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>
          <label>User ID</label>{" "}
          <input type="text" {...register("userId", { required: true })} />
          {errors.userId ? <span>Required field</span> : null}
        </p>
        <p>
          <label>Password</label>{" "}
          <input
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password ? <span>Required field</span> : null}
        </p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
