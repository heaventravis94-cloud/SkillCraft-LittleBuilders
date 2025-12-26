import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { TrendingUp } from "lucide-react";

const Progress = () => {
  return (
    <div className="min-h-screen flex flex-col pb-16"> {/* Removed bg-gradient-to-br from-brand-light to-background */}
      <Header />
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8 text-center">
        <TrendingUp className="h-16 w-16 text-brand-secondary mx-auto mb-6" />
        <h2 className="text-4xl font-extrabold text-brand-text drop-shadow-md mb-6">
          Your Progress Overview
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          See how many activities you've completed and the skills you're building!
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md border border-brand-light">
          <h3 className="text-2xl font-bold text-brand-primary mb-4">Keep Going!</h3>
          <p className="text-base text-foreground">
            Complete activities to see your achievements here.
          </p>
        </div>
        {/* In a real app, you would display charts, counts, and badges here */}
      </main>
      <MadeWithDyad />
      <Navbar />
    </div>
  );
};

export default Progress;