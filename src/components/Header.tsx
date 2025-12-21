import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground p-4 shadow-md flex items-center justify-between">
      <Link to="/" className="flex items-center space-x-2">
        <Home className="h-6 w-6" />
        <h1 className="text-xl font-bold">SkillCraft LittleBuilders</h1>
      </Link>
      {/* You can add more navigation items here if needed */}
    </header>
  );
};

export default Header;