import React, { Component } from 'react';
import { getMovies } from './backendData';
import Pagination from './pagination';
import Paginating from './utilities/paginate';
import ListGroup from './utilities/listOfItems';
import MoviesTable from './moviesTable';
import _ from 'lodash'

class Movies extends Component {
    state={
        movies:getMovies(),
        pageSize:2,
        currentPage:1,
        selectedtem:0,
        sortColumn:{path:'name',order:'asc'},
        items:[{_id:1,name:'action'},{_id:2,name:'romance'},{_id:3,name:'social'},{_id:4,name:'All movies'}]
    }
    handleDelete=movie=>{
        const movies=this.state.movies.filter(m=>m._id!==movie._id);
        this.setState({movies});
    }
 changePage=page=>{
    this.setState({currentPage:page})

}
 onSelecting=(item)=>{
 this.setState({selectedtem:item.name,currentPage:1});
 }
 handleSort=path=>{
    const sortColumn={...this.state.sortColumn};
    if(sortColumn.path===path)
    sortColumn.order=(sortColumn.order==='asc')?'desc':'asc';
    else{
        sortColumn.path=path;
        sortColumn.order='asc';
    }
 this.setState({sortColumn})
 }
    render() {

        const {movies:allMovies,currentPage,pageSize,selectedtem,sortColumn}= this.state;
         const filtered= selectedtem && selectedtem!='All movies'?
         allMovies.filter(mov=>mov.genre.name===selectedtem):allMovies;
         const sortedData=_.orderBy(filtered,[sortColumn.path],[sortColumn.order]);

        const moviesAll=Paginating(sortedData,currentPage,pageSize);

        return<React.Fragment>
            <div className='flex pt-11'>
            <ListGroup  onSelectItem={selectedtem} onSelecting={this.onSelecting} items={this.state.items} selectedData={this.displaySelected}/>
        <div>
            {filtered.length===0? null:
            <p className="pl-8 text-sm text-gray-500">showing {filtered.length} movies from database</p>}
          <MoviesTable allMovies={moviesAll} onDelete={this.handleDelete} onSort={this.handleSort}/>
        <Pagination moviesNumber={filtered.length} pageNumber={pageSize} pageClick={this.changePage} ThecurrentPage={currentPage}/>
        </div>
        </div>
        </React.Fragment>

    }
}

export default Movies ;