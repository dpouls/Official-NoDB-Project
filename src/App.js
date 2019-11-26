import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import PuppyCards from './components/PuppyCards'
import Inputs from './components/Inputs'
import axios from 'axios';
import Leads from './components/Leads'


class App extends Component {
  constructor(){
    super();
    this.state = {
      puppyData: []
    }
    this.sellPuppy = this.sellPuppy.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.editPuppy = this.editPuppy.bind(this)
  }
  componentDidMount(){
    axios.get('/pup/puppers').then( res => {
      this.setState({
        puppyData: res.data
      })
    }) ;
  }
  sellPuppy(id){
    axios.delete(`/pup/puppers/${id}`).then(res => {
      this.setState({puppyData: res.data})
    })
  }
  editPuppy(id, body){
    axios.put(`/pup/puppers/${id}`, body).then(res => {
      this.setState({
        puppyData: res.data
      })
    })
  }
  render(){
  return (
    <div className="App">
      <Header />
      <section id='allCards'>
      {this.state.puppyData.map((element) =>
      <PuppyCards 
      gender={element.gender}
      collar={element.collar}
      availability={element.availability}
      image={element.imgUrl}
      id={element.id}
      sellPuppyFn={this.sellPuppy}
      editPuppyFn={this.editPuppy}
      />
      )}
      </section>
      <Inputs id="inputs" refreshFn={this.componentDidMount} />
      <Leads />
      <footer></footer>
    </div>
  );
}
}
export default App;