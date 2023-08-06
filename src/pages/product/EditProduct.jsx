import React from 'react';
import { Dropdown, Button, Menu } from 'antd';

const menu = (
  <Menu>
    <Menu.Item key="1">Option 1</Menu.Item>
    <Menu.Item key="2">Option 2</Menu.Item>
    <Menu.Item key="3">Option 3</Menu.Item>
  </Menu>
);

const EditProduct = () => {
  return (
    <Dropdown
      menu={menu}
      trigger={['click']}
      placement="bottomRight"
    >
      <Button>
        Actions 
      </Button>
    </Dropdown>
  );
};

export default EditProduct;
