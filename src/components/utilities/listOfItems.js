import React from 'react'
const ListGroup=({items,onSelecting,onSelectItem})=>{

return <React.Fragment>
<ul className='pt-11 border-gray-600 border-b-4 rounded-lg '>
{items.map(item=>
<li className= {item===onSelectItem ?"bg-blue-400 py-2 px-4 w-full rounded-t-lg":"py-2 px-4 bg-white   w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600 hover:bg-blue-100"} onClick={()=>onSelecting(item)}>{item}</li>)}
</ul>
</React.Fragment>
}
export default ListGroup;

