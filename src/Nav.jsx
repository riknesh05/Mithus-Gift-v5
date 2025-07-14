import React, { useState } from "react";
import SearchBar from "./Components/Search";
import Like from "./Components/like";
import Share from "./Components/share";
import Sidebar from "./mobileview/m_Nav_side";
import { useRef } from "react";
import Logo from './assets/samp_logo_1.svg';
import hamburgerIcon from './assets/mob_v_menu_1.svg';
import closeIcon from './assets/mob_v_close_1.svg';
import new_arrivals_1 from './assets/new_arrivals_1.svg';
import best_seller_1 from './assets/best_seller_1.svg';
import occasions_1 from './assets/occasions_1.svg';
import for_him_1 from './assets/for_him_1.svg';
import for_her_1 from './assets/for_her_1.svg';

export default function Nav() {
  const sidebarRef = useRef();
  const menuRef = useRef();
  const closeRef = useRef();

  const [isChange, Change] = useState(true);
  const ShowBar = () => {
    const current = sidebarRef.current.style.display;
    sidebarRef.current.style.display = current === "block" ? "none" : "block";
    if (isChange) {
      menuRef.current.style.display = "none";
      closeRef.current.style.display = "block";
      Change(false);
    } else {
      menuRef.current.style.display = "block";
      closeRef.current.style.display = "none";
      Change(true);
    }
  };

  return (
    <>
     {/* border-neutral-200   border-b-2 */}
      <nav className="navContainer flex flex-wrap items-center justify-between p-4 md:shadow-2xl shadow-lg shadow-amber-50  bg-transparent absolute z-10 w-full">
        <div className="name flex items-center">
          <img src={Logo} alt="" />
          
          <h1 className="text-3xl text-white font-bold">Mithu's Gift</h1>
        </div>
        <ul className="navList md:flex hidden justify-start">
          <li className="navItem ">
            <a href="#">New Arrivals</a>
            <img src={new_arrivals_1} alt="" />
          </li>
          <li className="navItem ">
            <a href="#">Best Sellers</a>
            <img src={best_seller_1} alt="" />
          </li>
          <li className="navItem ">
            <a href="#">Occasions</a>
            <img src={occasions_1} alt="" />
          </li>
          <li className="navItem ">
            <a href="#">Gifts for Him</a>
            <img src={for_him_1} alt="" />
          </li>
          <li className="navItem ">
            <a href="#">Gifts for Her</a>
            <img src={for_her_1} alt="" />
          </li>
        </ul>
        <section className="navIcons md:flex hidden items-center justify-between">
          <div>
            <SearchBar />
          </div>

          <div>
            <Like />
          </div>
          <div>
            <Share />
          </div>
        </section>
        {/* Mob view ham--b */}
        <section
          className="hamburger md:hidden w-7 mr-2"
          onClick={ShowBar}
          id="hamMenuId"
        >
          <img
            ref={menuRef}
            src={hamburgerIcon}
            alt="Hamburger Icon"
          />
          <img
            ref={closeRef}
            src={closeIcon}
            alt="Close Icon"
            className="hidden"
          />
        </section>
      </nav>
      {/* MOBILE VIEW SIDE BAR */}
      <div className="hidden md:hidden" ref={sidebarRef} id="sideBarId">
        <Sidebar />
      </div>
    </>
  );
}
