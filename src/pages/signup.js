import { useForm } from "react-hook-form";
import Input from "../components/input";

const Signup = () => {
  const { register, handleSubmit, reset } = useForm();

  const submit = (values) => {
    console.log(values);
    reset();
  };
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
