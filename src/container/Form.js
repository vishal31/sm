import React, {Component} from 'react';

import '../App.css';

import axios from '../utils/axios';

class Form extends Component {


  state = {

    name : '',
    email : '',
    salary : 0

  }



  submitHandler = () => {

    console.log(this.state);

    const data = {

      name   : this.state.name,
      email  : this.state.email,
      salary : this.state.salary,

    };


    axios.post('/insert', data)
      .then(res => {

        console.log(res.data);
        alert(res.data)

        this.props.history.push({
          pathname: '/view'
        })
       
      })
      .catch(err => {
        
        console.log(err.response);
        alert('Something went wrong')
        
      })


  }


  render() {

    return (

        <div className="container card mt-5 pb-5 shadow border border-light">

            <div className="row justify-content-center mt-5"> 


              <div className="col-8"> 

                  <input type="text"   placeholder="name"   className="form-control mt-2" onChange={(event) => {this.setState({name: event.target.value})}}/>
                  <input type="email"  placeholder="email"  className="form-control mt-2" onChange={(event) => {this.setState({email: event.target.value})}}/>
                  <input type="number" placeholder="salary" className="form-control mt-2" onChange={(event) => {this.setState({salary: event.target.value})}}/>

                  <button className="btn btn-dark form-control mt-5" onClick={this.submitHandler}> Submit </button>



                </div>


            </div>
     
        </div>

    )


  }//End of render methods


}//End of class




export default Form;