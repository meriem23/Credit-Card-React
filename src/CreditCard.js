import React, { Component } from "react";

class CreditCard extends Component {
    state = {
        name: 'Eren Yager',
        number: '123456789',
        date: '1123',
    };
    nameChange(n) {
        this.setState({
            name: n.target.value
        });
    }
    numberChange(c) {
        this.setState({
            number: c.target.value
        });
    }
    dateChange(d) {
        this.setState({
            date: d.target.value
        });
    }
    render() {
        return (
            <div class="panel">
                <div class="card">
                    <h2 className='cardName'>Free Money</h2>
                    <img className='cardChip' src='https://cdn.iconscout.com/icon/premium/png-512-thumb/credit-card-chip-1522262-1288452.png' />
                    <div className="cardNumber">{this.state.number.padEnd(16, '*').replace(/(.{4})/g, "$1 ")}</div>
                    <div className="cardExpiryDate">{this.state.date.padEnd(4, '*').replace(/(.{2})/, "$1 / ")}</div>
                    <div className="cardOwner">{this.state.name.toUpperCase()}</div>
                    <img className="cardLogo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png" />
                </div>
                <div className="creditForm">
                    <input type="text" maxLength="20" placeholder="Owner's Name" onChange={this.nameChange.bind(this)} />
                    <input type="text" maxLength="16" placeholder="Card's Number" onChange={this.numberChange.bind(this)} />
                    <input type="text" maxLength="4" placeholder="Expiration Date" onChange={this.dateChange.bind(this)} />
                </div>
            </div>
        );
    }
}
export default CreditCard;