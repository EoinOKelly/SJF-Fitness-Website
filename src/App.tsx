import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { BookPage } from './pages/BookPage'
import { TestimonialsPage } from './pages/TestimonialsPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="book" element={<BookPage />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          <Route path="blog" element={<Navigate to="/testimonials" replace />} />
          <Route path="blog/:slug" element={<Navigate to="/testimonials" replace />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
