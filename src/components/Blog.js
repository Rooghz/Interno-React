import React from 'react';
import Banner from './Props/Banner';
import Banner5 from '../Assets/Banner5.jpg';
import Bsi1 from '../Assets/bsi1.jpg';
import Bsi2 from '../Assets/bsi2.jpg';
import Bsi3 from '../Assets/bsi3.jpg';
import Bsi4 from '../Assets/bsi4.jpg';
import Bsi5 from '../Assets/bsi5.jpg';
import Bsi6 from '../Assets/bsi6.jpg';
import Vector from '../Assets/bt.svg';
import Blogcontent from './Props/Blogcontent';
import Blog1 from '../Assets/Blog-1.jpg';
import bt from '../Assets/bt.svg';

function Blog() {
    return (
        <div>
            <div >
                <Banner name="Articles & News" des="Home / Blog" img={Banner5} />
            </div>
            <div>
                <div className='Blog-sec-1'>
                    <span>Latest Post</span>
                    <div className='flex flex-row B-S-1-1 mt-10'>
                        <img src={Bsi1} alt="img" />
                        <div className='B-S-1-2'>
                            <span>Low Cost Latest Invented Interior Designing Ideas</span>
                            <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus. posuere in. Contrary to popular belief.

                                <br />
                                <br />

                                Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>
                            <div className='flex flex-row B-S-1-3'>
                                <span>26 December, 2022 </span>
                                <img src={Vector} alt="vector" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Blog-sec-2'>
                    <span>Articles & News</span>
                    <div className='flex justify-between mt-10'>
                        <div>
                            <Blogcontent
                                image={Blog1}
                                name="Let’s Get Solution For Building Construction Work"
                                description="26 December, 2022"
                                btn={bt}
                            />
                            <Blogcontent
                                image={Bsi2}
                                name="Low Cost Latest Invented Interior Designing
                                Ideas."
                                description="22 December, 2022"
                                btn={bt}
                            />

                        </div>
                        <div>
                            <Blogcontent
                                image={Bsi3}
                                name="Best For Any Office & Business Interior 
                                Solution"
                                description="25 December, 2022"
                                btn={bt}
                            />
                            <Blogcontent
                                image={Bsi4}
                                name="Let’s Get Solution For Building Construction Work"
                                description="26 December, 2022"
                                btn={bt}
                            />
                        </div>
                        <div>

                            <Blogcontent
                                image={Bsi5}
                                name="Low Cost Latest Invented Interior Designing Ideas"
                                description="22 December, 2022"
                                btn={bt}
                            />
                            <Blogcontent
                                image={Bsi6}
                                name="Best For Any Office & Business Interior Solution"
                                description="25 December, 2022"
                                btn={bt}
                            />
                        </div>
                    </div>
                </div>
                <div className='Project-sec-3 blog-3'>
                    <div className='Project-sec-3-1'><span>01</span></div>
                    <div className='Project-sec-3-2'><span>02</span></div>
                    <div className='Project-sec-3-2'><span>03</span></div>
                    <div><img src={Vector} alt="bt" /></div>
                </div>
            </div>
        </div>
    );
}

export default Blog;