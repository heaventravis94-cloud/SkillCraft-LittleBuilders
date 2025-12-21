import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-brand-primary text-primary-foreground p-4 shadow-lg flex items-center justify-between rounded-b-lg">
      <Link to="/" className="flex items-center space-x-3">
        <Home className="h-8 w-8" />
        <h1 className="text-2xl font-extrabold">SkillCraft LittleBuilders</h1>
      </Link>
      {/* You can add more navigation items here if needed */}
    </header>
  );
};

export default Header;