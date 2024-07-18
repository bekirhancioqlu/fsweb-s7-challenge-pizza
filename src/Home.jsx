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
          <div className="kartlar">

              <div className="banner1">
              <p className="ozel"> Özel <br/>Lezzetus </p>
              <p className="Aci">Position:Absolute Acı Burger</p>
              <button className="goEat"> Sipariş Ver </button>
              
              </div>
              <div className="rightBanner">

              <div className="banner2"> 
                <p className="Hack">Hackathlon Burger Menü</p>
                <button className="goEat1">Sipariş Ver</button>
              </div>

              <div className="banner3"> 
                <p className="Npm">Çoooook <span className="ayriRenk">hızlı <br/>npm gibi kurye</span>  </p>
                <button className="goEat2">Sipariş Ver</button>

              </div>
               </div>
          </div>
          <div>
            <p className="kisim">en çok paketlenen menüler</p>
            <p className="aciklama1">Acıktıran Kodlara Doyuran Lezzetler</p></div>

            <div className="kategori2">

         <button>
          <img src= {icon1} />
          <p>Ramen</p>
         </button> 

          <button>
            <img src= {icon2} />
            <p>Pizza</p>
          </button>

          <button>
            <img src= {icon3} />
            <p>Burger</p>
          </button>

          <button>
            <img src= {icon4} />
            <p>French fries</p>
          </button>

          <button>
            <img src= {icon5} />
            <p>Fast Food</p>
          </button>

          <button>
            <img src= {icon6} />
            <p>Soft Drinks </p>
          </button>

           </div>
           <div className="kartlar1">

           </div>
      </div>
  )
}
  
 