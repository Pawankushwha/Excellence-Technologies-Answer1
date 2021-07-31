import { Component} from "react";
import axios from "axios";
import React from "react";
interface IState{
   response:any[];
}
interface IProps{

}

class Que extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state={
            response:[]
        }
    }

    componentDidMount(){
        
     axios.get(`https://reqres.in/api/users`)
        .then((posRes)=>{
            const{data}=posRes;  /*actual data*/
            this.setState({
                response:(data.data)
        })

        },(errRes)=>{
            console.log(errRes);
        })
    }
    render(){
        
        
        return(
            <React.Fragment>
           <table>
                <tr>
                    
                    <th>ID</th>
                    <th>Email</th>
                    <th>FIRST NAME</th> 
                    <th>LAST NAME</th>  
                </tr>
               {this.state.response.map((element:any)=>(
                    <tr>
                        <td>{element.id}</td>
                        <td>{element.email}</td>
                        <td>{element.first_name}</td>
                        <td>{element.last_name}</td>
                        
                    
                    </tr>
                    
               ))}
                
                </table>
                </React.Fragment>
        )
    }

};
export default Que;