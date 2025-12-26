"use client";

import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { BookOpen, CheckCircle, Heart, TrendingUp, Sparkles, Rocket, ArrowRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface TutorialStep {
  title: string;
  description: string;
  icon: React.ElementType;
}

const tutorialSteps: TutorialStep[] = [
  {
    title: "Welcome, LittleBuilder!",
    description: "Ready to explore amazing skills and become a master builder?",
    icon: Sparkles,
  },
  {
    title: "Explore Skill Categories",
    description: "Tap on categories like 'Kitchen Basics' or 'Creativity & Crafts' to find exciting activities.",
    icon: BookOpen,
  },
  {
    title: "Complete Activities Step-by-Step",
    description: "Follow easy instructions and check off each step as you complete it. You're building real skills!",
    icon: CheckCircle,
  },
  {
    title: "Save Your Favorites",
    description: "Found an activity you love? Soon you'll be able to tap the heart icon to save it for quick access!",
    icon: Heart,
  },
  {
    title: "Track Your Progress",
    description: "Visit the 'Progress' page to see all your completed activities and celebrate your achievements!",
    icon: TrendingUp,
  },
  {
    title: "Let's Start Building!",
    description: "You're all set! Get ready to learn, create, and have fun!",
    icon: Rocket,
  },
];

const TUTORIAL_SHOWN_KEY = "skillcraft_tutorial_shown";

const TutorialDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    const tutorialShown = localStorage.getItem(TUTORIAL_SHOWN_KEY);
    if (!tutorialShown) {
      setIsOpen(true);
    }
  }, []);

  const handleNextStep = () => {
    if (currentStepIndex < tutorialSteps.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    } else {
      // Last step, close tutorial
      localStorage.setItem(TUTORIAL_SHOWN_KEY, "true");
      setIsOpen(false);
    }
  };

  const handlePreviousStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    }
  };

  const handleSkipTutorial = () => {
    localStorage.setItem(TUTORIAL_SHOWN_KEY, "true");
    setIsOpen(false);
  };

  const currentStep = tutorialSteps[currentStepIndex];
  const IconComponent = currentStep.icon;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px] p-6 bg-white rounded-xl shadow-2xl border-4 border-brand-primary">
        <DialogHeader className="text-center">
          <IconComponent className="h-16 w-16 text-brand-primary mx-auto mb-4 animate-bounce" />
          <DialogTitle className="text-3xl font-extrabold text-brand-text mb-2">
            {currentStep.title}
          </DialogTitle>
          <DialogDescription className="text-lg text-muted-foreground">
            {currentStep.description}
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-between items-center mt-6">
          {currentStepIndex > 0 ? (
            <Button
              variant="ghost"
              onClick={handlePreviousStep}
              className="text-brand-primary hover:bg-brand-light"
            >
              <ArrowLeft className="mr-2 h-5 w-5" /> Previous
            </Button>
          ) : (
            <Button
              variant="ghost"
              onClick={handleSkipTutorial}
              className="text-muted-foreground hover:bg-brand-light"
            >
              Skip
            </Button>
          )}
          <Button
            onClick={handleNextStep}
            className={cn(
              "bg-brand-secondary hover:bg-brand-secondary/90 text-white font-bold py-2 px-6 rounded-full text-lg",
              currentStepIndex === tutorialSteps.length - 1 && "bg-brand-primary hover:bg-brand-primary/90"
            )}
          >
            {currentStepIndex < tutorialSteps.length - 1 ? (
              <>
                Next <ArrowRight className="ml-2 h-5 w-5" />
              </>
            ) : (
              "Got It! Let's Play!"
            )}
          </Button>
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {tutorialSteps.map((_, index) => (
            <span
              key={index}
              className={cn(
                "h-2 w-2 rounded-full bg-gray-300",
                index === currentStepIndex && "bg-brand-primary"
              )}
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TutorialDialog;