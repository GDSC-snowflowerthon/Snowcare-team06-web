import { Drawer } from "antd";

const MenuDrawer = ({ onClose, open }) => {
  return (
    <Drawer
      title="Basic Drawer"
      placement="right"
      onClose={onClose}
      open={open}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
};

export default MenuDrawer;
