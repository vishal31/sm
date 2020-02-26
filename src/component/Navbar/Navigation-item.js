import React from 'react';

import { Link } from 'react-router-dom';

function NavbarItem(props) {

    console.log(props.NavList);

    let NavList;

    NavList = props.NavList.map(item => {

        return (

               

                <li key={item.id} className={item.classList.join(' ')}>
                    <Link to={item.path} >
                        <a className="nav-link" href="#"> {item.itemName} </a>
                    </Link>
                </li>


        );


    });

  return (
            <ul className="navbar-nav">

                {NavList}
                
            </ul>

  );



}

export default NavbarItem;
