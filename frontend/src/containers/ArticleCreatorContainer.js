import { message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import {
    handleCreateArticle,
    selectCreateArticleResult,
    selectRequestId,
    selectStatus,
} from '../slices/articleSlice';
import { MdArticleCreator } from '../components';
import { Cookie } from '../utils/cookie';
import { useEffect } from 'react';

export const ArticleCreatorContainer = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const error = (msg) => {
        messageApi.open({
            type: 'error',
            content: msg,
        });
    };
    const result = useSelector(selectCreateArticleResult);
    const status = useSelector(selectStatus);
    const requestId = useSelector(selectRequestId);
    const dispatch = useDispatch();

    const onCreate = ({ title, content, time }) => {
        if (!Cookie.contains('token')) {
            alert('登入才能建立文章!');
            window.location.href = '/login';
        }
        if (title === '' || content === '') {
            error('標題和內文都不能空白!');
            return;
        }

        dispatch(handleCreateArticle({ title, content, time }));
    };

    useEffect(() => {
        if (status === 'ok') {
            alert('建立成功!');
            window.location.href = '/';
        }
        if (status === 'error') {
            error(result);
        }
    }, [requestId, status]);

    return (
        <>
            {contextHolder}
            <MdArticleCreator onCreate={onCreate} />
        </>
    );
};
