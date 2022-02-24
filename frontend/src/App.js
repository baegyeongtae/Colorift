import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import {
    Home,
    Example,
    Login,
    SignUp,
    MyPage,
    UploadFace,
    UploadFashion,
    FashionResult,
    PersonalColorChoice,
    Loading,
    ColorResult,
    MatchingLoading,
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
                        <Route path="/mypage/:id" element={<MyPage />} />
                        <Route path="/example" element={<Example />} />
                        <Route path="/personalcolor" element={<UploadFace />} />
                        <Route path="/fashion" element={<PersonalColorChoice />} />
                        <Route path="/loading" element={<Loading />} />
                        <Route path="/colorresult" element={<ColorResult />} />
                        <Route path="/uploadfashion" element={<UploadFashion />} />
                        <Route path="/matchingloading" element={<MatchingLoading />} />
                        <Route path="/fashionresult" element={<FashionResult />} />
                    </Route>
                </Routes>
            </RecoilRoot>
        </BrowserRouter>
    );
}

export default App;
