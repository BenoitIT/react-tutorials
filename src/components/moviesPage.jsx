import React, { Component } from 'react';
import { getMovies } from './backendData';
import Pagination from './pagination';
import Paginating from './utilities/paginate';
import ListGroup from './utilities/listOfItems';
import MoviesTable from './moviesTable';

class Movies extends Component {
    state={
        movies:getMovies(),
        pageSize:2,
        currentPage:1,
        selectedtem:0,
        items:['action','romance','social','All']
    }
    handleDelete=movie=>{
        const movies=this.state.movies.filter(m=>m._id!==movie._id);
        this.setState({movies});
    }
 changePage=page=>{
    this.setState({currentPage:page})

}
 onSelecting=(item)=>{
 this.setState({selectedtem:item,currentPage:1});
 }
    render() {

        const {movies:allMovies,currentPage,pageSize,selectedtem}= this.state;
         const filtered= selectedtem && selectedtem!='All'?
         allMovies.filter(mov=>mov.genre.name===selectedtem):allMovies;

        const moviesAll=Paginating(filtered,currentPage,pageSize);

        return<React.Fragment>
            <div className='flex pt-11'>
            <ListGroup  onSelectItem={selectedtem} onSelecting={this.onSelecting} items={this.state.items} selectedData={this.displaySelected}/>
        <div>
            {filtered.length===0? null:
            <p className="pl-8 text-sm text-gray-500">showing {filtered.length} movies from database</p>}
          <MoviesTable allMovies={moviesAll} onDelete={this.handleDelete}/>
        <Pagination moviesNumber={filtered.length} pageNumber={pageSize} pageClick={this.changePage} ThecurrentPage={currentPage}/>
        </div>
        </div>
        </React.Fragment>

    }
}

export default Movies ;