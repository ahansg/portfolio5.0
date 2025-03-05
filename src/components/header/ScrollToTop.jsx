import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Deaktiverer scroll-gjenoppretting fra nettleseren for å unngå animasjon
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Fjern alle tidligere scroll-bevegelser og sett posisjonen til toppen umiddelbart
    window.scrollTo(0, 0);
  }, [location]); // Triggeres ved hver ruteendring

  return null;
};

export default ScrollToTop;
