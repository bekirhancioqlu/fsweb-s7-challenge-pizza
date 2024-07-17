import React from "react";
import "./Home.css"
import icon1 from "../Assets/Iteration-2-aseets/icons/1.svg"
import icon2 from "../Assets/Iteration-2-aseets/icons/2.svg"
import icon3 from "../Assets/Iteration-2-aseets/icons/3.svg"
import icon4 from "../Assets/Iteration-2-aseets/icons/4.svg"
import icon5 from "../Assets/Iteration-2-aseets/icons/5.svg"
import icon6 from "../Assets/Iteration-2-aseets/icons/6.svg"
export const Home = () => {
  return (
      <div className="home">
        <div className=" banner"> 
        
         <div className="giris">

          <div><p className="baslik">Teknolojik Yemekler</p>  </div>

          <div className="yazi"> 
          <p className="aciklama">fırsatı kaçırma</p>
          <p className="slogan">KOD ACIKTIRIR<br/> PIZZA, DOYURUR</p>
          <button className="aciktim">Acıktım</button>

          </div> 
         
         
         </div>
        </div>
        <div className="kategori">

         <div>
          <img src= {icon1} />
         <p>YENİ!Kore</p>
         </div> 

          <div>
            <img src= {icon2} />
          <p>Pizza</p>
          </div>

          <div>
            <img src= {icon3} />
          <p>Burger</p>
          </div>

          <div>
            <img src= {icon4} />
          <p>Kızartmalar</p>
          </div>

          <div>
            <img src= {icon5} />
          <p>Fast Food</p>
          </div>

          <div>
            <img src= {icon6} />
          <p>Gazlı İçecekler</p>
          </div>

           </div>
          
      </div>
  )
}
  
 