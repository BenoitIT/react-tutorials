import React from 'react'

const Pagination=(Props)=>{

 const {moviesNumber,pageNumber,pageClick,ThecurrentPage}=Props;
 const pageCount=Math.ceil(moviesNumber/pageNumber);
 const pages=[];
 if(pageCount===1)return null;
 else if(pageCount<1)return <span className='p-5 text-sm'>No matching records found</span>
for(let i=1;i<=pageCount;i++)
  pages.push(i);
return<React.Fragment>
    <div className='border-orange-300 border-2 px-2 w-[20rem] h-8 bg-blue-400 rounded-lg'>
       { pages.map(p=><button key={p} onClick={()=>pageClick(p)} className={p===ThecurrentPage ?'bg-white  border-2 rounded-lg px-2 font-bold hover:bg-white text-blue-300':'border-orange-300 border-2 rounded-lg px-2 font-bold hover:bg-white text-white-300'}>{p}</button>)}
       <span><button className='text-white font-bold pl-4 hover:text-blue-300 rounded-md'>Next</button></span></div>

    </React.Fragment>
    }

export default Pagination;