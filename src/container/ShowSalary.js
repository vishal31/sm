import React, {Component} from 'react';

import '../App.css';


class ShowSalary extends Component {




  render() {

    return (


        
                
                <div className="row justify-content-center mt-5"> 

                    <div className="col-3"> 
                    <b> Name : </b> {this.props.name}
                    </div>

                    <div className="col-3"> 
                    <b>  Email : </b> {this.props.email}
                    </div>

                    <div className="col-3"> 
                        <b> Salary : </b> {this.props.salary}
                    </div>

                </div>
        
          

    )


  }//End of render methods


}//End of class




export default ShowSalary;