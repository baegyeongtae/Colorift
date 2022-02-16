import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UploadFace, Fashion, Loading } from './pages/index';

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
                <Route path="/fashion" element={<Fashion />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
