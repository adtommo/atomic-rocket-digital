import "./App.css";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Navbar from "./components/nav";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
     palette: {
    mode: 'light',
    primary: {
      main: '#000B1E',
    },
    secondary: {
      main: '#0d6efd',
    },
  },
})

const Home = () => {
  return(
    <>
      home
    </>
  )
}
const About = () => {
  return(
    <>
      About
    </>
  )
}
const OurWork = () => {
  return(
    <>
      OurWork
    </>
  )
}

function App() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Navbar/>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/our-work" element={<OurWork />} />
              <Route path="/404" element={<div>Choose the correct path</div>} />
              <Route path ="*"element={<Navigate replace to="/404" />} />
            </Routes>
        </ThemeProvider>
      </BrowserRouter>
    );
}

export default App;