import React from 'react';
const MoviesTable = (props) => {
    const{allMovies,onDelete}=props
   return (<table className="table-fixed bg-blue-100  w-4/4 mt-14">
    <th className="px-4 py-2 text-emerald-600 text-sm">name</th>
    <th className="px-4 py-2 text-emerald-600 text-sm">publication_date</th>
    <th className="px-4 py-2 text-emerald-600 text-sm">genre</th>
    <th className="px-4 py-2 text-emerald-600 text-sm">super_actor</th>
    <th className="px-4 py-2 text-emerald-600 text-sm"></th>
    <th className="px-2 py-2 text-emerald-600 text-sm"></th>

<tbody>
    {allMovies.map(movie=>
    <tr key={movie._id}className="border border-emerald-500 px-4 py-2 text-sm text-gray-800">
        <td className='pl-2'>{movie.name}</td>
        <td className='pl-4'>{movie.publication_date}</td>
        <td className='pl-4'>{movie.genre.name}</td>
        <td className='pl-4'>{movie.super_actor}</td>
        <span className='flex justify-between'><button onClick={()=>onDelete(movie)} className=" bg-green-400 px-8  hover:bg-red-300 py-2 text-indigo font-medium rounded">delete</button>
        <button  className=" bg-blue-400 px-6 hover:bg-green-300  py-2 ml-2 text-indigo font-medium rounded">update</button></span>
    </tr>)}
</tbody>
</table> );
}

export default MoviesTable;