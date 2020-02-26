import React, {Component} from 'react';

import '../App.css';

import axios from '../utils/axios';

class View extends Component {


    state ={

        data : [],
        isLoaded : false
    };



    componentDidMount() {


        axios.get('fetch')
            .then(res => {

                if(res.data.data) {
                    this.setState({
                        data : res.data.data,
                        isLoaded : true
                    });


                }
                console.log(res.data);
            })
            .catch(err => {

                console.log(err.response.data);
            })
    }





    delete = (id) => {


        axios.delete('delete', {data : {id : id}})
            .then(res => {

                this.componentDidMount();

                console.log(res.data);

                alert(res.data)
            })
            .catch(err => {

                console.log(err.response.data);

                alert('Something went wrong');
            })

        console.log(id)
    }



















  render() {

    const isLoaded = this.state.isLoaded;
    let list;

        if(isLoaded) {

            const data = this.state.data;

            console.log('ffffffffffff', data)

            list = data.map(ele => {

                console.log(ele)

                return (

                    
                <div className="row justify-content-center mt-3" key={ele.id}>


                    <div className="col-3"> 
                        Name : {ele.name}
                    </div>

                    <div className="col-3"> 
                        Email : {ele.email}
                    </div>

                    <div className="col-3"> 
                        Salary : {ele.salary}
                    </div>

                    <div className="col-1"> 
                        <img src="https://img.icons8.com/flat_round/64/000000/delete-sign.png" style={{width : '25px'}} 
                        
                            onClick={() => {this.delete(ele.id)}}
                        />
                    </div>

                </div>

                )
            })

            
        }



    return (


        <div>

           <h1 className="text-center"> View </h1>


            <div className="container card mt-5 pb-5 shadow border border-light">

                {list ? list : 'no data'}

            </div>

        </div>

    )


  }//End of render methods


}//End of class




export default View;