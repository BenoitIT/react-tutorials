import React from 'react'
import lodash from 'lodash'
const Pagination=(Props)=>{

 const {moviesNumber,pageNumber,pageClick,ThecurrentPage}=Props;
 const pageCount=Math.ceil(moviesNumber/pageNumber);
 if(pageCount===1)return null;
 const Pages=lodash.range(1,pageCount);

return<React.Fragment>
    <div className='border-orange-300 border-2 px-2 w-[20rem] h-8 bg-orange-400 rounded-lg'>
       { Pages.map(p=><button key={p} onClick={()=>pageClick(p)} className={p===ThecurrentPage ?'bg-white  border-2 rounded-lg px-2 font-bold hover:bg-white text-blue-300':'border-orange-300 border-2 rounded-lg px-2 font-bold hover:bg-white text-blue-300'}>{p}</button>)}
       <span><button className='text-white font-bold pl-4 hover:text-blue-300 rounded-md'>Next</button></span></div>

    </React.Fragment>
    }

export default Pagination;