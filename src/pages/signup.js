import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Input from "../components/input";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../store/slices/auth";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signupData = useSelector((state) => state.auth?.singUp?.data);
  const { register, handleSubmit, reset } = useForm();

  const submit = (values) => {
    dispatch(signup(values));
    reset();
  };
  if (signupData?.acknowledged) {
    alert("Signup Successful...");
    navigate("/login");
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
    </div>
  );
};

export default Signup;
