import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="homepage outlet">
      <h1>Welcome to RedPatch</h1>

      <p>
        This Reddit client is currently under construction. The goal of this
        project is to build a fully functional, modern web application for
        browsing Reddit content using React, Redux Toolkit, and React Router.
      </p>

      <p>
        While the core structure of the application is in place, additional
        features and improvements are actively being developed and will be added
        over time.
      </p>

      <h2>Planned Features</h2>
      <ul>
        <li>Browse a feed of popular Reddit posts</li>
        <li>Select and view posts from specific subreddits</li>
        <li>Search for subreddits and display their content</li>
        <li>View individual posts and their details</li>
        <li>Improved UI and responsive design</li>
      </ul>

      <h2>Getting Started</h2>
      <p>
        You can begin exploring by selecting a subreddit from the sidebar, or by
        navigating through the app using the links above.
      </p>

      <p>
        This page will eventually be replaced with a dynamic feed of posts once
        data fetching and state management are fully implemented.
      </p>

      <p>
        Want to learn more about the project? Visit the{' '}
        <Link to="/about">About page</Link>.
      </p>
    </div>
  )
}

export default HomePage