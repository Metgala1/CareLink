import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./loader/Loader";

const MainLayout = () => {
  const navigation = useNavigation();
  return (
    <>
      {navigation.state === "loading" && <Loader />}
      <Outlet />
    </>
  );
};

export default MainLayout;