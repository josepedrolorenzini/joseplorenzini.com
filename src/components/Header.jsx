import { Link, useLocation } from "react-router-dom";



function Header({header}) {
   //    let myParams = useLocation();
  //   console.log(myParams);
  //  header = myParams.pathname === '/' ? 'Home Page' : myParams.pathname === '/about' ? 'About Page' : myParams.pathname === '/contact' ? 'Contact Page' : '';

  return (
    <div className="m-4">
        <h3 
        style={{color:"#b4fb51"}}
        className="font-black"
        >Real-world DevOps & Full Stack Developer {header} </h3>
         <h3 className="text-cyan-900 font-black backdrop-blur-2xl">Jose Lorenzini</h3>
    <div>
        <nav style={{ display: "inline-flex", gap: "20px" }}>
         <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/portafolio">Portafolio</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
  
     
    </div>
  )
}

export default Header