import React from 'react';

function AboutPage(){
    return (
        <div style={aboutContainer}>
            <div style={aboutStyles}>
                <h1 style={aboutTitle}>About Us</h1>
                <hr />
                <p>
                <strong style={greenFont}>Calen Task</strong> started in a very un-cool way. The idea started when some
                random introvert was making sales calls and going door-to-door to 
                trying to sell products. Sounds, highly unlikely right. But here’s the the 
                the thing. It isn’t.</p>
                <p>
                There are actually plenty of introverts in sales. Some of them actually
                outperform the extroverts. My reason for getting into sales is that my
                lack of communication was causing me problems in both my perfessional
                and personal life. I knew I had to improve my communication skills or I 
                would go through life always getting the short end of the stick.</p>
                <p>
                That was my goal for spending 2 years in sales even tough I was a more 
                scientifically minded person. I wanted the ability to communicate well to
                the people I wanted to communcate with. Pretty simple. Unfortunatly, I
                didn’t have much success in sales. But what I did succeed at is being able 
                to commicate with the people I wanted to and learning to see the world 
                emotionally from the perspectives of others.</p>
                <p>
                During my time as a salesman. I came across a few recurring problems. 
                Scheduling my day properly, keeping track of people I met, and knowing 
                what actions to prioritze. <strong style={{color: '#63A583'}}>Calen Task</strong> is my solution to those problems. 
                Using my greatest talent. My scientific skills.</p>
            </div>
        </div>
    )
}

const greenFont = {
    color: '#63A583'
}

const aboutContainer = {
    width: '75%',
    height: '0'
}

const aboutTitle = {
    textAlign: 'center',
    color: '#63A583'
}

const aboutStyles = {
    backgroundColor: 'white',
    borderRadius: '10px',
    color: '#2C5DBE',
    fontSize: '22px',
    left: '14rem',
    margin: '15px',
    padding: '35px',
    position: 'relative',
    textAlign: 'left',
    top: '7rem'
}

export default AboutPage