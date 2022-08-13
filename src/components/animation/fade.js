import { Grow } from "@mui/material";
import React from "react";
import './fade.css';

const ScrollFade = ({ children }) => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  });
  return (
    <Grow ref={domRef} in={isVisible} style={{ transformOrigin: '0 0 0' }}{...(isVisible ? { timeout: 1000 } : {})}>
      {children}
    </Grow>
  );
}

export default ScrollFade;