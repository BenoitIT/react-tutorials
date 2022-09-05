import React, { Component } from 'react'
import {Counter} from './counter'
export class Counters extends Component {

    render() {

        return (
            <React.Fragment>
                <button onClick={this.props.onReset} className="bg-blue-400 text-white px-4 py-2 m-10 font-bold">Reset</button>
               {this.props.counters.map(counter=><p className='p-3'><Counter key={counter._id} onDelete={()=>this.props.onDeleting(counter._id)} onIncrement={()=>this.props.onIncrement(counter)} value={counter.value} counter={counter} /></p>)}
            </React.Fragment>
        );
    }
}

