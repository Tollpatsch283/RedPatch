import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store'
import './index.css'

import App from './App'
import HomePage from './pages/Homepage.jsx'
import SubredditPage from './pages/SubredditPage'
import PostPage from './pages/PostPage.jsx'
import SearchPage from './pages/SearchPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import AboutPage from './pages/AboutPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="r/:subredditName" element={<SubredditPage />} />
            <Route path="post/:postId" element={<PostPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
)