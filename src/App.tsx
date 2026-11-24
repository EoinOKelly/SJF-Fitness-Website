import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { HomePage } from './pages/HomePage'
import { TestimonialsPage } from './pages/TestimonialsPage'
import { ContactPage } from './pages/ContactPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="book" element={<Navigate to="/contact" replace />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="blog" element={<Navigate to="/testimonials" replace />} />
        <Route path="blog/:slug" element={<Navigate to="/testimonials" replace />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

export function App() {
  return <BrowserRouter><AppRoutes /></BrowserRouter>
}
