import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,
    Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

   //校验方法
    validate(firstname, lastname, telnum, email) {

        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
        };

        if (this.state.touched.firstname && firstname.length < 3)
            errors.firstname = 'First Name should be >= 3 characters';
        else if (this.state.touched.firstname && firstname.length > 10)
            errors.firstname = 'First Name should be <= 10 characters';

        if (this.state.touched.lastname && lastname.length < 3)
            errors.lastname = 'Last Name should be >= 3 characters';
        else if (this.state.touched.lastname && lastname.length > 10)
            errors.lastname = 'Last Name should be <= 10 characters';

        const reg = /^\d+$/;
        if (this.state.touched.telnum && !reg.test(telnum))
            errors.telnum = 'Tel. Number should contain only numbers';

        if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Email should contain a @';

        return errors;
    }

    //输入框失焦 判断
    handleBlur = (field) => (evt) => {
        this.setState({
          touched: { ...this.state.touched, [field]: true },
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {

        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);

        return(
            <div className="row row-content">
            <div className="col-12">
               <h3>Send us your Feedback</h3>
            </div>
             <div className="col-12 col-md-9">
                 <Form onSubmit={this.handleSubmit}>
                 <FormGroup row>
                 <Label htmlFor="firstname" md={2}>First Name</Label>
                 <Col md={10}>
                     <Input type="text" id="firstname" name="firstname"
                         placeholder="First Name"
                         value={this.state.firstname}
                        //  当验证通过时 框体为有效（绿色
                         valid={errors.firstname === ''}
                        //  未通过验证 框体无效（红色
                         invalid={errors.firstname !== ''}
                         onBlur={this.handleBlur('firstname')}
                         onChange={this.handleInputChange} />
                     <FormFeedback>{errors.firstname}</FormFeedback>
                 </Col>
             </FormGroup>
             <FormGroup row>
                 <Label htmlFor="lastname" md={2}>Last Name</Label>
                 <Col md={10}>
                     <Input type="text" id="lastname" name="lastname"
                         placeholder="Last Name"
                         value={this.state.lastname}
                         valid={errors.lastname === ''}
                         invalid={errors.lastname !== ''}
                         onBlur={this.handleBlur('lastname')}
                         onChange={this.handleInputChange} />
                     <FormFeedback>{errors.lastname}</FormFeedback>
                 </Col>
             </FormGroup>
             <FormGroup row>
                 <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                 <Col md={10}>
                     <Input type="tel" id="telnum" name="telnum"
                         placeholder="Tel. Number"
                         value={this.state.telnum}
                         valid={errors.telnum === ''}
                         invalid={errors.telnum !== ''}
                         onBlur={this.handleBlur('telnum')}
                         onChange={this.handleInputChange} />
                     <FormFeedback>{errors.telnum}</FormFeedback>
                 </Col>
             </FormGroup>
             <FormGroup row>
                 <Label htmlFor="email" md={2}>Email</Label>
                 <Col md={10}>
                     <Input type="email" id="email" name="email"
                         placeholder="Email"
                         value={this.state.email}
                         valid={errors.email === ''}
                         invalid={errors.email !== ''}
                         onBlur={this.handleBlur('email')}
                         onChange={this.handleInputChange} />
                     <FormFeedback>{errors.email}</FormFeedback>
                 </Col>
             </FormGroup>
                 </Form>
             </div>
        </div>
        );
    }
}

export default Contact;