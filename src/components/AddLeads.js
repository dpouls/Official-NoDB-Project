import React, {Component} from 'react'
import axios from 'axios'

class AddLeads extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            phone: '',
        }
    }
    inputHandler(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    addLead(req,res){
        axios.post('/pup/leads', this.state).then(res => {
            this.setState({
                leadData: res.data
            })
            this.resetForm()
            this.props.refreshFn();
        }).catch(err => res.status(500).send(err))
    }
    resetForm(){
        document.getElementById("myForm").reset()
       
    }
    render(){
        return (
            <section id="addLeadContainer">
                <form id="myForm" name='myForm'>
                <input  className='leadInputs'  placeholder="Name" type="text" name="name" onChange={e => this.inputHandler(e)}/>
                <input className='leadInputs' id='addLeadPhone' placeholder="Phone Number" type="text" name="phone" onChange={e => this.inputHandler(e)}/>
                </form>
                <button className="leadButtons" onClick={() => this.addLead()}>Add Lead</button>
            </section>
        )
    }
}

export default AddLeads