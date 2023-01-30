import { AllArticlesContainer } from '../containers';
import Template from './Template';

export const AllArticlesPage = () => {
    const content = <AllArticlesContainer />;

    return <Template content={content} />;
};
