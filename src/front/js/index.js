//import react into the bundle
import React from 'react';
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&family=Snippet&display=swap');
</style>