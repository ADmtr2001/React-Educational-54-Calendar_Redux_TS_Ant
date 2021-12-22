import React, {FC} from 'react';
import {Layout, Menu, Row} from "antd";

const Navbar: FC = () => {
  return (
    <Layout.Header>
      <Row justify='end'>
        <Menu theme='dark' mode='horizontal'>
          <Menu.Item key={1}>Логин</Menu.Item>
        </Menu>
      </Row>
    </Layout.Header>
  );
};

export default Navbar;