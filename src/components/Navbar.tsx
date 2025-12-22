import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, BookOpen, Heart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", icon: Home, path: "/" },
    { name: "Library", icon: BookOpen, path: "/library" },
    { name: "Favorites", icon: Heart, path: "/favorites" },
    { name: "Progress", icon: TrendingUp, path: "/progress" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg z-50">
      <div className="container mx-auto flex justify-around items-center h-16">
        {navItems.map((item) => (
          <Link to={item.path} key={item.name} className="flex-1">
            <Button
              variant="ghost"
              className={cn(
                "w-full h-full flex flex-col items-center justify-center text-muted-foreground",
                location.pathname === item.path && "text-brand-primary font-bold"
              )}
            >
              <item.icon className="h-6 w-6 mb-1" />
              <span className="text-xs">{item.name}</span>
            </Button>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;