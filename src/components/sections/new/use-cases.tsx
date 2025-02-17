"use client";

import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import OutlinedButton from "@/components/ui/outlined-button";
import { CheckCheck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { MdPeople, MdTrendingUp, MdTimer, MdAutoGraph } from "react-icons/md";

const useCases = [
  {
    id: "personal-trainers",
    title: "Personal Trainers",
    description:
      "Scale your coaching business and deliver better results to clients.",
    benefits: [
      "Automate client management and scheduling",
      "Create custom workout plans in minutes",
      "Track client progress with detailed analytics",
      "Increase client retention with engagement features",
    ],
    impact: "3x more clients managed with less effort",
    icon: <MdPeople className="w-8 h-8 text-violet-600" />,
  },
  {
    id: "athletes",
    title: "Athletes",
    description:
      "Take control of your training and maximize performance gains.",
    benefits: [
      "Follow structured workout programs",
      "Track performance metrics over time",
      "Get real-time form feedback",
      "Connect with training partners",
    ],
    impact: "40% faster progress towards goals",
    icon: <MdTrendingUp className="w-8 h-8 text-violet-600" />,
  },
  {
    id: "busy-professionals",
    title: "Busy Professionals",
    description: "Fit effective workouts into your packed schedule.",
    benefits: [
      "Quick, efficient workout templates",
      "Flexible scheduling options",
      "Progress tracking on the go",
      "AI-powered workout adjustments",
    ],
    impact: "Save 5+ hours per week on planning",
    icon: <MdTimer className="w-8 h-8 text-violet-600" />,
  },
  {
    id: "fitness-enthusiasts",
    title: "Fitness Enthusiasts",
    description: "Level up your training with data-driven insights.",
    benefits: [
      "Advanced performance analytics",
      "Personalized training recommendations",
      "Community challenges and support",
      "Comprehensive progress tracking",
    ],
    impact: "2x faster strength gains",
    icon: <MdAutoGraph className="w-8 h-8 text-violet-600" />,
  },
];

export function UseCases({ subscriberCount }: { subscriberCount: number }) {
  const [selectedUseCase, setSelectedUseCase] = useState(useCases[0]);

  return (
    <Section id="use-cases">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.2] text-balance mb-4">
            <span className="relative inline-block px-1">
              Transform your fitness journey
              <span className="hidden md:block absolute -bottom-1 left-0 w-full h-2 md:h-3 bg-violet-400 -rotate-1 -z-10" />
            </span>
            <br />
            <span className="text-sm md:text-md text-muted-foreground font-medium tracking-normal">
              Tailored solutions for every fitness goal
            </span>
          </h2>
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-violet-500/20 via-transparent to-transparent opacity-30" />
        </div>

        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {useCases.map((useCase) => (
              <Button
                key={useCase.id}
                variant={
                  selectedUseCase.id === useCase.id ? "outline" : "ghost"
                }
                onClick={() => setSelectedUseCase(useCase)}
                className="min-w-[140px] rounded-xl"
              >
                {useCase.icon}
                {useCase.title}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl border shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {selectedUseCase.icon}
                  {selectedUseCase.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  {selectedUseCase.description}
                </p>
                <ul className="space-y-3">
                  {selectedUseCase.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="flex items-center gap-2 bg-violet-500/10 rounded-full p-1">
                        <CheckCheck className="h-4 w-4 rounded-full text-violet-600" />
                      </div>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-violet-50 rounded-lg">
                  <p className="text-violet-700 font-semibold">
                    {selectedUseCase.impact}
                  </p>
                </div>
              </CardContent>
            </div>
            <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-violet-100 to-violet-50 border shadow-sm">
              <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] bg-grid-violet-500/[0.2]" />
              <div className="relative h-full flex items-center justify-center p-8">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-violet-900">
                    Ready to transform?
                  </h3>
                  <p className="text-violet-700">
                    Join thousands of others who have already revolutionized
                    their fitness journey with GymBrah.
                  </p>
                  <Link href="/access">
                    <OutlinedButton
                      variant="secondary"
                      className="bg-violet-600 hover:bg-violet-700 text-white"
                    >
                      Join {subscriberCount} members
                    </OutlinedButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
