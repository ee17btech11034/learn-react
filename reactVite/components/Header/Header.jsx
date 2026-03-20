import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 2rem", 
        backgroundColor: "#f8f9fa", borderBottom: "1px solid #ddd", fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif", 
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)", }}>

      <div style={{fontSize: "1.5em",fontWeight: "bold",color: "#333",}}>
        MyWebsite
      </div>
      <nav style={{display: "flex", gap: "2rem", }}>
        <NavLink to="/" style={({ isActive }) => ({textDecoration: "none", color: "#007bff", fontWeight: "500", 
            ...(isActive && { color: "#b38000", fontWeight: "bold" }) })}
        >
            Home
        </NavLink>

        <NavLink to="/about" style={({ isActive }) => ({textDecoration: "none", color: "#007bff", fontWeight: "500", 
            ...(isActive && { color: "#b38000", fontWeight: "bold" }) })}
        >
          About
        </NavLink>
        <NavLink to="/contact-us" style={({ isActive }) => ({textDecoration: "none", color: "#007bff", fontWeight: "500", 
            ...(isActive && { color: "#b38000", fontWeight: "bold" }) })}
        >
          Contact Us
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
