import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity } from "@/data/skills";
import { Button } from "@/components/ui/button";

interface ActivityCardProps {
  activity: Activity;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  return (
    <Card className="bg-card hover:bg-brand-light hover:shadow-xl transition-all duration-300 ease-in-out h-full flex flex-col justify-between border-2 border-brand-secondary/30 rounded-xl">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-brand-text">{activity.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col justify-between flex-grow">
        <p className="text-base text-muted-foreground mb-4">{activity.description}</p>
        <Button asChild className="w-full bg-brand-secondary hover:bg-brand-secondary/90 text-white font-semibold rounded-lg">
          <Link to={`/activities/${activity.id}`}>Start Activity</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;