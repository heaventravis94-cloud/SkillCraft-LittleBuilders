import React from "react";
import { MadeWithDyad } from "@/components/made-with-dyad";
import Header from "@/components/Header";
import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/data/skills";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
          Choose a Skill Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default Index;