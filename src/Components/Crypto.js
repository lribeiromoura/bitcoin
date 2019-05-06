import React, {Component} from 'react';
import $ from 'jquery';


export default class Crypto extends Component{
    constructor(){
        super();
        this.state ={
            high: '',
            low: '',
            vol: '',
            last: '',
            buy: '',
            sell: '',
            date: '',
        }
    }

    componentDidMount(){
        $.ajax({
            url: 'https://www.mercadobitcoin.net/api/BTC/ticker/',
            
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            success: function(response){
                console.log(response);
            }
        })
    }
    render(){
        return(
            <div>
                <label id="high" name="high" value={this.state.high}></label>
            </div>
        )
    }
}