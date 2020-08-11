import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateUser extends Component {

  constructor(props) {
    super(props)

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeBio = this.onChangeBio.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      bio: '',
      date:''
    };
  }

  onChangeFirstName(e) {
    this.setState({firstname: e.target.value})
  }

  onChangeLastName(e) {
    this.setState({lastname: e.target.value})
  }

  onChangeEmail(e) {
    this.setState({email: e.target.value})
  }

  onChangeBio(e) {
    this.setState({bio: e.target.value})
  }

  onChangeDate(e) {
    this.setState({
        date: e.target.value
    });
}

  onSubmit(e) {
    e.preventDefault()

    const userObject = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        bio: this.state.bio,
        date:this.state.date
      };
      axios.post('http://localhost:4000/user/create-user', userObject)
        .then(res => console.log(res.data));

    this.setState({firstname: '',lastname: '', email: '', bio: '', date: ''})
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="FirstName">
          <Form.Label>First-Name</Form.Label>
          <Form.Control type="text" value={this.state.firstname} onChange={this.onChangeFirstName} required/>
        </Form.Group>

        <Form.Group controlId="LastName">
          <Form.Label>Last-Name</Form.Label>
          <Form.Control type="text" value={this.state.lastname} onChange={this.onChangeLastName} required/>
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeEmail} required/>
        </Form.Group>

        <Form.Group controlId="Bio">
          <Form.Label>Short-Bio</Form.Label>
          <Form.Control type="text" value={this.state.bio} onChange={this.onChangeBio} required/>
        </Form.Group>

        <Form.Group controlId="Date">
          <Form.Label>DOB</Form.Label>
          <Form.Control type="date" value={this.state.date} onChange={this.onChangeDate} required/>
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Create User
        </Button>
      </Form>
    </div>);
  }
}