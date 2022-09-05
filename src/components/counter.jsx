
import React,{ Component } from "react";
export class Counter extends Component{

render(){
    let classes = this.getClass();
return <React.Fragment>
    <span className={classes}>{this.stateformat()}</span>
    <button onClick={this.props.onIncrement}className="bg-blue-400 rounded text-white font-bold ml-8 p-5 hover:bg-sky-200 text-gray ">increment</button>
    <button onClick={()=>this.props.onDelete(this.props.id)} className="bg-red-400 text-white py-3 px-4 ml-5 font-bold">Delete</button>


</React.Fragment>;
    }
    getClass () {
        let classes = "";
        if (this.props.counter.value === 0)
            classes = "font-bold ml-4 p-5 mt-10 text-white bg-red-200";
        else {
            classes = "font-bold ml-4 p-5 mt-10 text-white bg-red-200 bg-green-300";
        }
        return classes;
    }

    stateformat(){
    return this.props.counter.value===0?'zero':this.props.counter.value
    }
}
