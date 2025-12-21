import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import ActivityStep from "@/components/ActivityStep";
import { getActivityById } from "@/data/skills";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { MadeWithDyad } from "@/components/made-with-dyad";

const ActivityDetail = () => {
  const { activityId } = useParams<{ activityId: string }>();
  const activity = activityId ? getActivityById(activityId) : undefined;

  if (!activity) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Activity Not Found</h2>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Categories
            </Button>
          </Link>
        </main>
        <MadeWithDyad />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="flex items-center mb-6">
          <Link to={`/categories/${activity.categoryId}`}>
            <Button variant="ghost" size="icon" className="mr-2">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h2 className="text-3xl font-bold text-foreground">{activity.title}</h2>
        </div>
        <p className="text-lg text-muted-foreground mb-8">{activity.description}</p>

        <div className="space-y-4">
          {activity.steps.map((step) => (
            <ActivityStep key={step.stepNumber} step={step} />
          ))}
        </div>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default ActivityDetail;