import React from "react";
import './Blog.css';
import firstBlog from "../../../Images/ourBlog-first.jpg";
import secondBlog from "../../../Images/ourBlog-second.jpg";
import thirdBlog from "../../../Images/ourBlog-third.jpg";
import Jenefer from "../../../Images/ourBlog-Jenefer.jpg";
import Konal from "../../../Images/ourBlog-Konal.jpg";
import woman from "../../../Images/firstCarouswomen.png";
import { BsChatText } from "react-icons/bs";

function Blog() {
    return(
<div className="home-blog">
    <div className="blog-container">
        <h4 className="blog-subhead">Our Blog</h4>
        <h2 className="blog-head">Latest News & Update</h2>
        <p className="blog-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
    </div>

    <div className="blog-cards">
        <div className="blog-card">
            <img src={firstBlog} className="first-blog-img" alt="Blog Post 1" />
            <h2 className="first-blog-head"><a href="#">Giving The Poor Is A Great Satisfaction Of heart.</a></h2>
            <div className="blog-card-second-container">
                <img src={Jenefer} className="Jenefer" alt="Jenefer Willy" />
                <p><a href="#">Jenefer Willy</a></p>
                <p className="chat-icon">< BsChatText /> 35</p>
            </div>
        </div>

        <div className="blog-card">
            <img src={secondBlog} className="first-blog-img" alt="Blog Post 2" />
            <h2 className="first-blog-head"><a href="#">Your Help Can Make Someone’s life Easier.</a></h2>
            <div className="blog-card-second-container">
                <img src={Konal} className="Konal" alt="Konal Biry" />
                <p><a href="#">Konal Biry</a></p>
                <p className="chat-icon"> <BsChatText />  80 </p>
            </div>
        </div>

        <div className="blog-card">
            <img src={thirdBlog} className="first-blog-img" alt="Blog Post 3" />
            <h2 className="first-blog-head"><a href="#">Give Education, It’s The Best Gift Ever.</a></h2>
            <div className="blog-card-second-container">
                <img src={woman} className="Willy" alt="Jenefer Willy" />
                <p><a href="#">Jenefer Willy</a></p>
                <p className="chat-icon"> <BsChatText />  95</p>
            </div>
        </div>
    </div>
</div>

    );
}

export default Blog;