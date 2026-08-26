import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { HomePage } from './pages/HomePage'

const TestimonialsPage = lazy(() =>
  import('./pages/TestimonialsPage').then((module) => ({ default: module.TestimonialsPage })),
)
const ContactPage = lazy(() =>
  import('./pages/ContactPage').then((module) => ({ default: module.ContactPage })),
)

function PageLoading() {
  return (
    <div className="container-page flex min-h-[50vh] items-center justify-center" role="status">
      <span className="h-7 w-7 animate-spin rounded-full border-2 border-white/15 border-t-brand" />
      <span className="sr-only">Loading page</span>
    </div>
  )
}

export function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoading />}>
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
      </Suspense>
    </BrowserRouter>
  )
}
