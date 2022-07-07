import React from "react";
import "../styles/spinner.css";
const Spinner = () => {
  return (
    // <div className="spinner-border text-primary" role="status">
    //   <span className="visually-hidden">Loading...</span>
    // </div>
    <div className="loader">
      <img src="https://images.unsplash.com/photo-1603827457577-609e6f42a45e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2l2ZSUyMGF3YXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="//"/>
    </div>
  );
};

export default Spinner;