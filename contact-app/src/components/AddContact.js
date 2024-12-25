import React, { Component } from "react";
//TO SEND SOMETHING FROM CHILD TO PARENT USE PROPS AS A FUNCTION (here it is addContactHandler)
class AddContact extends React.Component{

    state = {
        name : "",
        email : ""
    }

    add = (e)=>{
        e.preventDefault();//this will disable the page to get refreshed when submission is done
        if(this.state.name==="" || this.state.email==="")
            {alert("All feilds are Mandatory!!")
            return}
        
        this.props.addContactHandler(this.state)
        this.setState({name:"",email:""})
    }
//In React, render() is a lifecycle method used in class components. It determines what the component will display on the screen by returning React elements (usually JSX).
    render(){
        return(
            <div className="ui main" style={{ marginTop: '60px' }}>
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name"
                         value={this.state.name}
                         onChange={(e)=>this.setState({name : e.target.value})}>
                        </input>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="your email"
                         value={this.state.email}
                         onChange={(e)=>this.setState({email : e.target.value})}>
                        </input>
                    </div>
                    <button className="ui button red">Add</button>
                </form>    
            </div>
        );
    }
}

export default AddContact
//onChange={(e)=>this.setState({name : e.target.value})} used to store changed name in setState