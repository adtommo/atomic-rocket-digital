import "./App.css";
import {BrowserRouter, Navigate, Route, Routes, useLocation} from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import ProcessSection from "./components/ProcessSection";
import PricingSection from "./components/PricingSection";
import GetInTouchForm from "./components/GetInTouchForm";
import AboutPage from "./components/AboutPage";
import NotFoundPage from "./components/NotFoundPage";
import { useLayoutEffect } from "react";
import FeaturedWorkSection from "./components/FeaturedWorkSection";
import FooterSection from "./components/FooterSection";
import HelpWidget from "./components/HelpWidget";
import TermsPage from "./components/TermsPage";
import PrivacyPage from "./components/PrivacyPage";
import AccessibilityPage from "./components/AccessibilityPage";
import CookieConsent from "./components/CookieConsent";

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
      <HeroSection videoSrc="https://cdn.pixabay.com/video/2021/05/08/73478-548608753_large.mp4"/>
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
      <HelpWidget/>
      <Wrapper>
        <ThemeProvider theme={theme}>
          <ResponsiveAppBar/>
        </ThemeProvider>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/our-work" element={<OurWork />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/accessibility" element={<AccessibilityPage />} />
              <Route path="/404" element={<NotFoundPage/>} />
              <Route path ="*"element={<Navigate replace to="/404" />} />
            </Routes>
        <FooterSection/>
        <CookieConsent/>
        </Wrapper>
      </BrowserRouter>
    );
}

export default App;