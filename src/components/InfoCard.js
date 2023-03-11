import React from 'react';

import './InfoCard.css'

class InfoCard extends React.Component
{
    render()
    {
        return (
            <div className="infocard" data-color={this.props.img_color}>
                <img src={this.props.src} alt={this.props.alt} className="infocard_icon"/>
                <div className="infocard_text">
                    <h1 className="infocard_title" style={{"color" : this.props.title_color}}>{this.props.title}</h1>
                    <p className="infocard_description">{this.props.description}</p>
                </div>
            </div>
        );
    }
}

export default InfoCard;