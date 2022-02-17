import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages';
import { NavigationBar } from './components';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NavigationBar />}>
                    <Route path="" element={<Home />} />
                    <Route path="/login" element={<h1>Login</h1>} />
                    <Route path="/signup" element={<h1>SignUp</h1>} />
                    <Route path="/findpassword" element={<h1>FindPassword</h1>} />
                    <Route path="/example" element={<h1>Example</h1>} />
                    <Route path="/personalcolor" element={<h1>PersonalColor</h1>} />
                    <Route path="/fassion" element={<h1>Fassion</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
