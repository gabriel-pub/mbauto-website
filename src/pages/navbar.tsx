import { HamburgerMenu } from "@/components/layout/hamburger"
import { Home } from "lucide-react"
import { Link } from "react-router-dom"

export function Navbar() {
  return (
    <nav className="bg-background/80 sticky top-0 z-50 flex justify-between bg-gray-800 backdrop-blur">
      <Link to={"/"}>
        <h1 className="flex-auto p-4 text-2xl font-bold">
          <Home color="white" />
        </h1>
      </Link>
      <div className="p-4">
        <HamburgerMenu color="white" />
      </div>
    </nav>
  )
}
