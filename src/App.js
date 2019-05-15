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
            <body>
                <div class="container">
                    <div class="row center quadro">
                    
                        <div class="card-moeda">
                        <Bitcoin></Bitcoin>
                        </div>

                        <div class="card-moeda">
                            <Bcash></Bcash>                        
                        </div>

                        <div class="card-moeda">
                            <Litecoin></Litecoin>
                        </div>
                    
                        <div class="card-moeda">
                            <Ripple></Ripple>
                        </div>
                        <div class="card-moeda">
                            <Ethereum></Ethereum>
                        </div>
                        </div>
                </div>     
            </body>
          </div>      
    </div>
  );
}

export default App;
