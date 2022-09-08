import React from 'react';
import Like from './likes';
const MoviesTable = (props) => {
    const{allMovies,onDelete,onSort}=props
   return (<table className="table-fixed bg-blue-100  w-4/4 mt-14">
    <thead>
    <tr>
    <th onClick={()=>onSort('name')} className="px-4 py-2 text-emerald-600 text-sm">name</th>
    <th onClick={()=>onSort('publication_date')} className="px-4 py-2 text-emerald-600 text-sm">publication_date</th>
    <th onClick={()=>onSort('genre')} className="px-4 py-2 text-emerald-600 text-sm">genre</th>
    <th onClick={()=>onSort('super_actor')} className="px-4 py-2 text-emerald-600 text-sm">super_actor</th>
    <th className="px-4 py-2 text-emerald-600 text-sm"></th>
    <th className="px-2 py-2 text-emerald-600 text-sm"></th>
    </tr>
    </thead>
<tbody>
    {allMovies.map(movie=>
    <tr key={movie._id}className="border border-emerald-500 px-4 py-2 text-sm text-gray-800">
        <td className='pl-2'>{movie.name}</td>
        <td className='pl-4'>{movie.publication_date}</td>
        <td className='pl-4'>{movie.genre.name}</td>
        <td className='pl-4'>{movie.super_actor}</td>
        <td className='flex justify-between'>
            <Like liked={true} />
            <button onClick={()=>onDelete(movie)} className=" bg-green-400 px-8  hover:bg-red-300 py-2 text-indigo font-medium rounded">delete</button>
        </td>
    </tr>)}
</tbody>
</table> );
}

export default MoviesTable;