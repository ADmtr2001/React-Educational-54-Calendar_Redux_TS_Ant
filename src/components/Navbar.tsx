import React, {FC, Fragment} from 'react';
import {Layout, Menu, Row} from "antd";
import {useHistory} from "react-router-dom";
import {RoutesNames} from "../routes";
import {useTypedSelector} from "../hooks/useTypedSelector";

const Navbar: FC = () => {
  const {isAuth} = useTypedSelector(state => state.auth);
  const router = useHistory();

  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth
          ?
          <>
            <div style={{color: 'white'}}>
              Arsen
            </div>
            <Menu theme="dark" mode="horizontal" selectable={false}>

              <Menu.Item
                onClick={() => console.log('Выйти')}
                key={1}
              >
                Выйти
              </Menu.Item>
            </Menu>
          </>
          :
          <>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item
                onClick={() => router.push(RoutesNames.LOGIN)}
                key={2}
              >
                Enter
              </Menu.Item>
            </Menu>
          </>
        }
      </Row>
    </Layout.Header>
  );
};

export default Navbar;