import React, {useState} from 'react';



import NavItem from './Navigation-item';

function Navbar(props) {

   


    const [currState, updateStateFun] = useState({
        show: false,
    });



    const NavList = [

        {
            id: 1,
            classList: props.to ==='/add' ? props.classList : [''],
            itemName: 'Add',
            path: '/add'
        },

        // {
        //     id: 2,
        //     classList: props.to ==='/update' ? props.classList : [''],
        //     itemName: 'Update',
        //     path: '/update'
        // },

        {
            id: 3,
            classList: props.to ==='/view' ? props.classList : [''],
            itemName: 'View',
            path: '/view'
       },

        {
            id: 4,
            classList: props.to ==='/search' ? props.classList : [''],
            itemName: 'Search Salary',
            path: '/search'
        }

    ];


    const show = ()=> {

        console.log(currState.show)

        
        updateStateFun({
            show: !currState.show
        })

    }

  return (
    
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark shadow-sm mb-4">

        <a className="navbar-brand" href="#"> SM - Assignment </a>

        <button className="navbar-toggler" type="button" onClick={show}>
            <span className="navbar-toggler-icon"></span>
        </button>


        <div className={currState.show ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'}>

            <NavItem NavList={NavList} />

        </div>  

    </nav>

  );



}

export default Navbar;
