import React, { Component } from 'react'
import {Counter} from './counter'
export class Counters extends Component {
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
     }
     handleReset=()=>{
        const counters=this.state.counters.map(co=>{
            co.value=0
            return co
        })

            this.setState({counters})
     }
     handleIncrement=(counter)=>{
        const counters=[...this.state.counters]
        const index=counters.indexOf(counter)
        counters[index]={...counter};
        counters[index].value++;
        this.setState({counters})
     }
    render() {

        return (
            <React.Fragment>
                <button onClick={this.handleReset} className="bg-blue-400 text-white px-4 py-2 m-10 font-bold">Reset</button>
               {this.state.counters.map(counter=><p className='p-5'><Counter key={counter._id} onDelete={()=>this.handleDelete(counter._id)} onIncrement={()=>this.handleIncrement(counter)} value={counter.value} counter={counter}/></p>)}
            </React.Fragment>
        );
    }
}

