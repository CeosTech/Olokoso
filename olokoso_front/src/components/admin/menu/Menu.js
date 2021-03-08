import Logo from "../../../images/olokoso_logo.png";
import { useDispatch, useSelector } from "react-redux";
import { selectAdmin, changePage } from "../../../app/Redux-slices/adminSlice";
import { useState } from "react";

import "./menu.css";
import { IconButton } from "@material-ui/core";
import { Switch, useHistory, useRouteMatch } from "react-router-dom";
import SwitchBtn from "../../switch/SwitchBtn";

const AdminNav = () => {
  const admin = useSelector(selectAdmin);
  const dispatch = useDispatch();
  const history = useHistory();
  const { path } = useRouteMatch();

  const [open, setOpen] = useState(true);
  const [active, setActive] = useState(false);

  console.log(active);

  // active
  //   ? (window.document.body.style.overflow = "hidden")
  //   : (window.document.body.style.overflow = "auto");

  return (
    <div className={"adminNav " + (active ? "active" : "")}>
      <div className='adminNav__header'>
        <img src={Logo} alt='olokoso' />
      </div>
      {/* Switch pour ouvrir et fermer (close and open restaurant) */}
      <SwitchBtn />
      <div className='adminNav__links'>
        {admin.pages.map((page) => (
          <button
            key={page.name}
            className={
              "adminNav__link " +
              (admin.currentPage === page.name ? "active" : "")
            }
            onClick={() => {
              dispatch(changePage(page.name));
              history.push(path + page.path);
              setActive(false);
            }}>
            <i className={"fas adminNav__link__icone " + page.icone}></i>{" "}
            <p>{page.libelle}</p>
          </button>
        ))}
      </div>
      <div className='adminNav__close'>
        <IconButton
          className='adminNav__close-btn'
          onClick={() => setActive(!active)}>
          <i
            className={
              "fas fa-" + (active ? "chevron-right" : "chevron-left")
            }></i>
        </IconButton>
      </div>

      <div className='adminNav__humburger'>
        <IconButton onClick={() => setActive(!active)}>
          <i className='fas fa-bars'></i>
        </IconButton>
      </div>
    </div>
  );
};

export default AdminNav;
