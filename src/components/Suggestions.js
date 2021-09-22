import React from "react";

const Suggestions = ({onsuggesthandler, suggestion}) => {
  return (
    <div
      onClick={() => onsuggesthandler(suggestion.email)}
     
      className=" suggestions col-md-12 justify-content-md-center "
    >
      {suggestion.email}
    </div>
  );
};

export default Suggestions;
