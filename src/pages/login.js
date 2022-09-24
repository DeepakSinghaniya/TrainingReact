import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/slices/auth";

const Login = () => {
  const { register, handleSubmit, formState } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginData = useSelector((store) => store.auth.login.data);
  const { errors } = formState;

  // Action (Submit) -> Dispatch -> Reducer (auth Slice) -> Store (Javascript Object)
  const onSubmit = (values) => {
    dispatch(login(values));
  };

  if (loginData?.accessToken) {
    navigate("/home");
    return null;
  }
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
      <Link to="/signup">Signup</Link>
    </div>
  );
};

export default Login;
