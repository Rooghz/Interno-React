import React from 'react';
import Banner from './Props/Banner';
import Banner5 from '../Assets/Banner5.jpg';

function Blog() {
    return (
        <div>
            <div >
                <Banner name="Blog" des="Home / Blog" img={Banner5} />
            </div>
        </div>
    );
}

export default Blog;