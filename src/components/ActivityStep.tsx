import React from "react";
import { ActivityStep as ActivityStepType } from "@/data/skills";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface ActivityStepProps {
  step: ActivityStepType;
  isComplete: boolean;
  onToggleComplete: (stepNumber: number, isComplete: boolean) => void;
}

const ActivityStep: React.FC<ActivityStepProps> = ({ step, isComplete, onToggleComplete }) => {
  return (
    <Card className="mb-4 bg-white shadow-md border border-brand-light rounded-lg">
      <CardContent className="p-4 flex items-start space-x-3">
        <Checkbox
          id={`step-${step.stepNumber}`}
          checked={isComplete}
          onCheckedChange={(checked) => onToggleComplete(step.stepNumber, checked as boolean)}
          className="mt-1 border-brand-primary data-[state=checked]:bg-brand-primary data-[state=checked]:text-primary-foreground"
        />
        <div className="flex-1">
          <Label
            htmlFor={`step-${step.stepNumber}`}
            className={`text-lg font-bold text-brand-primary cursor-pointer ${isComplete ? "line-through text-muted-foreground" : ""}`}
          >
            Step {step.stepNumber}
          </Label>
          <p className={`text-base text-foreground ${isComplete ? "line-through text-muted-foreground" : ""}`}>
            {step.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityStep;