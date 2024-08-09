import React from "react";
class SuccessComponent extends React.Component {
    render(){
        return(
            <div>
                <h2>Login Success..</h2>
            </div>
        )
    }
}

class ErrorComponent extends React.Component {
    render(){
        return(
            <div>
                <h2> Invalid Login ..</h2>
            </div>
        )
    }
}
export default class LifeCycleDemo extends React.Component 
{
    constructor(props){
        super(props);
        this.state = {
            userDetails :{
                UserName: 'admin',
                Password: 'admin'
            },
            formDetails :{
                UserName: '',
                Password: ''
            },
            result : ''
            };
        
        this.handleUserName = this.handleUserName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }



    handleUserName(event){
        this.setState({
            UserName: event.target.value,
            Password : this.state.formDetails.Password
        })
    }
    handlePassword(event){
        this.setState({
            UserName: this.state.formDetails.UserName,
            Password : event.target.value
        })
    }
    render(){
        return(
            <div>
                <dl>
                    <dt>UserName</dt>
                    <dd><input type="text"></input></dd>
                    <dt>password</dt>
                    <dd><input type="password"></input></dd>
                </dl>
                <button>Login</button>
            </div>
        )
    }
}