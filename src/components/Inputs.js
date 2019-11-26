import React, {Component} from 'react'
import axios from 'axios'
class Inputs extends Component {
    constructor(){
        super();
        this.state = {
            gender: '',
            collar: '',
            availability: '',
            imgUrl: ''
        }
        // this.inputHandler = this.inputHandler.bind(this)
        // this.addPuppy = this.addPuppy.bind(this)
    }

    
    inputHandler(e){
        this.setState({ [e.target.name]: e.target.value})
        
    }

    addPuppy(){
        axios.post('/pup/puppers', this.state).then(res => {
          this.setState({
            puppyData: res.data
          })
          this.resetForm()
          this.props.refreshFn()
        })
      }
    resetForm(){
        document.getElementById("puppyForm").reset()

    }
    render(){
        return (
            <section>
                 <form id='puppyForm'>
                    <input className='inputs' name='gender' placeholder='gender' type="text" onChange={e => this.inputHandler(e)}/>
                    <input className='inputs' name='collar' placeholder='collar' type="text" onChange={e => this.inputHandler(e)}/>
                    <input className='inputs' name='availability' placeholder='availability' type="text" onChange={e => this.inputHandler(e)}/>
                    <input className='inputs' name='imgUrl' placeholder='img url' type="text" onChange={e => this.inputHandler(e)}/>
                    <button className="buttons" id='addButton' onClick={() => this.addPuppy()}>ADD PUPPY</button>
                </form>
            </section>
        )
    }
}
export default Inputs