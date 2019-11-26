import React, {Component} from 'react'
import axios from 'axios';
import EditLeads from './EditLeads'
import AddLeads from './AddLeads'



class Leads extends Component {
    constructor(){
        super();
        this.state = {
            leadData: [],
        }
        this.componentDidMount = this.componentDidMount.bind(this)
        this.deleteLead = this.deleteLead.bind(this)
        this.editLead = this.editLead.bind(this)
        
    }
    

    //CRUD FUNCTIONS
    componentDidMount(req,res){
        axios.get('pup/leads').then( res => {
            this.setState({leadData: res.data})
        }).catch(err => res.status(500).send(err))
    }

    deleteLead(id,req,res){
        axios.delete(`/pup/leads/${id}`).then(res => {
            this.setState({
                leadData: res.data
            })
        }).catch(err => res.status(500).send(err))
    }
    editLead(id, body,req,res){
        axios.put(`/pup/leads/${id}`, body).then(res => {
            this.setState({
                leadData: res.data
            })
        }).catch(err => res.status(500).send(err))
    } 
    render (){
        return (
            <section id='leadsContainer'>
                <h1 id='leadHeader'>Leads</h1>
                {this.state.leadData.map((el) => 
                <EditLeads 
                editLeadFn={this.editLead}
                deleteLeadFn={this.deleteLead}
                name={el.name} 
                phone={el.phone}
                id={el.id}/>
                )}
                <AddLeads refreshFn={this.componentDidMount}/>
         
            </section>
            
        )
    }
}

export default Leads