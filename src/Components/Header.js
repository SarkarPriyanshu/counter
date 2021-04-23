import React, { useState, useEffect } from "react";

function Header() {
  // state that holds the current time
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  //Side effect to re-render the component as the state "Time" changes

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, [time]);

  return (
    <>
      <header className="HeaderComponent">
        <div className="BrandLogo">Logo</div>
        <nav className="NavTimer">{`Current time is ${time}`}</nav>
      </header>
    </>
  );
}

export default Header;
