import React, {Component} from 'react'

class Edit extends Component {
    render(){
        return (
            <section id='edit-save'>
                <input className='editInput' placeholder="Availability" onChange={(e) => this.props.handleInputFn(e.target.value)} type="text"/>
                <button className='saveButtons' onClick={() => this.props.saveButtonFn()}>Save</button>
            </section>

        )
    }
    
}

export default Edit 