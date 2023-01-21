import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';

import { AllArticlesPage } from './pages';


function App() {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route exact path="/" element={ <AllArticlesPage /> } />
                <Route path="*" element={ <></> } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
