import { Component } from "react";
class User extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <center>
                <h2>Class</h2>
                <table border={2}>
                      <thead>
                          <tr>
                            <td>Grid</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Password</td>
                            <td>Course</td>
                            <td>City</td>
                          </tr>
                      </thead>

                      {
                         this.props.record.map((val)=>{
                              return(
                                 <tbody>
                                    <tr>
                                        <td>{val.grid}</td>
                                        <td>{val.name}</td>
                                        <td>{val.email}</td>
                                        <td>{val.password}</td>
                                        <td>{val.course.join(',  ')}</td>
                                        <td>{val.city}</td>
                                    </tr>
                                 </tbody>
                              )
                         })
                      }
                </table>
            </center>
        )
    }
}
export default User;