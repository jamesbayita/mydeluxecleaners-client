import React from 'react';
import NavBar from '../other/NavBar';
import NavMenu from '../other/NavMenu'
import Footer from '../other/Footer';
import image from '../../img/windy.jpg'
import imageTwo from '../../img/shirts.jpg'

class About extends React.Component{
    render(){
        return(
            <div className="Home-Wrapper">
                <NavBar />
                <NavMenu />
                <div className="about_us_wrapper">
                    <div className="about_header">
                        <div className="header_container">
                            <h2>About Us</h2>
                        </div>
                        <div className="header_image_container">
                            <div className="imageContainer">
                                <img src={image} alt="about us"/>
                            </div>
                        </div>
                    </div>
                    <div className="content_container_about">
                        <div className="content_layout_container">
                            <p>Mailchimp is an all-in-one Marketing Platform for small business. We empower millions of customers around the world to start and grow their businesses with our smart marketing technology, award-winning support, and inspiring content. Founded in 2001 and headquartered in Atlanta with additional offices in Brooklyn, Oakland, and Vancouver, Mailchimp is 100% founder-owned and highly profitable.</p>
                        </div>
                    </div>
                    <div className="content_container_about">
                        <div className="section_two">
                            <h2 className="section_two_heading">Founder story</h2>
                            <p className="paragraph_one p_one">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla ipsa vero at, culpa sit neque dolor suscipit quaerat quisquam officia consequatur illum odit voluptas obcaecati voluptates, voluptatibus molestias, excepturi accusamus?</p>
                            <p className="paragraph_two p_one">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla ipsa vero at, culpa sit neque dolor suscipit quaerat quisquam officia consequatur illum odit voluptas obcaecati voluptates, voluptatibus molestias, excepturi accusamus?</p>
                            <div className="imageContainer_about">
                                <img src={imageTwo} alt="About Us Two"/>
                            </div>
                            <p className="paragraph_three p_one">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cumque libero molestias quod id ipsum nesciunt dignissimos non accusamus labore dolores hic aliquam totam beatae, iusto, voluptatem facere itaque in?</p>
                            <p className="paragraph_four p_one">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sequi harum eum necessitatibus fugiat maxime dicta hic quibusdam velit quisquam, veritatis rem porro fuga sit. Minus eos voluptates rerum doloribus.</p>
                        </div>
                        <div className="section_two">
                            <h2 className="section_three_heading">Our mission</h2>
                            <p className="paragraph_five p_one">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eos cum est, natus aut maiores tempore sunt fugit similique animi libero officiis earum aperiam voluptates sequi fugiat, inventore laboriosam alias.</p>
                            <p className="paragraph_six p_one">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptates laboriosam et quos quam labore ut, repellendus consequatur aut qui doloribus. Nulla impedit voluptatibus iure voluptas atque rem? Totam, in?</p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default About;