import { Card } from 'antd';

import { DateFormatter } from '../utils/formatters';


export const Article = ({ title, content, time }) => {
    return (
        <Card 
            title={ `${title} (${DateFormatter.datetime(time)})` } 
            style={{ width: '100%' }}
        >
            <p>{ content }</p>
        </Card>
    );
};
