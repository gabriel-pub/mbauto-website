import { Navbar } from "@/pages/navbar"
import { Outlet } from "react-router-dom"
import { Footer } from "@/pages/footer"

export function Layout() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto grow p-4">
        {/* Reference for outlet component: https://stackoverflow.com/a/73573109/14841168 */}
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
