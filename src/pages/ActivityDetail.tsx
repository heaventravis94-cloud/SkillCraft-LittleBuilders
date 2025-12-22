import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import ActivityStep from "@/components/ActivityStep";
import Navbar from "@/components/Navbar"; // Import Navbar
import { getActivityById } from "@/data/skills";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { showSuccess } from "@/utils/toast"; // Import toast utility

const ActivityDetail = () => {
  const { activityId } = useParams<{ activityId: string }>();
  const activity = activityId ? getActivityById(activityId) : undefined;

  const handleMarkComplete = () => {
    showSuccess(`Great job! You completed "${activity?.title}"!`);
    // In a real app, you would save this completion status to local storage or a backend.
  };

  if (!activity) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-brand-light to-background pb-16"> {/* Added pb-16 for Navbar */}
        <Header />
        <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8 text-center">
          <h2 className="text-2xl font-bold text-brand-text mb-4">Activity Not Found</h2>
          <Link to="/library"> {/* Changed link to /library */}
            <Button variant="outline" className="bg-brand-primary text-white hover:bg-brand-primary/90 rounded-lg">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Categories
            </Button>
          </Link>
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
          <Link to={`/categories/${activity.categoryId}`}>
            <Button variant="ghost" size="icon" className="mr-3 text-brand-primary hover:bg-brand-light rounded-full">
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </Link>
          <h2 className="text-4xl font-extrabold text-brand-text drop-shadow-sm">{activity.title}</h2>
        </div>
        <p className="text-lg text-muted-foreground mb-6">{activity.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 bg-white p-6 rounded-lg shadow-md border border-brand-light">
          <div>
            <h3 className="text-xl font-bold text-brand-primary mb-2">Details</h3>
            <p className="text-base text-foreground">
              <span className="font-semibold">Skill Level:</span> {activity.skillLevel}
            </p>
            <p className="text-base text-foreground">
              <span className="font-semibold">Estimated Time:</span> {activity.estimatedTime}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-brand-primary mb-2">Supplies</h3>
            <ul className="list-disc list-inside text-base text-foreground">
              {activity.supplies.map((supply, index) => (
                <li key={index}>{supply}</li>
              ))}
            </ul>
          </div>
          {activity.safetyNotes && (
            <div className="md:col-span-2 mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 rounded-md">
              <h4 className="font-semibold text-lg mb-1">Safety Notes:</h4>
              <p className="text-base">{activity.safetyNotes}</p>
            </div>
          )}
        </div>

        <h3 className="text-3xl font-bold text-brand-text mb-6 drop-shadow-sm">Steps to Complete</h3>
        <div className="space-y-6">
          {activity.steps.map((step) => (
            <ActivityStep key={step.stepNumber} step={step} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            onClick={handleMarkComplete}
            className="bg-brand-accent hover:bg-brand-accent/90 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <CheckCircle className="mr-3 h-6 w-6" /> Mark Activity Complete!
          </Button>
        </div>
      </main>
      <MadeWithDyad />
      <Navbar /> {/* Add Navbar here */}
    </div>
  );
};

export default ActivityDetail;