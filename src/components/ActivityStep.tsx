import React from "react";
import { ActivityStep as ActivityStepType } from "@/data/skills";
import { Card, CardContent } from "@/components/ui/card";

interface ActivityStepProps {
  step: ActivityStepType;
}

const ActivityStep: React.FC<ActivityStepProps> = ({ step }) => {
  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <h3 className="text-md font-semibold mb-2">Step {step.stepNumber}</h3>
        <p className="text-muted-foreground">{step.description}</p>
      </CardContent>
    </Card>
  );
};

export default ActivityStep;