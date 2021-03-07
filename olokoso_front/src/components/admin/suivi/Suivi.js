import axios from "axios";
import "./suivi.css";
import { useEffect, useState } from "react";
import { splitPrix } from "../../../utilities";
const Suivi = () => {
  const [aujourdhui_ca, setAujourdhuiCa] = useState(null);
  const [calendar, setCalendar] = useState(new Date().toLocaleDateString());
  const [calendar_ca, setCalendarCa] = useState(null);

  const aujourdhui = new Date().toLocaleDateString(); //// 11/03/2021

  const get_suivi_jour = async (debut, fin, setState) => {
    const { data } = await axios.post(
      "http://127.0.0.1:8000/paiement/stripe/transactions",
      {
        date: {
          gte: debut,
          lte: fin,
        },
      }
    );

    console.log(data);
    setState(data);
  };

  const get_time_debut_fin = (date) => {
    const debut = new Date(date.toDateString() + " 00:01").getTime() / 1000;
    const fin = new Date(date.toDateString() + " 23:59").getTime() / 1000;

    return { debut, fin };
  };

  const get_ca_by_calendar = (e) => {
    // console.log(e.target.valueAsNumber);
    // console.log(e.target.valueAsDate);
    // console.log(new Date(e.target.valueAsNumber).toDateString()); //// Tue Mar 09 2021

    setCalendar(new Date(e.target.valueAsNumber).toLocaleDateString());

    const { debut, fin } = get_time_debut_fin(new Date(e.target.valueAsNumber));
    get_suivi_jour(debut, fin, setCalendarCa);
  };

  useEffect(() => {
    const { debut, fin } = get_time_debut_fin(new Date());

    get_suivi_jour(debut, fin, setAujourdhuiCa);
  }, []);

  useEffect(() => {
    const { debut, fin } = get_time_debut_fin(new Date());

    get_suivi_jour(debut, fin, setCalendarCa);
  }, []);

  //timestamp :  new Date("Sat 7 mars 2021").getTime() / 1000

  return (
    <div className='suivi_activite admin__container'>
      <div className='suivi_activite__jour'>
        <div className='suivi_activite__jour__CA'>
          <p className='suivi_activite__jour__CA-heading'>
            CA (<span>TTC</span>) du jour
          </p>
          <p className='suivi_activite__jour__CA-date'>{aujourdhui}</p>

          <div className='suivi_activite__jour__CA__card'>
            <h1>{splitPrix(aujourdhui_ca?.amount || 0)}</h1>
          </div>
        </div>
        <div className='suivi_activite__jour__commandes'>
          <p className='suivi_activite__jour__commandes-heading'>
            Total commandes du jour
          </p>
          <p className='suivi_activite__jour__commandes-date'>{aujourdhui}</p>

          <div className='suivi_activite__jour__commandes__card'>
            <h1>{aujourdhui_ca?.nb_commandes || 0}</h1>
          </div>
        </div>
      </div>

      <div className='suivi_activite__jour_exacte'>
        {/* TODO: Pour les date précise , afficher une date picker */}

        <div className='suivi_activite__jour_exacte-calendrier'>
          <label>Calendrier: </label>
          <input type='date' onChange={get_ca_by_calendar} />
        </div>
        <div className='suivi_activite__jour'>
          <div className='suivi_activite__jour__CA'>
            <p className='suivi_activite__jour__CA-heading'>
              CA (<span>TTC</span>)
            </p>
            <p className='suivi_activite__jour__CA-date'>{calendar}</p>

            <div className='suivi_activite__jour__CA__card'>
              <h1>{splitPrix(calendar_ca?.amount || 0)}</h1>
            </div>
          </div>
          <div className='suivi_activite__jour__commandes'>
            <p className='suivi_activite__jour__commandes-heading'>
              Total commandes
            </p>
            <p className='suivi_activite__jour__commandes-date'>{calendar}</p>

            <div className='suivi_activite__jour__commandes__card'>
              <h1>{calendar_ca?.nb_commandes || 0}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suivi;
