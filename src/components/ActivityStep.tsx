import React from "react";
import { ActivityStep as ActivityStepType } from "@/data/skills";
import { Card, CardContent } from "@/components/ui/card";

interface ActivityStepProps {
  step: ActivityStepType;
}

const ActivityStep: React.FC<ActivityStepProps> = ({ step }) => {
  return (
    <Card className="mb-4 bg-white shadow-md border border-brand-light rounded-lg">
      <CardContent className="p-4">
        <h3 className="text-lg font-bold mb-2 text-brand-primary">Step {step.stepNumber}</h3>
        <p className="text-base text-foreground">{step.description}</p>
      </CardContent>
    </Card>
  );
};

export default ActivityStep;