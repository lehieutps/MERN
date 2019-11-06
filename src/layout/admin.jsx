import React from "react";
import Header from '../components/Header/header';
import axios from 'axios';
import Login from "../views/Login";

class Admin extends React.Component {
  users = [];
  constructor(props) {
    super(props);
    var url = 'http://localhost:57000/';
    axios.get(url)
    .then((ambilData) => {
      this.users =  ambilData.data;
      console.log(this.users);
    });
  }

  render() {
    return (
      <>
        <Header />
       <div>admin work</div>
        <Login />
      </>
    );
  }
}
export default Admin;
