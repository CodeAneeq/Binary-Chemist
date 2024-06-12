import React from "react";
import logo from "../../assets/logo.png";
import './navbarIndex.css';

// export const Navbar = () => {
//   return (
//     <div className="navbarDiv">
//     <nav className="navbar navbar-expand-lg">
//       <div className="container">
//         <figure>
//             <img src={logo} alt="" />
//         </figure>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <div class="container-fluid">
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//   </div>
//           <div className="navbar-nav">
//             <a className="home nav-link active text-danger" aria-currents="page" href="#Home">
//               HOME
//             </a>
//             <a className="nav-link active text-light" href="#a">
//               ABOUT
//             </a>
//             <a className="nav-link active text-light" href="#faq">
//               FAQ'S
//             </a>
//             <a className="nav-link active text-light" href="#">
//               PRICING
//             </a>
//             <a className="nav-link active text-light" href="#Con">
//               CONTACT
//             </a>
//           </div>
//         </div>
//       </div>
//     </nav>
//     </div> 
//   );
// };

// export default Navbar;


export const Navbar = () => {
  return (
    <div className="navbarDiv">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <figure>
            <img src={logo} alt="Logo" />
          </figure>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active text-danger" aria-current="page" href="#Home">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-light" href="#a">ABOUT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-light" href="#faq">FAQ'S</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-light" href="#">PRICING</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-light" href="#Con">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;


// const Navbar = () => {
//   return (
//     <>
//      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar_effect navbar-dark fixed-top">
//   <div className="container  responsive-navbar">
//       <img src="/img/logo.png" alt=""  />
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#">HOME</a>
//         </li>
//          <li className="nav-item">
//           <a className="nav-link" aria-current="page" href="#about">ABOUT</a>
//         </li>
//          <li className="nav-item">
//           <a className="nav-link" aria-current="page" href="#services">SERVICES</a>
//         </li> 
//         <li className="nav-item">
//           <a className="nav-link" aria-current="page" href="#packages">PRICING</a>
//         </li> 
//          <li className="nav-item">
//           <a className="nav-link" aria-current="page" href="#contact">CONTACT</a>
//         </li>
//       </ul>
     
//     </div>
//   </div>
// </nav> 
// </>
//   )
// }

// export default Navbar
