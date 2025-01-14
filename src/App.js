// Filename - App.js

import React, { useState} from "react";
import "./App.css";

function ButtonWithText() {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  return (
    <>
      <button onClick={handleClick}>Lezzzzz go !</button>
      {showText && <p>LAUL, y'a rien Florian a rien foutu :D</p>}
    </>
  );
}

function App() {
    return (
        <div>
            <section class="section">
                <div class="box-main">
                    <div class="firstHalf">
                        <h1 class="text-big">
                            Clique pour voir un super site
                        </h1>
                        <ButtonWithText />
                    </div>
                </div>
            </section>
            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>
    );
}

export default App;
