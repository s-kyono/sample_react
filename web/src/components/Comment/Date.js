import React from "react";

function formatDate(date)
{
  console.log(date)
  if(!date){
    return new Date();
  }
  return date;
}

function Date({date}) {
  return (
    <div className="Comment-date">
      {formatDate(date)}
    </div>
  );
}

export default Date;
