import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Solutions", href: "#solutions" },
    { label: "Insights", href: "#insights" },
    // { label: "Pricing", href: "#pricing" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 bg-gradient-to-r from-background/80 from-85% to-[#E4D7FF]/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between sm:px-12 px-4 py-2">
        {/* Logo and Navigation */}
        <div className="flex items-center space-x-12">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-md bg-primary"></div>
            <span className="text-xl font-bold">Tinder</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Section with Gradient */}
        <div className="hidden md:flex items-center space-x-4 relative">
          <div className="relative flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="border border-primary rounded-full"
            >
              Contact Us
            </Button>
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 rounded-full"
            >
              Try For Free
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <div className="container px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 space-y-2">
              <Button variant="ghost" size="sm" className="w-full">
                Contact Sales
              </Button>
              <Button
                size="sm"
                className="w-full bg-primary hover:bg-primary/90"
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
