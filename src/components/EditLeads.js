import React, {Component} from 'react'

class EditLeads extends Component {
    constructor(props){
        super(props);
        this.state = {
            toggleEdit: false,
            newName: '',
            newPhone: '',
        }
        this.save = this.save.bind(this)
        this.handleName = this.handleName.bind(this)
        this.handlePhone = this.handlePhone.bind(this)
}
save(){
    this.props.editLeadFn(this.props.id, {newName: this.state.newName || this.props.name,
    newPhone: this.state.newPhone || this.props.phone})
    this.toggleEdit()
}
toggleEdit(){
    this.setState({
        toggleEdit: !this.state.toggleEdit
    })
}
handleName(val){
    this.setState({newName: val})
}
handlePhone(val){
    this.setState({newPhone: val})
}
render(){
    return (
        <section id='lead-info-container'>
        <h3 className='leadInfo'>Name: {this.state.toggleEdit ? 
            <section> 
                <input className='leadInputs' onChange={(e) => this.handleName(e.target.value)} name='newName' type="text"/>                      
            </section> : this.props.name}</h3>
        <h3 className='leadInfo'>Phone: {this.state.toggleEdit ? 
            <section id='phone-save-container'> 
                <input className='leadInputs' onChange={(e) => this.handlePhone(e.target.value)}name='newPhone' type="text"/>
                <button className="leadButtons" onClick={() => this.save()}>Save</button>                     
            </section> : this.props.phone}</h3>
        <button className="leadButtons" onClick={() => this.toggleEdit()}>Edit</button>
        <button className="leadButtons" onClick={() => this.props.deleteLeadFn(this.props.id)}>Delete</button>
    </section>
    )
}
}
export default EditLeads