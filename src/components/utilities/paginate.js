import React from 'react';
import _ from 'lodash'
const Pagenating=(movies,pageNumber,pageSize)=>{
 const startIndex=(pageNumber-1)*pageSize;
  return _(movies).slice(startIndex).take(pageSize).value();
}
export default Pagenating;