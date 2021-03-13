import './App.css';
import React from 'react';
import Header from "./component/Header/Header";
import Nav from "./component/Nav/Nav";
import Footer from "./component/Footer/Footer";
import Main from "./component/Main/Main";

class App extends React.Component{

        render() {
            return (
                <div className='container'>
                    <Header />
                    <Nav />
                    <Main />
                    {/*<Aside />*/}
                    <Footer />
                </div>
            )
        }

}

export default App