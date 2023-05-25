import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomActivityLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          color: match ? "#FFFFFF" : "",
          background: match ? "#64CEE6" : "",
          padding: match ? "10px" : "",
          borderRadius: match ? "20px" : "",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {/* {match && " (active)"} */}
    </div>
  );
}
export default CustomActivityLink;
