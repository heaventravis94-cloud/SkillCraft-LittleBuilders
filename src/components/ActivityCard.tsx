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
    <Card className="hover:shadow-lg transition-shadow duration-200 ease-in-out h-full flex flex-col justify-between">
      <CardHeader>
        <CardTitle className="text-lg font-medium">{activity.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col justify-between flex-grow">
        <p className="text-sm text-muted-foreground mb-4">{activity.description}</p>
        <Link to={`/activities/${activity.id}`}>
          <Button className="w-full">Start Activity</Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;