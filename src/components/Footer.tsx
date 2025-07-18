const Footer = () => {
  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Solutions", href: "#solutions" },
    { label: "Insights", href: "#insights" },
    // { label: "Pricing", href: "#pricing" },
  ];

  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-md bg-primary"></div>
            <span className="text-xl font-bold">Tinder</span>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-6 order-last md:order-none">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tinder. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
