import React, {Component} from 'react';
import $ from 'jquery';
import 'jquery-mask-plugin';
import RippleLogo from '../img/Ripple.png'

// Coin -- Component -- Ajax {API--}
// Bitcoin, Litecoin
export default class Ripple extends Component{
    constructor(){
        super();
        this.state ={
            buy: '',
            sell: '',
            high: '',
            low: '',
            vol: '',
            last: '',
            date: ''
        }
    }

    componentDidMount(){
       
        setInterval(() => {
          $.ajax({
            url: "https://cors-anywhere.herokuapp.com/https://www.mercadobitcoin.net/api/xrp/ticker/",
            dataType: 'json',
            success:function (res) {               
                
                this.setState({buy: res.ticker.buy,
                sell: res.ticker.sell,
                high: res.ticker.high,
                low: res.ticker.low,
                vol: res.ticker.vol,
                last: res.ticker.last,
                date: res.ticker.date});
              }.bind(this)
          })
          
        },3000)
         
    }
    render(){
        return(
            <div>
                <div class="card oi" >
                <div class="card-body">
                
                    <div class="card-title">
                    <img src={RippleLogo} class="coinlogo rounded"/>
                    <h5>Ripple</h5>
                    <h5>
                    {
                        'R$ ' + Number(this.state.last).toLocaleString('de-DE', {maximumFractionDigits: 2, minimumFractionDigits:2})
                    } 
                    </h5>
                    </div>
                    <table className="table table-hover"> 
                <thead className="thead-dark">
                <tr>
                    <th scope="col">Operation</th>
                    <th scope="col">Price</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>
                            {
                                'Buy'
                            }
                        </th>
                        <th>
                            {
                                'R$ ' + Number(this.state.buy).toLocaleString('de-DE', {maximumFractionDigits: 2, minimumFractionDigits:2})
                            }
                        </th>
                    </tr>
                    <tr>
                        <th>
                            {
                                'Sell'
                            }
                        </th>
                        <th>
                            {
                                'R$ ' + Number(this.state.sell).toLocaleString('de-DE', {maximumFractionDigits: 2, minimumFractionDigits:2})
                            }
                        </th>
                    </tr>
                    <tr>
                        <th>
                            {
                                'High'
                            }
                        </th>
                        <th>
                            {
                                'R$ ' + Number(this.state.high).toLocaleString('de-DE', {maximumFractionDigits: 2, minimumFractionDigits:2})
                            }
                        </th>
                    </tr>
                    <tr>
                        <th>
                            {
                                'Low'
                            }
                        </th>
                        <th>
                            {
                                'R$ ' + Number(this.state.low).toLocaleString('de-DE', {maximumFractionDigits: 2, minimumFractionDigits:2})
                            }
                        </th>
                    </tr>
                </tbody>
                </table>
                </div>
                </div>

           
            </div>
        )
    }
}