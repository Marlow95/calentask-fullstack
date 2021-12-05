import React from 'react';
import '../css/AboutPage.css'

function AboutPage(){
    return (
        <div className="page-container">
            <div className="page-div">
                <div className="article-container">
                    <article className="article-content">
                        <h1 className="about-title">About Us</h1>
                        <hr className="about-horizontal-rule"/>
                        <div className="swing-img-container">
                            <img className="swing-graphic" src="/images/swing.png" alt="swing" />
                        </div>
                        <p>
                            <strong style={greenFont}>Calen Task</strong> started in <strong>a very un-cool way</strong>. The idea started when 
                            <strong> some random introvert</strong> was making sales calls and going door-to-door to 
                            trying to sell products. Sounds, highly unlikely right. But here’s the the 
                            the thing. It isn’t.
                        </p>
                        <p>
                            There are actually plenty of introverts in sales. Some of them actually
                            outperform the extroverts. My reason for getting into sales is that my
                            lack of communication was causing me problems in both my perfessional
                            and personal life. I knew <strong>I had to improve my communication skills</strong> or I 
                            would go through life always getting the short end of the stick.
                        </p>
                        <p>
                            That was my goal for spending 2 years in sales even tough I was a more 
                            scientifically minded person. I wanted the ability to communicate well to
                            the people I wanted to communcate with. <strong>Pretty simple</strong>. Unfortunatly, I
                            didn’t have much success in sales. But what I did succeed at is being able 
                            to commicate with the people I wanted to and learning to see the world 
                            emotionally from the perspectives of others.
                        </p>
                        <p>
                            During my time as a salesman. <strong>I came across a few recurring problems</strong>. 
                            Scheduling my day properly, keeping track of people I met, and knowing 
                            what actions to prioritze. <strong style={greenFont}>Calen Task</strong> is my solution to those problems. 
                            Using my greatest talent. My scientific skills.
                        </p>
                        <div className="lamp-img-container">
                            <img className="lamp-graphic" src="/images/lamp.png" alt="lamp" />
                        </div>

                        <p>
                            <br />
                            <strong>
                            Thank You,
                            <br />
                            <br />
                            <br />
                            Marlow Collins
                            <br />
                            The Inventor of  Calen Task
                            </strong>
                        </p>
                    </article>
                </div>
            </div>
        </div>
    )
}

const greenFont = {
    color: '#63A583'
}


export default AboutPage