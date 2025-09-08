import "./App.css";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Navbar from "./components/nav";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Hero from "./components/hero";
import FeaturesSection from "./components/features";
import ProcessSection from "./components/process";
import PricingSection from "./components/pricing";

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
  components: {
    mergeClassNameAndStyle: true,
    MuiButton: {
      defaultProps: {
        className: 'default-button-class',
        style: { marginTop: 8 },
      },
    }
  }
})

const Home = () => {
  return(
    <>
    <ThemeProvider theme={theme}>
      <Hero/>
      <FeaturesSection/>
      <ProcessSection/>
      <PricingSection/>
    </ThemeProvider>
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
        </ThemeProvider>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/our-work" element={<OurWork />} />
              <Route path="/404" element={<div>Choose the correct path</div>} />
              <Route path ="*"element={<Navigate replace to="/404" />} />
            </Routes>
        
      </BrowserRouter>
    );
}

export default App;