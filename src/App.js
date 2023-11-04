import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TestTailwind from './Screens/test-tailwind';
import Dashboard from './Screens/Dashboard';
import TestSlide from './Screens/test-slider';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" exact element = {<Dashboard />}/>
                <Route path="/test-tailwind" exact element={<TestTailwind />} />
                <Route path="/test-slider" exact element={<TestSlide />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
