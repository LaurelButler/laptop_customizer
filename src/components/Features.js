import React from 'react';

class Features extends React.Component {
    render () {
        const summary = Object.keys(this.props.icecream)
            .map(key => <div className="summary__option" key={key}>
                <div className="summary__option__label">{key}  </div>
                <div className="summary__option__value">{this.props.icecream[key].name}</div>
                <div className="summary__option__cost">
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                        .format(this.props.icecream[key].cost)}
                </div>
                </div>
            )
        const total = Object.keys(this.props.icecream)
            .reduce((acc, curr) => acc + this.props.icecream[curr].cost, 0);

        return (
            <section className="main__summary">
            <h3>NEW GREENLEAF 2018</h3>
            <div className="summary__total">
                <div className="summary__total__label">Your Price: </div>
                <div className="summary__total__value">
                    {summary}
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                        .format(total)}    
                </div>     
            </div>
            </section>
        );
    };
}

export default Features;