import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Home, Example, Login, SignUp, MyPage, FashionMatchingPage, PersonalColorPage, GameStart } from './pages';
import { NavigationBar } from './components';

function App() {
    return (
        <BrowserRouter>
            <RecoilRoot>
                <Routes>
                    <Route path="/" element={<NavigationBar />}>
                        <Route path="" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/mypage" element={<MyPage />} />
                        <Route path="/example" element={<Example />} />
                        <Route path="/personalcolor" element={<PersonalColorPage />} />
                        <Route path="/fashion" element={<FashionMatchingPage />} />
                        <Route path="/game" element={<GameStart />} />
                    </Route>
                </Routes>
            </RecoilRoot>
        </BrowserRouter>
    );
}

export default App;
