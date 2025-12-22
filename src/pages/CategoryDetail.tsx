import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import ActivityCard from "@/components/ActivityCard";
import Navbar from "@/components/Navbar"; // Import Navbar
import { getCategoryById, getActivitiesByCategoryId } from "@/data/skills";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { MadeWithDyad } from "@/components/made-with-dyad";

const CategoryDetail = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = categoryId ? getCategoryById(categoryId) : undefined;
  const activities = categoryId ? getActivitiesByCategoryId(categoryId) : [];

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-brand-light to-background pb-16"> {/* Added pb-16 for Navbar */}
        <Header />
        <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8 text-center">
          <h2 className="text-2xl font-bold text-brand-text mb-4">Category Not Found</h2>
          <Button asChild variant="outline" className="bg-brand-primary text-white hover:bg-brand-primary/90 rounded-lg">
            <Link to="/library"> {/* Corrected link to /library */}
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Categories
            </Link>
          </Button>
        </main>
        <MadeWithDyad />
        <Navbar /> {/* Add Navbar here */}
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-brand-light to-background pb-16"> {/* Added pb-16 for Navbar */}
      <Header />
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="flex items-center mb-8">
          <Button asChild variant="ghost" size="icon" className="mr-3 text-brand-primary hover:bg-brand-light rounded-full">
            <Link to="/library"> {/* Corrected link to /library */}
              <ArrowLeft className="h-6 w-6" />
            </Link>
          </Button>
          <h2 className="text-4xl font-extrabold text-brand-text drop-shadow-sm">{category.name} Activities</h2>
        </div>
        <p className="text-lg text-muted-foreground mb-10">{category.description}</p>
        
        {activities.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground text-xl py-10">No activities found for this category yet. Check back soon!</p>
        )}
      </main>
      <MadeWithDyad />
      <Navbar /> {/* Add Navbar here */}
    </div>
  );
};

export default CategoryDetail;