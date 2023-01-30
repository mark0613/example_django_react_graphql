import { List } from 'antd';

import { DateFormatter } from '../utils/formatters';

export const ArticleList = ({ data }) => {
    let dataSource = [...data].sort((a, b) => {
        if (a.time === b.time) {
            return 0;
        }
        return a.time > b.time ? 1 : -1;
    });

    return (
        <List
            size="small"
            bordered
            dataSource={dataSource}
            renderItem={(item) => (
                <List.Item>
                    <List.Item.Meta
                        title={item.title}
                        description={DateFormatter.datetime(item.time)}
                    />
                    {item.content}
                </List.Item>
            )}
        />
    );
};
