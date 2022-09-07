import React, { Component } from 'react';
import { getMovies } from './backendData';
import Pagination from './pagination';
import Paginating from './utilities/paginate'

class Movies extends Component {
    state={
        movies:getMovies(),
        pageSize:1,
        currentPage:1
    }
    handleDelete=movie=>{
        const movies=this.state.movies.filter(m=>m._id!==movie._id);
        this.setState({movies});
    }
 changePage=(page)=>{
    this.setState({currentPage:page})

 }
    render() {
        const moviesAll=Paginating(this.state.movies,this.state.currentPage,this.state.pageSize);

        return<React.Fragment>
            <div className='flex pt-11'>
            <ul className='pt-11 border-gray-600 border-b-4 rounded-lg '>
    <li className="py-2 px-4 bg-white   w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600 hover:bg-blue-100">action</li>
    <li className="py-2 px-4   bg-white w-full border-b border-gray-200 dark:border-gray-600 hover:bg-blue-100">social</li>
    <li className="py-2 px-4  w-full border-b border-gray-200 dark:border-gray-600  hover:bg-blue-100">romance</li>
        </ul>
        <div>
            {this.state.movies.length===0?<p className="ml-10 text-green-400 font-bold">there are no movies in database</p>:
            <p className="mt-12 text-green-400 ">there are {this.state.movies.length} movies in database</p>}
            <table className="table-fixed bg-blue-100  w-4/4 mt-14">

                <th class="px-4 py-2 text-emerald-600">name</th>
                <th className="px-4 py-2 text-emerald-600">publication_date</th>
                <th className="px-4 py-2 text-emerald-600">genre</th>
                <th className="px-4 py-2 text-emerald-600">super_actor</th>
                <th className="px-4 py-2 text-emerald-600"></th>
                <th className="px-2 py-2 text-emerald-600"></th>

            <tbody>
                {moviesAll.map(movie=>
                <tr key={movie._id}className="border border-emerald-500 px-4 py-2  text-gray-900">
                    <td>{movie.name}</td>
                    <td>{movie.publication_date}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.super_actor}</td>
                    <span className='flex justify-between'><button  onClick={()=>this.handleDelete(movie)} className=" bg-green-400 px-8  hover:bg-red-300 py-2 text-indigo font-medium rounded">delete</button>
                    <button  className=" bg-blue-400 px-8 hover:bg-green-300  py-2 ml-2 text-indigo font-medium rounded">update</button></span>
                </tr>)}
            </tbody>
        </table>
        <Pagination moviesNumber={this.state.movies.length} pageNumber={this.state.pageSize} pageClick={this.changePage} ThecurrentPage={this.state.currentPage}/>
        </div>
        </div>
        </React.Fragment>

    }
}

export default Movies ;