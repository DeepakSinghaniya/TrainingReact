import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/auth";

const Login = () => {
  const { register, handleSubmit, formState } = useForm();
  const dispatch = useDispatch();
  const { errors } = formState;

  const onSubmit = (values) => {
    dispatch(login(values));
    console.log(values);
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>
          <label>User ID</label>{" "}
          <input type="text" {...register("email", { required: true })} />
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
