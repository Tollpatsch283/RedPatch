import React from 'react'

function AboutPage() {
  return (
    <div className="about-page outlet">
      <h1>About RedPatch</h1>

      <p>
        RedPatch is a Reddit client application developed as the final project
        for the front-end portion of Codecademy’s Full-Stack Developer course.
        The goal of this project is to apply modern front-end development
        concepts in a real-world application by building a fully functional,
        interactive interface for browsing Reddit content.
      </p>

      <p>
        The application is built using a modern web development stack, including
        HTML, CSS, and JavaScript, with a focus on React.js for building dynamic
        user interfaces. Routing is handled using React Router, allowing users
        to navigate between different views without reloading the page. State
        management is implemented using Redux Toolkit, enabling efficient
        handling of application data and asynchronous API requests.
      </p>

      <p>
        RedPatch integrates with the Reddit JSON API to fetch and display
        real-time content from Reddit. The application presents posts within a
        structured React interface, providing users with a smooth and responsive
        browsing experience.
      </p>

      <h2>Features</h2>
      <ul>
        <li>Viewing a feed of Reddit posts</li>
        <li>Searching for specific subreddits</li>
        <li>Displaying posts from selected subreddits</li>
        <li>Viewing individual posts in detail</li>
      </ul>

      <p>
        The project is hosted on GitHub, where the source code is publicly
        available, and the live application is deployed on Netlify.
      </p>

      <p>
        This project serves as both a learning milestone and a portfolio piece,
        demonstrating proficiency in modern front-end technologies, API
        integration, and single-page application architecture.
      </p>
    </div>
  )
}

export default AboutPage