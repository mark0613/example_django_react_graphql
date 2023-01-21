import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ArticleList } from '../components';
import {
    getAllArticles,
    selectAllArticles,
} from '../slices/allArticlesSlice';


export const AllArticlesContainer = () => {
    const allArticles = useSelector(selectAllArticles);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllArticles());
    }, []);
    
    const articles = allArticles.articles
    const data = articles === undefined ? [] : articles;

    return (
        <ArticleList data={ data } />
    );
};
