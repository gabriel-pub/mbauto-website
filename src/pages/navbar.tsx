// import { HamburgerMenu } from "@/components/layout/hamburger"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

export function Navbar() {
  const { i18n } = useTranslation()
  const currentLang = i18n.resolvedLanguage ?? "en"
  const nextLang = currentLang === "en" ? "zh" : "en"
  const buttonLabel = currentLang === "en" ? "中文" : "en"

  const handleToggle = async () => {
    try {
      await i18n.changeLanguage(nextLang)
    } catch (error) {
      console.error("Error occured while changing language:", error)
    }
  }

  return (
    <nav className="bg-background/80 sticky top-0 z-50 flex justify-between bg-gray-800 backdrop-blur">
      <Link to={"/"}>
        <h1 className="flex-auto p-4 text-2xl font-bold">
          <Home color="white" />
        </h1>
      </Link>
      {/* NOTE: Disable hamburger menu for now
      <div className="p-4">
        <HamburgerMenu color="white" />
      </div>*/}
      <Button className="text-white" onClick={handleToggle}>
        {buttonLabel}
      </Button>
    </nav>
  )
}
