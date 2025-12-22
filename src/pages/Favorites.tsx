import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Heart } from "lucide-react";

const Favorites = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-brand-light to-background pb-16"> {/* Added pb-16 for Navbar */}
      <Header />
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8 text-center">
        <Heart className="h-16 w-16 text-brand-accent mx-auto mb-6" />
        <h2 className="text-4xl font-extrabold text-brand-text drop-shadow-md mb-6">
          Your Favorite Activities
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Mark activities with a heart to save them here for quick access!
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md border border-brand-light">
          <h3 className="text-2xl font-bold text-brand-primary mb-4">No Favorites Yet!</h3>
          <p className="text-base text-foreground">
            Browse the Skill Library and tap the heart icon on activities you love.
          </p>
        </div>
        {/* In a real app, you would display a list of favorited activities here */}
      </main>
      <MadeWithDyad />
      <Navbar />
    </div>
  );
};

export default Favorites;