import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AllArticlesPage, ArticleCreatorPage, LoginPage } from './pages';

const App = () => (
    <BrowserRouter basename="/">
        <Routes>
            <Route exact path="/" element={<AllArticlesPage />} />
            <Route exact path="/create" element={<ArticleCreatorPage />} />
            <Route exact path="/login" element={<LoginPage />} />
        </Routes>
    </BrowserRouter>
);

export default App;
