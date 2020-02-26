import React, {Component} from 'react';

import axios from '../utils/axios';

import ShowSalary from '../container/ShowSalary';



class SalarySearch extends Component {



  state = {
    salary : 0,
    data   : [],
    value: '',
    sortBy : 'sort by'
  }



  sortHandler = value => {


    console.log('value value', value);

    if(!this.state.salary && value !== 'sortBy') {
      return alert('Salary is required');

    }
   
    

    const salary = this.state.salary;
    const sortBy = value;
  

    axios.get(`salary?salary=${salary}&sortBy=${sortBy}`)
      .then(res => {
        
        console.log(res.data.data);

        this.setState({
          data : res.data.data,
          value : value,

        });
      
      })
      .catch(err => {

        console.log(err.response.data)
      })
    
  }  

  render() {


    const data = this.state.data;
    let salary;


    if(data.length && this.state.value != 'sortBy') {

      salary = data.map(ele => {

        console.log(ele)

        return (

            <div key={ele.id}>

              <ShowSalary id={ele.id} name={ele.name} email={ele.email} salary={ele.salary} />

            </div>

        )

      });


    }







    return (



      <div>


      <div className="container card mt-5 mb-5 pb-5 shadow border border-light">

      <div className="row justify-content-center mt-5"> 


          <div className="col-6"> 

              <input type="number" placeholder="salary" className="form-control" 
              
                onKeyUp={(event) => {
                  
                  this.setState({salary: event.target.value})
                  this.sortHandler(this.state.value ? this.state.value : 'sortBy')
                }}
                
              />
          </div>

          <div className="col-6"> 

            <select className="form-control" defaultValue={this.value ? this.value : this.state.sortBy} onChange={(event) => {this.sortHandler(event.target.value)}}> 

                <option value="sortBy"> sort by </option> />

                <option value="less than"> Less Than </option>

                <option value="greater than"> Greater Than </option>

              
            </select>

        </div>


      </div>


    </div>





    {salary ? 
        <div>
              
    <h1 className="text-center"> {this.state.value ? this.state.value : this.state.sortBy } -- Rs {this.state.salary} </h1>
          
            <div className="container card mt-5 pb-5 shadow border border-light">

              {salary}

            </div>

        </div>

        : null }







    </div>

    )


  }//End of render methods


}//End of class




export default SalarySearch;