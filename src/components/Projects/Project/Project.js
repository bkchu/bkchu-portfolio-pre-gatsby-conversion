import React, { Component } from 'react';
import { connect } from 'react-redux';
import { projectModal } from '../../../redux/ducks/reducer';
import Techs from '../Techs/Techs';

class Project extends Component {
    render() {
        const {
            title,
            description,
            year,
            technologies,
            url,
            img,
            color
        } = this.props.project;

        return (
            <div key={title} className="Project">
                <div
                    style={{ background: color }}
                    className="Project__img-container"
                >
                    <img className="Project__img" src={img} alt={title} />
                </div>
                <h1
                    onClick={() => this.props.projectModal(this.props.project)}
                    className="Project__title"
                >
                    {title}
                </h1>
                <p className="Project__year">{year}</p>
                <a className="Project__link link" target="_blank" href={url}>
                    {url}
                </a>
                <p className="Project__description">{description}</p>
                <Techs techs={technologies} />
            </div>
        );
    }
}

export default connect(
    state => state,
    { projectModal }
)(Project);
