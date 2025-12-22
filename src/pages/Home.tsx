import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-brand-light to-background pb-16"> {/* Added pb-16 for Navbar */}
      <Header />
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8 text-center">
        <h2 className="text-4xl font-extrabold text-brand-text drop-shadow-md mb-6">
          Welcome to SkillCraft LittleBuilders!
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Your adventure to learn new skills starts here. Explore categories, discover fun activities, and track your progress!
        </p>
        {/* Placeholder for "Recently Viewed" or "Suggested Activities" */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-brand-light mb-8">
          <h3 className="text-2xl font-bold text-brand-primary mb-4">What's New?</h3>
          <p className="text-base text-foreground">Check out our latest activities in the Skill Library!</p>
          {/* In a real app, you'd fetch and display dynamic content here */}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-brand-light">
          <h3 className="text-2xl font-bold text-brand-primary mb-4">Your Learning Journey</h3>
          <p className="text-base text-foreground">Start exploring to build your skills and confidence.</p>
          {/* In a real app, you'd show personalized content */}
        </div>
      </main>
      <MadeWithDyad />
      <Navbar />
    </div>
  );
};

export default Home;