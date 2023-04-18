import React from 'react';

function Project(props) {
    return (
        <div className="project-container">
            <img className="project-image" src={props.image} alt={props.name} />
            <div className="project-info flex mt-6">
                <div>
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                </div>
                <div className="ml-36 btw">
                    <a href="/project"><img src={props.buttonText} alt="button" /></a>
                </div>
            </div>
        </div>
    );
}

export default Project;
