import * as React from "react"
import { Menu, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"

type MenuItem = {
  title: string
  href?: string
  submenu?: MenuItem[]
}

const menuItems: MenuItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  {
    title: "Services",
    submenu: [
      { title: "Oil Change", href: "/services/oil-change" },
      { title: "Brake Service", href: "/services/brake-service" },
      { title: "Vehicle OBD", href: "/services/vehicle-obd" },
      { title: "Air Conditioning", href: "/services/air-conditioning" },
      { title: "Vehicle Up Keeping", href: "/services/vehicle-up-keeping" },
      { title: "Spray painting", href: "/services/spray-painting" },
    ],
  },
  { title: "Contact", href: "/contact" },
]

const MenuItemComponent: React.FC<{
  item: MenuItem
  depth?: number
  onSelect: () => void
}> = ({ item, depth = 0, onSelect }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  if (item.submenu) {
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <button
            className={cn(
              "flex w-full items-center justify-between py-2 text-lg font-medium transition-colors hover:text-primary",
              depth > 0 && "pl-4"
            )}
          >
            {item.title}
            {isOpen ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          {item.submenu.map((subItem) => (
            // Sneaky recursive call
            // jumps to line 75
            <MenuItemComponent
              key={subItem.title}
              item={subItem}
              depth={depth + 1}
              onSelect={onSelect}
            />
          ))}
        </CollapsibleContent>
      </Collapsible>
    )
  }

  return (
    <Link
      to={item.href || "#"}
      className={cn(
        "block py-2 text-lg font-medium transition-colors hover:text-primary",
        depth > 0 && "pl-4",
        item.href === "/" && "text-primary"
      )}
      onClick={onSelect}
    >
      {item.title}
    </Link>
  )
}

export default function HamburgerMenu() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[240px] sm:w-[300px]">
        <nav className="flex flex-col space-y-4">
          {menuItems.map((item) => (
            <MenuItemComponent
              key={item.title}
              item={item}
              onSelect={() => setOpen(false)}
            />
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
