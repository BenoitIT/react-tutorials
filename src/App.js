
import './App.css';
import {Counters} from './components/counters';
import NavBar from './components/navBar';
import Movies from './components/moviesPage';
import React, { Component } from 'react';

class App extends Component {
  state = {
    counters:[
        {_id:1,value:0},
        {_id:2,value:0},
        {_id:3,value:0},
        {_id:4,value:0}]
 }
 handleDelete=(counterId)=>{
 const counters=this.state.counters.filter(co=>co._id!==counterId);
 this.setState({counters});
 };
 handleReset=()=>{
    const counters=this.state.counters.map(co=>{
        co.value=0
        return co
    })

        this.setState({counters})
 };
 handleIncrement=(counter)=>{
    const counters=[...this.state.counters]
    const index=counters.indexOf(counter)
    counters[index]={...counter};
    counters[index].value++;
    this.setState({counters})
 }
 render(){
  const{counters}=this.state;
  return (
<React.Fragment>
<NavBar numberings={counters.filter(cou=>cou.value>0 ).length}/>
<main className='container flex justify-between'>
  <div>
  <Counters onReset={this.handleReset} onDeleting={this.handleDelete} onIncrement={this.handleIncrement} counters={counters}/>
  </div>
  <div >
  <Movies/>

  </div>
</main>
</React.Fragment>
  );
}}

export default App;
