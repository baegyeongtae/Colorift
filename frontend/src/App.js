import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import {
    Home,
    Example,
    Login,
    SignUp,
    MyPage,
    FashionMatchingPage,
    PersonalColorPage,
    Game,
    ColorShare,
    FashionShare,
    NotFound,
} from './pages';
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
                        <Route path="/game" element={<Game />} />
                        <Route path="/share/color/:id" element={<ColorShare />} />
                        <Route path="/share/fashion/:id" element={<FashionShare />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </RecoilRoot>
        </BrowserRouter>
    );
}

export default App;
