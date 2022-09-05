import React, { Component } from 'react';
import { getMovies } from './backendData';
class Movies extends Component {
    state={
        movies:getMovies()
    }
    handleDelete=movie=>{
        const movies=this.state.movies.filter(m=>m._id!==movie._id);
        this.setState({movies});
    }
    render() {
        if(this.state.movies.length===0)return<p className="ml-10 text-green-400 font-bold">there are no movies in database</p>
        return<React.Fragment>
            <p className="ml-10 text-green-400 font-bold">there are {this.state.movies.length} movies in database</p>
            <table className="table-fixed bg-blue-100 m-10 w-2/4">
            <thead className='bg-green-100 '>
                <th class="px-4 py-2 text-emerald-600">name</th>
                <th className="px-4 py-2 text-emerald-600">publication_date</th>
                <th className="px-4 py-2 text-emerald-600">genre</th>
                <th className="px-4 py-2 text-emerald-600">super_actor</th>
                <th className="px-4 py-2 text-emerald-600"></th>
                <th className="px-2 py-2 text-emerald-600"></th>
            </thead>
            <tbody>
                {this.state.movies.map(movie=>
                <tr key={movie._id}className="border border-emerald-500 px-4 py-2 text-indigo font-medium">
                    <td>{movie.name}</td>
                    <td>{movie.publication_date}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.super_actor}</td>
                    <div className='flex justify-between'><button  onClick={()=>this.handleDelete(movie)} className=" bg-green-400 px-8  hover:bg-red-300 py-2 text-indigo font-medium rounded">delete</button>
                    <button  className=" bg-blue-400 px-8 hover:bg-green-300  py-2 ml-2 text-indigo font-medium rounded">update</button></div>
                </tr>)}
            </tbody>
        </table>;
        </React.Fragment>

    }
}

export default Movies ;