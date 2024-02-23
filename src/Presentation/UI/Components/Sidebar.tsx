import type { MenuProps } from "antd";
import { Menu } from "antd";
import MenuItem from "antd/es/menu/MenuItem";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const pathName = useLocation().pathname;
  const arrPath = pathName?.substring(1);

  const onClick: MenuProps["onClick"] = (e) => {
    switch (e.key) {
      case "dashboard":
        navigate("/dashboard");
        break;
      case "login":
        navigate("/login");
        break;

      default:
        navigate("/");
        break;
    }
  };

  return (
    <div className="fixed top-0 left-0 min-h-screen bg-white">
      <Menu
        onClick={onClick}
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        <div className="w-full flex items-center justify-center bg-red-500 mb-5">
          <img
            className="text-[#29b2ff]"
            src="../../../public/assets/images/faststore-logo.svg"
          />
        </div>
        <MenuItem
          key="dashboard"
          className={`${
            arrPath == "dashboard" || arrPath == ""
              ? "bg-[#29b2ff] !text-white"
              : ""
          } hover:!text-white hover:!bg-[#8000ff]`}
        >
          DashBoard
        </MenuItem>
        <MenuItem
          key="login"
          className=" hover:!text-white hover:!bg-[#8000ff]"
        >
          Login
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Sidebar;
