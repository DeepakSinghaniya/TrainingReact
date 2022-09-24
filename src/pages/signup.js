import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/input";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../store/slices/auth";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Store/Global State (Javascript Object) -> Select Data using key path -> Return Data
  const signupData = useSelector((store) => store.auth?.singUp?.data);
  const { register, handleSubmit, reset } = useForm();

  // Action (Submit) -> Dispatch -> Reducer (auth Slice) -> Store (Javascript Object)
  const submit = (values) => {
    dispatch(signup(values));
    reset();
  };
  if (signupData?.acknowledged) {
    alert("Signup Successful...");
    navigate("/");
  }
  return (
    <div className="signup-form-warp">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit(submit)}>
        <Input
          label="Name: "
          registerName="name"
          register={register}
          placeholder="Name"
          type="text"
        />
        <Input
          label="Eamil: "
          registerName="email"
          register={register}
          placeholder="Email"
          type="email"
        />
        <Input
          label="Password: "
          registerName="password"
          register={register}
          placeholder="Password"
          type="password"
        />
        <Input
          label="Confirm Passowrd: "
          registerName="confirmPassword"
          register={register}
          placeholder="Confirm Password"
          type="password"
        />
        <button type="submit">Signup</button>
      </form>
      <Link to="/">Login</Link>
    </div>
  );
};

export default Signup;
