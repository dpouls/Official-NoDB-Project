import React, {Component} from 'react'
import Edit from './/Edit'
class PuppyCards extends Component{
    constructor(props){
        super(props)
        this.state = {
           toggleChangeAv: false,
           newAvailability: ''
        }
        this.saveButton = this.saveButton.bind(this)
        this.handleInput = this.handleInput.bind(this)
    }
    handleInput(val){
        this.setState({
            newAvailability: val
        })
    }
    toggleEdit(){
        this.setState({toggleChangeAv: !this.state.toggleChangeAv})
    }
    saveButton(){
        this.props.editPuppyFn(this.props.id, {changedAv: this.state.newAvailability || this.props.availability})
        this.toggleEdit()
    }
    render (){
        return (
            <section id="puppyCards-container">
                <section className='puppyCards' id='puppy0'>
                    <img className='images' src={this.props.image} alt='puppy'/>
                    </section>
                    <section id='edit-sold-buttons'>
                    <button className='buttons' onClick={() => this.toggleEdit()}>EDIT</button>
                    <button className='buttons' onClick={() => this.props.sellPuppyFn(this.props.id)}>SOLD</button>
                    </section>
                    <section className='puppyData-container'>
                        <p className='gender'>Gender: {this.props.gender}</p>
                        <p className='collar'>Collar Color: {this.props.collar}</p>
                        <p className='availability'> {this.state.toggleChangeAv ? (<Edit handleInputFn={this.handleInput} saveButtonFn={this.saveButton} />
                        ) : `Availability Date: ${this.props.availability}`}</p>
                </section>
                
            </section>
        )
    }
}
export default PuppyCards