import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

const Template = ({content}) => (
    <Layout className="layout">
        <Header>
            <div className="logo" />
        </Header>
        <Content style={{ padding: '0 50px' }}>
            <div style={{ backgroundColor: '#fff', minHeight: 'calc(100vh - 64px - 66.4px)' }}>
                {content}
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
);

export default Template;
