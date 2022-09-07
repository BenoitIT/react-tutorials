import React from 'react';
import lodash from 'lodash'
const Pagenating=(movies,pageNumber,pageSize)=>{
 const startIndex=(pageNumber-1)*pageSize;
 return lodash(movies).slice(startIndex).take(pageNumber).value();
}
export default Pagenating;