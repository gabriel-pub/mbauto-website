import { Navbar } from "@/components/layout/navbar"
import { Outlet } from "react-router-dom"
import { Footer } from "@/components/layout/footer"

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
