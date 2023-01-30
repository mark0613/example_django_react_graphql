import { Col, Card, Row, Typography } from 'antd';

import { LoginContainer } from '../containers';
import Template from './Template';

const { Title } = Typography;

export const LoginPage = () => {
    const content = (
        <Row>
            <Col span={8} />
            <Col span={8}>
                <Title style={{ textAlign: 'center' }}>Login</Title>
                <Card>
                    <LoginContainer />
                </Card>
            </Col>
            <Col span={8} />
        </Row>
    );

    return <Template content={content} />;
};
