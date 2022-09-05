import React, {Component } from 'react';
 class NavBar extends Component {

render() {
        return<React.Fragment>
                <nav class="bg-gray-800">
        <div className='flex h-16 justify-between pt-3'>
     <div> <span className=' text-white font-bold text-xl'>Countings</span><span className='bg-orange-400 font-bold text-white rounded px-2'>{this.props.numberings}</span></div>
    <div  className='pt-5'>
     <button className='text-white pr-6 font-bold'>Home</button>
      <button className='text-white pr-6 font-bold'>Project</button>
      <button className='text-white pr-6 font-bold'>Teams</button>
      </div>
      </div>
</nav>
            </React.Fragment>

    }}

    export default  NavBar ;

