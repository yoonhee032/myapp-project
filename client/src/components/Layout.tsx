import { Outlet } from "react-router-dom";
import Header from "./Header";
import Content from "./Content";

const Layout = () => {
  return (
    <>
      <Header />
      <Content></Content>
      <Outlet />
    </>
  );
};
export default Layout;
