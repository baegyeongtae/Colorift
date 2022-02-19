import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
    UploadFace,
    UploadFashion,
    FashionResult,
    PersonalColorChoice,
    Loading,
    ColorResult,
    MatchingLoading,
} from './pages/index';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/findpassword" element={<FindPassword />} />
                <Route path="/example" element={<Example />} /> */}
                <Route path="/uploadface" element={<UploadFace />} />
                <Route path="/loading" element={<Loading />} />
                <Route path="/colorresult" element={<ColorResult />} />
                <Route path="/personalcolorchoice" element={<PersonalColorChoice />} />
                <Route path="/uploadfashion" element={<UploadFashion />} />
                <Route path="/matchingloading" element={<MatchingLoading />} />
                <Route path="/fashionresult" element={<FashionResult />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
