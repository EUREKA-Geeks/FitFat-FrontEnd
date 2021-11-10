import React from "react";
import Nav from "./Nav";
import "../styles/HeaderStyle.css";

export default function Header() {
  return (
    <div >
    <header>

      <Nav />
      <section className="font"  style={{paddingTop:"15%"}}>
        <h1 >Lose Fat<br/>&emsp;&emsp;&emsp;Get <span classNmae="font" style={{color:"#F36100"}}>Fit</span> <br/> 
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Have Fun.</h1>
      </section>
    </header>
    </div>
  );
}
