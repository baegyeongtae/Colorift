import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Example, Login, SignUp } from './pages';
import { NavigationBar } from './components';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NavigationBar />}>
                    <Route path="" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/findpassword" element={<h1>FindPassword</h1>} />
                    <Route path="/example" element={<Example />} />
                    <Route path="/personalcolor" element={<h1>PersonalColor</h1>} />
                    <Route path="/fassion" element={<h1>Fassion</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
