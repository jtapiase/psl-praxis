import React, { Component } from 'react';
import './VillianOverview.css';

class VillianOverview extends Component {
    render() {
        return (<div className='villian-overview-container'>
            <img src={this.props.image} alt={this.props.name} />
            <h2>{this.props.name}</h2>
            <p className='villian-overview-text'>{this.props.overview}</p>
            <a href={this.props.link}>More info..</a>
        </div>);
    }
}

export default VillianOverview;