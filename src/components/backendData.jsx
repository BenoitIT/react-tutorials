
const movies=[
{
 _id:"1a223aa",
 name:"hitman part1",
 publication_date:"12-03-2015",
genre:{_id:"3ue2",name:"action"},
 super_actor:"jack chan"
},
{
    _id:"2a223aa",
    name:"hitman part2",
    publication_date:"12-04-2015",
   genre:{_id:"2ue2",name:"action"},
    super_actor:"jack chan"
   },
   {
    _id:"3a223aa",
    name:"hitman4",
    publication_date:"12-05-2015",
    genre:{_id:"4ue2",name:"action"},
    super_actor:"jack chan"
   },
   {
    _id:"4a223aa",
    name:"assassines",
    publication_date:"12-03-2015",
    genre:{_id:"3ue2",name:"action"},
    super_actor:"jason statham"
   },{
   _id:"56223aa",
   name:"avengers",
   publication_date:"12-03-2015",
  genre:{_id:"3ue2",name:"action"},
   super_actor:"jack chan"
  },
  {
      _id:"38223aa",
      name:"tue hustle",
      publication_date:"12-04-2015",
     genre:{_id:"78ue2",name:"social"},
      super_actor:"jack "
     },
     {
      _id:"377223aa",
      name:"hitgame",
      publication_date:"12-05-2015",
      genre:{_id:"89ue2",name:"social"},
      super_actor:"jack chan"
     },
     {
      _id:"4223aa",
      name:"the killer",
      publication_date:"12-03-2015",
      genre:{_id:"gye2",name:"love"},
      super_actor:"jason statham"
     }
];
export function getMovies(){
return movies
}