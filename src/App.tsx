import { BrowserRouter } from "react-router-dom"
import HamburgerMenu from "@/components/layout/hamburger"

export function App() {
  return (
    <BrowserRouter>
      <div className="sticky top-0 z-50 flex justify-between bg-background/80 backdrop-blur">
        <h1 className="p-4 text-2xl">MB AUTO</h1>
        <div className="p-4">
          <HamburgerMenu />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
