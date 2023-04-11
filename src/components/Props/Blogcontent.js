import React from 'react';

function Blogcontent(props) {
    return (
        <div className="blog-container">
            <div className='blog-wrap'>
                <img className="blog-image" src={props.image} alt="blog" />
                <div className="blog-info mt-6">
                    <div className='blog-name'>
                        <h3>{props.name}</h3>
                    </div>
                    <div className="flex des-blog">
                        <p>{props.description}</p>
                        <button><img src={props.btn} alt="button" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blogcontent;
