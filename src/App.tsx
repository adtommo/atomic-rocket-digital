import "./App.css";
import {BrowserRouter, Navigate, Route, Routes, useLocation} from "react-router-dom";
import Navbar from "./components/nav";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Hero from "./components/hero";
import FeaturesSection from "./components/features";
import ProcessSection from "./components/process";
import PricingSection from "./components/pricing";
import GetInTouchForm from "./components/form";
import Footer from "./components/footer";
import AboutPage from "./components/about";
import NotFoundPage from "./components/notfound";
import { useLayoutEffect } from "react";
import FeaturedWorkSection from "./components/featured";

const Wrapper: React.FC<React.PropsWithChildren<{}>> = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 

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
      <GetInTouchForm/>
    </>
  )
}
const About = () => {
  return(
    <>
      <AboutPage/>
    </>
  )
}
const OurWork = () => {
  return(
    <>
      <FeaturedWorkSection/>
    </>
  )
}

function App() {
    return (
      <BrowserRouter>
      <Wrapper>
        <ThemeProvider theme={theme}>
          <Navbar/>
        </ThemeProvider>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/our-work" element={<OurWork />} />
              <Route path="/404" element={<NotFoundPage/>} />
              <Route path ="*"element={<Navigate replace to="/404" />} />
            </Routes>
        <Footer/>
        </Wrapper>
      </BrowserRouter>
    );
}

export default App;