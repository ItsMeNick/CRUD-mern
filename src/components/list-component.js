import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import UserTableRow from './userTableRow';
import Button from 'react-bootstrap/Button';


export default class UserList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      users: [],
      user:{},
      search: ''
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/user/')
      .then(res => {
        this.setState({
          users: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  

  searchSpace(e){
    this.setState({search:e.target.value})
  }
  
  dynamicSearch=()=>{
    return this.state.users.filter(firstname => firstname.includes(this.state.search.toLocaleLowerCase()))
  }

  

  DataTable() {
    return this.state.users.map((res, i) => {
      return <UserTableRow obj={res} key={i} />;
    });
  }
  
  render() {
    return (<div className="table-wrapper">
      <div><input type="text" placeholder="SearchBox" value={this.state.search} onChange={(e)=>this.searchSpace(e)}/><Button type="submit">Search</Button></div>
      <Table striped bordered hover >
        <thead>
          <tr>
            <th>First-Name</th>
            <th>Last-Name</th>
            <th>Email</th>
            <th>Short-Bio</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody >
        
    {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}