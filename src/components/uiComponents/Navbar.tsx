import { Handbag, Menu, MoveRight } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        {/* Logo */}
        <div className="text-xl font-bold">
            <img src="/images/Group.png" alt="" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          <li className="cursor-pointer hover:text-gray-600">Home</li>
          <li className="cursor-pointer hover:text-gray-600">Services</li>
          <li className="cursor-pointer hover:text-gray-600">Contact</li>
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="icon" className="bg-gray-300">
            <Handbag className="h-5 w-5 text-black" />
          </Button>
          <Button>Checkout <MoveRight className="ml-2 inline-block text-[#bf95d3]" /></Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-3">
          {/* Cart Icon */}
          <Button variant="outline" size="icon">
            <Handbag className="h-5 w-5" />
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-64">
              <ul className="mt-8 flex flex-col gap-6 text-lg">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">Services</li>
                <li className="cursor-pointer">Contact</li>
                <Button className="mt-4 w-full">Checkout <MoveRight className="ml-2 inline-block text-[#bf95d3]" /></Button>
              </ul>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </nav>
  )
}
