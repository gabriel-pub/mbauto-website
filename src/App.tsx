import { Layout } from "@/Layout"
import { Routes, Route } from "react-router-dom"
import { Home } from "@/pages/home"
import { ServiceDetail } from "@/pages/service-details"

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
      </Route>
    </Routes>
  )
}

export default App
