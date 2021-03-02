import './App.css';
import React from 'react';
import Header from "./component/Header/Header";
import Nav from "./component/Nav/Nav";
import Footer from "./component/Footer/Footer";
import Main from "./component/Main/Main";
import Aside from "./component/Aside/Aside";
import {addDetail} from "./redux/stata";


const App = (props) => {
  return (
      <div className='container'>
          <Header />
          <Nav />
          <Main props = {props.props} addDetail={addDetail} update = {props.update}/>
          <Aside />
          <Footer />
      </div>
  );
}





export default App;
