import { Col, Row } from 'antd';

import Template from './Template';
import { ArticleCreatorContainer } from "../containers/ArticleCreatorContainer";


export const ArticleCreatorPage = () => {
    const content = (
        <Row>
            <Col span={4}></Col>
            <Col span={16}>
                <ArticleCreatorContainer />
            </Col>
            <Col span={4}></Col>
        </Row>
    );
    return (
        <Template content={ content } />
    );
};
