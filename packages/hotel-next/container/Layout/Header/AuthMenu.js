import React from 'react';
import Link from 'next/link';
import { Menu } from 'antd';
import { LOGIN_PAGE, REGISTRATION_PAGE } from 'settings/constant';

const AuthMenu = ({ className }) => {
  return (
    <Menu className={className}>
      <Menu.Item key="0">
        <Link href={`${LOGIN_PAGE}`}>
          <a>Sign in</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link href={`${REGISTRATION_PAGE}`}>
          <a>Sign up</a>
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default AuthMenu;
