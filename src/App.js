import React from 'react';
import './App.css';
import Bitcoin from './Components/Bitcoin';
import Litecoin from './Components/Litecoin'
import Bcash from './Components/Bcash'
import Ripple from './Components/Ripple';
import Ethereum from './Components/Ethereum';

function App() {
  return (
    <div className="App">
        <div>
            <div className="container">
                <div className="row center quadro">

                    {/* Adding Bitcoin Component */}
                    <div className="card-moeda">
                    <Bitcoin></Bitcoin>
                    </div>

                    {/* Adding Bcash Component */}
                    <div className="card-moeda">
                        <Bcash></Bcash>                        
                    </div>

                    {/* Adding Bcash Component */}
                    <div className="card-moeda">
                        <Litecoin></Litecoin>
                    </div>
                
                    {/* Adding Bcash Component */}
                    <div className="card-moeda">
                        <Ripple></Ripple>
                    </div>

                    {/* Adding Bcash Component */}
                    <div className="card-moeda">
                        <Ethereum></Ethereum>
                    </div>

                    {/*Coins End*/}
                </div>
            </div>   
        </div>      
    </div>
  );
}

export default App;
