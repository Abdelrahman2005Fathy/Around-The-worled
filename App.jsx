import { BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Country from "./pages/country";
function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="*" element={<NoPage/>}/>
            <Route path=":country" element={<Country/>}/>
          </Route>
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
