import React from "react";

import Map from "../Map/index";

import "./restaurant.css";

const Restaurant = () => {

  return (
    <div className='restaurant' id='restaurant'>
      <div className='restaurant__header'>
        <h2 className='restaurant__title'>Notre restaurant</h2>        
        <p className='restaurant__text'>Venez découvrir nos spécialités culinaires d'Afrique !
        </p>
      </div>

      <div className="restaurant__container">
        
        <div className="restaurant__ligne2"></div>
        
        <div className="restaurant__informations-container">

          <div className="restaurant__information">
            <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="restaurant__informations-logo">
            <path d="M18.7133 3.3065H9.53942C9.38174 3.3065 9.25274 3.4395 9.25274 3.60205V5.37537C9.25274 5.53793 9.38174 5.67093 9.53942 5.67093H18.7133C18.871 5.67093 19 5.53793 19 5.37537V3.60205C19 3.4395 18.871 3.3065 18.7133 3.3065ZM13.9114 8.3309H9.53942C9.38174 8.3309 9.25274 8.4639 9.25274 8.62646V10.3998C9.25274 10.5623 9.38174 10.6953 9.53942 10.6953H13.9114C14.069 10.6953 14.198 10.5623 14.198 10.3998V8.62646C14.198 8.4639 14.069 8.3309 13.9114 8.3309ZM1.95304 0H0.401358C0.179178 0 0 0.184721 0 0.413775V9.57592C0 9.70892 0.0609206 9.83084 0.164844 9.90842L5.50075 13.9206C5.67993 14.0536 5.93078 14.0166 6.05979 13.8319L6.98076 12.5351V12.5315C7.10977 12.3467 7.07035 12.0881 6.89117 11.9551L2.35081 8.57104V0.413775C2.35439 0.184721 2.17163 0 1.95304 0Z" fill="#F7D452"/>
            </svg>
          
            <div className="restaurant__information-details">
              <h3>Horaire d'ouverture</h3>
              <h4> OUVERT 7J/7</h4>
              <p>Lundi - Jeudi : 11h00 - 14h00 / 18h30 - 22h30</p>
              <p>Vendredi - Samedi : 11h00 - 14h00 / 18h30 - 23h30</p>
              <p>Dimanche : 18h30-22h30</p>
            </div>
          </div>

          <div className="restaurant__information">
            <svg width="29" height="25" viewBox="0 0 29 25" fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="restaurant__informations-logo">
            <path d="M29 3.57143C29 1.60714 27.4647 0 25.5882 0H22.1765C21.2382 0 20.4706 0.803571 20.4706 1.78571C20.4706 2.76786 21.2382 3.57143 22.1765 3.57143H25.5882V8.30357L19.6518 16.0714H13.6471V8.92857C13.6471 7.94643 12.8794 7.14286 11.9412 7.14286H6.82353C3.05353 7.14286 0 10.3393 0 14.2857V17.8571C0 18.8393 0.767647 19.6429 1.70588 19.6429H3.41176C3.41176 22.6071 5.69765 25 8.52941 25C11.3612 25 13.6471 22.6071 13.6471 19.6429H19.6518C20.6924 19.6429 21.6647 19.1429 22.3129 18.3036L28.2494 10.5357C28.7441 9.89286 29 9.10714 29 8.30357V3.57143ZM8.52941 21.4286C7.59118 21.4286 6.82353 20.625 6.82353 19.6429H10.2353C10.2353 20.625 9.46765 21.4286 8.52941 21.4286Z" fill="#F7D452"/>
            </svg>
          
            <div className="restaurant__information-details">
              <h3>Zones de livraison</h3>
              <p>Livraison en <span className="restaurant__bold">45 min</span></p>
              <p><span className="restaurant__bold">- Zone 1 (15€ minimum)</span> : Athis-Mons, Morangis, Paray-Vieille-Poste, Savigny sur orge, Juvisy-sur-Orge, Chilly-Mazarin,   
              </p>
              <p><span className="restaurant__bold">- Zone 2 (20€ minimum)</span> : Wissou, Thiais, Longjumeaux, Orly, Ablon sur Seine, Villeneuve le roi, Rungis, Champlan</p>
              <p>Autres villes : minimum selon la ville</p>
            </div>          
          </div>


          <div className="restaurant__information">
            
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="restaurant__informations-logo"
            >
            <path d="M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0ZM10.25 6.35547C10.5797 6.33603 10.8776 6.53307 11.1035 6.8828L13.291 11.0312C13.5213 11.5228 13.3905 12.0491 13.0469 12.4004L12.0449 13.4023C11.9831 13.4871 11.9424 13.5825 11.9414 13.6875C12.3257 15.1748 13.4912 16.5467 14.5196 17.4902C15.5479 18.4337 16.6531 19.711 18.0879 20.0137C18.2652 20.0631 18.4825 20.0809 18.6094 19.9629L19.7734 18.7774C20.1753 18.4728 20.7565 18.3252 21.1855 18.5742H21.2051L25.1523 20.9043C25.7317 21.2675 25.7917 21.9695 25.3769 22.3965L22.6582 25.0938C22.2567 25.5055 21.7233 25.6439 21.2051 25.6445C18.9132 25.5759 16.7476 24.451 14.9688 23.2949C12.0491 21.1709 9.37085 18.5364 7.68947 15.3535C7.04461 14.0189 6.28709 12.3159 6.35939 10.8262C6.36584 10.2658 6.51747 9.71675 6.91213 9.35552L9.63088 6.63677C9.84267 6.45656 10.0522 6.36715 10.25 6.35547Z" fill="#F7D452"/>
            </svg>           
            <div className="restaurant__information-details">
              <h3>Téléphone</h3>
              <button>01 69 72 10 01</button>
            </div>
          </div>
        </div>
        
        <div className="restaurant__ligne"></div>

        <div className="restaurant__position">        
          <h3>O'lokoso</h3>
          <p>114 avenue de verdun,<br/>91550 Paray vieille poste</p>  

          {/*The component element for the map*/}
       
        </div>

      </div>
    </div>
  );
};

export default Restaurant;