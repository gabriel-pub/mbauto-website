import { Layout } from "@/Layout"
import { Routes, Route } from "react-router-dom"
import { Home } from "@/pages/home"
import { ServiceDetail } from "@/pages/service-details"

import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

// Reference: https://stackoverflow.com/a/76451316/14841168
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
        </Route>
      </Routes>
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default App
