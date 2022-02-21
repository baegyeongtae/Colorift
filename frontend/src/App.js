import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
    UploadFace,
    UploadFashion,
    FashionResult,
    PersonalColorChoice,
    Loading,
    ColorResult,
    MatchingLoading,
    Test,
    Home,
    Example,
    MyPersonalColorModal,
    MyStyleModal,
} from './pages/index';
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
                    <Route path="/example" element={<Example />} />
                    <Route path="/personalcolor" element={<h1>PersonalColor</h1>} />
                    <Route path="/fashion" element={<h1>Fashion</h1>} />

                    <Route path="/uploadface" element={<UploadFace />} />
                    <Route path="/loading" element={<Loading />} />
                    <Route path="/colorresult" element={<ColorResult />} />
                    <Route path="/personalcolorchoice" element={<PersonalColorChoice />} />
                    <Route path="/uploadfashion" element={<UploadFashion />} />
                    <Route path="/matchingloading" element={<MatchingLoading />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/fashionresult" element={<FashionResult />} />
                </Route>
                <Route path="/mystylemodal" element={<MyStyleModal />} />
                <Route path="/mypersonalcolormodal" element={<MyPersonalColorModal />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
