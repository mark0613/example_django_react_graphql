import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';

import { AllArticlesPage, LoginPage } from './pages';


function App() {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route exact path="/" element={ <AllArticlesPage /> } />
                <Route exact path="/Login" element={ <LoginPage /> } />
                <Route path="*" element={ <></> } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
