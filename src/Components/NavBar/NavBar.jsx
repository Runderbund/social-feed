import React from "react";

const NavBar = () => {
  return (
    <header style={{ backgroundColor: "white" }}>
    {/* Uses in-line styling to make white bar at top of blue page */}
        <h2 style={{ padding: "1em"}}>Social
        <small className="text-muted" >Feed</small></h2>
    </header>
  );
};
export default NavBar;