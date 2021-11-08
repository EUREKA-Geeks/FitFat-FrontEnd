
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from "../Register/SignUp"
// import UserService from '../Services/UserService';
// const USER_REST_API_URL = "http://localhost:8080/user/users";

class UserComponent extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //      users:[]
    //     };
    // }
    // componentDidMount = () => {
    //     this.getUsers();
    // }
    
    // getUsers = async () => {
    //     let Url = `http://localhost:8080/user/users`;
    //     let addData = await axios.get(Url);
    //     // console.log('added data: ', addData.data);
      
    //       this.setState({
    //         users: addData.data
    //     })
    //     console.log('added data: ',addData.data );
    
    // }
    // //   constructor(props) {
    //     super(props);
    //     this.state = {
    //         FavData: [],
    //         selected: {},
    //         show: false
    //     }
    // }
    // // server.get('/getFav',getFav);
    // componentDidMount = () => {
    //     this.getFav();
    // }
    // getFav = async () => {
    //     let email = this.props.auth0.user.email;
    //     let Url = `${process.env.REACT_APP_SERVER}/getFav?email=${email}`;
    //     let addData = await axios.get(Url);
    //     // console.log('added data: ', addData.data);
    //     this.setState({
    //         FavData: addData.data
    //     })
    // }
  render() {
    return(
 
    <div>
        {/* {
        this.state.users.map((item, key)=> {
            return ( <p key = {key}>
                
            users username : {item.username}
            </p>)
        })} */}
        <SignUp />
    </div>
    )
  }
}

export default UserComponent;