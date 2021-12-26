import React, {FC, Fragment} from 'react';
import {Layout, Menu, Row} from "antd";
import {useHistory} from "react-router-dom";
import {RoutesNames} from "../routes";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {AuthActionCreators} from "../store/reducers/auth/action-creators";
import {useActions} from "../hooks/useActions";

const Navbar: FC = () => {
  const dispatch = useDispatch();
  const {isAuth, user} = useTypedSelector(state => state.auth);
  const router = useHistory();
  const {logout} = useActions();

  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth
          ?
          <>
            <div style={{color: 'white'}}>
              {user.username}
            </div>
            <Menu theme="dark" mode="horizontal" selectable={false}>

              <Menu.Item
                onClick={() => logout()}
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