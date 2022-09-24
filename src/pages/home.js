import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header";
import { getUsers } from "../store/slices/users";

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users.users.data);
  const isLoading = useSelector((store) => store.users.users.isLoading);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  if (isLoading) {
    return <h1>Data Loading... </h1>;
  }
  return (
    <>
      <Header />
      <h1>Home Page... </h1>
      <ol>
        {users?.map((item) => {
          return (
            <li key={item._id}>
              <h2>
                {item.name} -- {item.email}
              </h2>
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default Home;
