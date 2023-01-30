import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ArticleList } from '../components';
import { getAllArticles, selectAllArticles } from '../slices/articleSlice';

export const AllArticlesContainer = () => {
    const allArticles = useSelector(selectAllArticles);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllArticles());
    }, []);

    return <ArticleList data={allArticles} />;
};
