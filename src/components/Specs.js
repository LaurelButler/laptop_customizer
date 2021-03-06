import React from 'react';

class Specs extends React.Component {
    render() {
        // because i renamed the props in my app.js file, i had to refactor everything here calling for the state to a prop
        //followed by the name of that prop
        const features = Object.keys(this.props.cookies)
            .map(key => {
                const options = this.props.cookies[key].map((item, index) => {
                    const selectedClass = item.name === this.props.selected[key].name ? 'feature__selected' : '';
                    const featureClass = 'feature__option ' + selectedClass;
                    return <li key={index} className="feature__item">
                        <div className={featureClass}

                            onClick={e => this.props.pizza(key, item)}>
                            {item.name}
                            ({new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                                .format(item.cost)})
                </div>
                    </li>
                });

                return (<div className="feature" key={key}>
                    <div className="feature__name">{key}</div>
                    <ul className="feature__list">
                        {options}
                    </ul>
                </div>)
            });      
    return (
        <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            {features}
            </section>
            
    );
    }
}

export default Specs;