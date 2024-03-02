import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Main } from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route element={<Main />} path='/'>
                        <Route element={<Home />} path='/' />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
