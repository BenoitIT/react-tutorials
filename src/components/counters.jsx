import React, { Component } from 'react'
import {Counter} from './counter'
export class Counters extends Component {

    render() {

        return (
            <React.Fragment>
                <button onClick={this.props.onReset} className="bg-blue-400 text-white px-4 py-2 m-10 font-bold">Reset</button>
               {this.props.counters.map(counter=><li key={counter._id} className='p-2 list-none'><Counter onDelete={()=>this.props.onDeleting(counter._id)} onIncrement={()=>this.props.onIncrement(counter)} value={counter.value} counter={counter} /></li>)}
            </React.Fragment>
        );
    }
}

