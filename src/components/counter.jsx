
import React,{ Component } from "react";
export class Counter extends Component{

render(){
    let classes = this.getClass();
return <React.Fragment>
    <div className="flex justify-between">
    <span className={classes}>{this.stateformat()}</span>
    <button onClick={this.props.onIncrement}className="bg-blue-400 rounded text-white font-bold ml-8 h-6 px-5 hover:bg-sky-200 text-gray ">increment</button>
    <button onClick={()=>this.props.onDelete(this.props.id)} className="bg-green-400 text-white h-6 px-5 ml-10 font-bold">Delete</button>
   </div>

</React.Fragment>;
    }
    getClass () {
        let classes = "";
        if (this.props.counter.value === 0)
            classes = "font-bold ml-4 px-5  text-white bg-red-200";
        else {
            classes = "font-bold ml-4 px-5  text-white bg-red-200 bg-green-300";
        }
        return classes;
    }

    stateformat(){
    return this.props.counter.value===0?'zero':this.props.counter.value
    }
}
