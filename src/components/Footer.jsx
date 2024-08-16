import React from "react"


const date = new Date();
var year = date.getFullYear();

function Footer (){
    return (<footer>
    <div className="container" id="footer-content">
    <h3>Developed by Godwin Olekanma</h3>
    <h3>Copyright © {year}</h3>
        <ul className="socials">
            <li><a href=""><i class='bx bxl-github'></i></a></li>
            <li><a><i class='bx bxl-twitter' ></i></a></li>
            <li><a><i class='bx bxl-facebook-circle' ></i></a></li>
            <li><a href="mailto:godwinolekanma12@gmail.com"><i class='bx bxl-gmail' ></i></a></li>
        </ul>
    </div>

   
    </footer>)
}

export default Footer;