import { useEffect, useState } from "react";

// import components
import { Nav, NavMobile } from "./";

// import Logo
import { Logo } from "../assets/img";

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setBg(true);
      } else {
        setBg(false);
      }
    });
  }, []);

  return <header>Header</header>;
};

export default Header;
