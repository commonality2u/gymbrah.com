"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCheck, Timer, Loader2 } from "lucide-react";
import Link from "next/link";
import OutlinedButton from "@/components/ui/outlined-button";
import AvatarCircles from "@/components/ui/avatar-circles";
import { avatars } from "./hero";
import {
  MdFitnessCenter,
  MdPerson,
  MdFastfood,
  MdBreakfastDining,
} from "react-icons/md";

const features = [
  {
    id: "workout-tracking",
    title: "Workout Tracking",
    description:
      "Log and track your workouts in real-time to monitor progress and hit your fitness goals.",
    videoUrl: "/videos/workout-tracking-demo.mp4",
    benefits: [
      "Track Every Session",
      "Performance Analytics",
      "Personalized Workouts",
      "Progress History",
    ],
    hrs: "Save 8 hours per month",
    icon: <MdFitnessCenter className="w-8 h-8 text-yellow-600" />,
  },
  {
    id: "gym-membership-linking",
    title: "Gym & Coach Linking",
    description:
      "Connect with your gym or coach to receive tailored workouts and performance feedback.",
    videoUrl: "/videos/gym-membership-linking-demo.mp4",
    benefits: [
      "Seamless Gym Integration",
      "Direct Coach Communication",
      "Personalized Training Plans",
      "Instant Workout Updates",
    ],
    hrs: "Save 6 hours per month",
    icon: <MdPerson className="w-8 h-8 text-yellow-600" />,
  },
  {
    id: "supplements-tracker",
    title: "Supplements Tracker",
    description:
      "Keep track of your supplement intake and optimize your performance and recovery.",
    videoUrl: "/videos/supplements-tracker-demo.mp4",
    benefits: [
      "Daily Supplement Logs",
      "Reminders & Scheduling",
      "Dosage Tracking",
      "Performance Insights",
    ],
    hrs: "Save 5 hours per month",
    icon: <MdBreakfastDining className="w-8 h-8 text-yellow-600" />,
  },
  {
    id: "nutrition-tips",
    title: "Nutrition Tips",
    description:
      "Get expert-backed nutrition tips to fuel your workouts and improve recovery.",
    videoUrl: "/videos/nutrition-tips-demo.mp4",
    benefits: [
      "Personalized Recommendations",
      "Macro & Micro Tracking",
      "Pre & Post-Workout Tips",
      "Goal-Specific Advice",
    ],
    hrs: "Save 7 hours per month",
    icon: <MdFastfood className="w-8 h-8 text-yellow-600" />,
  },
];

export function ServicesAthletes({
  subscriberCount,
}: {
  subscriberCount: number;
}) {
  const [selectedFeature, setSelectedFeature] = useState(features[0]);

  return (
    <div className="relative mx-auto max-w-screen-xl px-4 py-16" id="athletes">
      <div className="text-center mb-8 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.2] text-balance mb-4">
          <span className="relative inline-block px-1">
            Wait, what?
            <span className="hidden md:block absolute -bottom-1 left-0 w-full h-2 md:h-3 bg-yellow-400 -rotate-1 -z-10" />
          </span>
          <br />
          <span className="text-sm md:text-md text-muted-foreground font-medium tracking-normal">
            We take care for our athletes
          </span>
        </h2>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-yellow-500/20 via-transparent to-transparent opacity-30" />
      </div>

      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {features.map((feature) => (
            <Button
              key={feature.id}
              variant={selectedFeature.id === feature.id ? "outline" : "ghost"}
              onClick={() => setSelectedFeature(feature)}
              className="min-w-[140px] rounded-xl"
            >
              {feature.icon}
              {feature.title}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="">
            <CardHeader>
              <CardTitle>{selectedFeature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                {selectedFeature.description}
              </p>
              <ul className="space-y-3">
                {selectedFeature.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="flex items-center gap-2 bg-yellow-500/10 rounded-full p-1">
                      <CheckCheck className="h-4 w-4 rounded-full text-yellow-600" />
                    </div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <div className="text-green-600 font-medium flex items-center gap-2 text-start">
                <Timer className="h-4 w-4 rounded-full text-green-600" />
                {selectedFeature.hrs}
              </div>
              <div className="flex items-center gap-8">
                <div className="flex justify-center">
                  <Link href="/access">
                    <OutlinedButton
                      className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white text-xl"
                      variant="secondary"
                    >
                      Join {subscriberCount} members
                      <AvatarCircles
                        avatarUrls={avatars}
                        className="hidden md:flex"
                      />
                    </OutlinedButton>
                  </Link>
                </div>
              </div>
            </CardFooter>
          </div>

          <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
            <video
              className="size-full overflow-hidden object-cover border border-primary border-t-2 border-b-2 rounded-t-[10px] rounded-b-[10px] shadow-lg"
              src="https://fuchsia-eldest-koi-370.mypinata.cloud/ipfs/bafybeidpq35tzzurokqwm2wtivng2i7h4b27ohbupflyqawpjn7v2vvody"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>
    </div>
  );
}
