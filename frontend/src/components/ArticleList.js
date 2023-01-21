import { List } from 'antd';

import { Article } from './';


export const ArticleList = ({ data }) => {
    let dataSource = [...data].sort((a, b) => {
        if (a.time === b.time) {
            return 0;
        }
        return (a.time > b.time) ? 1 : -1;
    });
    return (
        <List
            size="small"
            bordered
            dataSource={ dataSource }
            renderItem={(item) => (
                <List.Item>
                    <Article title={item.title} content={item.content} time={item.time} />
                </List.Item>
            )}
        />
    );
};
