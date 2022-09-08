import React, { Component } from 'react';
import { getMovies } from './backendData';
import Pagination from './pagination';
import Paginating from './utilities/paginate';
import ListGroup from './utilities/listOfItems';

class Movies extends Component {
    state={
        movies:getMovies(),
        pageSize:2,
        currentPage:1,
        selectedtem:0,
        items:['action','romance','social']
    }
    handleDelete=movie=>{
        const movies=this.state.movies.filter(m=>m._id!==movie._id);
        this.setState({movies});
    }
 changePage=page=>{
    this.setState({currentPage:page})

}
 onSelecting=(item)=>{
 this.setState({selectedtem:item});
 }
    render() {

        const {movies:allMovies,currentPage,pageSize,selectedtem}= this.state;
         const filtered= selectedtem?
         allMovies.filter(mov=>mov.genre.name===selectedtem):allMovies;
        const moviesAll=Paginating(filtered,currentPage,pageSize);

        return<React.Fragment>
            <div className='flex pt-11'>
            <ListGroup  onSelectItem={selectedtem} onSelecting={this.onSelecting} items={this.state.items} selectedData={this.displaySelected}/>
        <div>
            {filtered.length===0? null:
            <p className="pl-8 text-sm text-gray-500">showing {filtered.length} movies from database</p>}
            <table className="table-fixed bg-blue-100  w-4/4 mt-14">

                <th className="px-4 py-2 text-emerald-600 text-sm">name</th>
                <th className="px-4 py-2 text-emerald-600 text-sm">publication_date</th>
                <th className="px-4 py-2 text-emerald-600 text-sm">genre</th>
                <th className="px-4 py-2 text-emerald-600 text-sm">super_actor</th>
                <th className="px-4 py-2 text-emerald-600 text-sm"></th>
                <th className="px-2 py-2 text-emerald-600 text-sm"></th>

            <tbody>
                {moviesAll.map(movie=>
                <tr key={movie._id}className="border border-emerald-500 px-4 py-2 text-sm text-gray-800">
                    <td className='pl-2'>{movie.name}</td>
                    <td className='pl-4'>{movie.publication_date}</td>
                    <td className='pl-4'>{movie.genre.name}</td>
                    <td className='pl-4'>{movie.super_actor}</td>
                    <span className='flex justify-between'><button  onClick={()=>this.handleDelete(movie)} className=" bg-green-400 px-8  hover:bg-red-300 py-2 text-indigo font-medium rounded">delete</button>
                    <button  className=" bg-blue-400 px-8 hover:bg-green-300  py-2 ml-2 text-indigo font-medium rounded">update</button></span>
                </tr>)}
            </tbody>
        </table>
        <Pagination moviesNumber={filtered.length} pageNumber={pageSize} pageClick={this.changePage} ThecurrentPage={currentPage}/>
        </div>
        </div>
        </React.Fragment>

    }
}

export default Movies ;