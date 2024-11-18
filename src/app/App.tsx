import React from "react";
import { Layout } from "antd";

const App: React.FC = () => {
    const isUser = true;

    return (
        <Layout className="layout-wrapper" hasSider={isUser}>
            <Layout className="site-layout">
                Layout
            </Layout>
        </Layout>
    )
}

export default App;
