import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import PageTransition from "./components/PageTransition";
import Home from "./pages/Home";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1500);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
      <Navbar />
      <PageTransition>
        <Home />
        <Footer />
      </PageTransition>
    </>
  );
}
