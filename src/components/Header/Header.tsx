import React from 'react';

import { Layout } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

export const Header: React.FC = () => {

    return (
        <Layout className="site-header">
            <div className="site-header__left">
                <MenuOutlined className="trigger" />
            </div>
        </Layout>
    )
}
