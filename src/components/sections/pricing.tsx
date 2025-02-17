"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Link from "next/link";
import { Icons } from "../icons";

function PricingTier({ tier }: { tier: (typeof siteConfig.pricing)[0] }) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">{tier.name}</CardTitle>
          {tier.popular && (
            <Badge
              variant="secondary"
              className="bg-purple-500/10 text-purple-600 hover:bg-purple-500/20"
            >
              🔥 Best value
            </Badge>
          )}
        </div>
        <div className="mt-4">
          <div className="flex items-baseline">
            <span className="text-3xl font-bold tracking-tight">
              ${tier.price}
            </span>
            <span className="ml-1 text-sm font-medium text-muted-foreground">
              /lifetime
            </span>
          </div>
          {tier.anchor && (
            <div className="text-muted-foreground text-sm mt-">
              <span className="line-through">${tier.anchor}</span>
              <span className="ml-2 text-green-600 font-semibold bg-green-500/10 px-2 py-1 rounded-md">
                Save ${tier.anchor - tier.price}
              </span>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="pt-6">
        <p className="text-muted-foreground mb-6">{tier.description}</p>
        <ul className="space-y-3">
          {tier.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className="flex items-center gap-2 bg-green-500/10 rounded-full p-1">
                <Check className="h-4 w-4 rounded-full text-green-600" />
              </div>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <div className="p-6 pt-0">
        <Link href={tier.link} target="_blank" className="w-full">
          <Button
            size="lg"
            className={cn(
              "w-full",
              tier.popular
                ? "bg-primary text-primary-foreground hover:bg-secondary-foreground"
                : ""
            )}
          >
            {tier.cta}
          </Button>
        </Link>
      </div>
    </div>
  );
}

export function Pricing() {
  return (
    <div className="relative mx-auto max-w-screen-xl px-4 py-16">
      <div className="text-center mb-8 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.2] text-balance mb-4">
          <span className="relative inline-block px-1">
            Simple, transparent pricing.
            <span className="hidden md:block absolute -bottom-1 left-0 w-full h-2 md:h-3 bg-purple-400 -rotate-1 -z-10" />
          </span>
          <br />
          <span className="text-sm md:text-md text-muted-foreground font-medium tracking-normal">
            You&apos;re securing private beta access to GymBrah! 🚀
          </span>
        </h2>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-purple-500/20 via-transparent to-transparent opacity-30" />
      </div>

      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <Link
            href="https://discord.com/invite/f7fSp6vQcK"
            target="_blank"
            className="text-sm text-primary flex flex-wrap items-center gap-2 text-center justify-center px-4 md:px-0 border border-dashed border-purple-400 rounded-md py-2 bg-purple-500/10 hover:bg-purple-500/20 transition-colors font-medium"
          >
            Join our <Icons.discord className="size-4 md:size-5" /> for
            onboarding, early feature access, and direct feedbacks.
          </Link>
          <p className="mt-2 text-sm text-muted-foreground flex items-center gap-2 text-center justify-center">
            Let&apos;s build{" "}
            <strong className="text-primary underline underline-offset-4">
              GymBrah
            </strong>{" "}
            together. See you inside! 🔥
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {siteConfig.pricing.map((tier, index) => (
            <PricingTier key={index} tier={tier} />
          ))}
        </div>
      </div>
    </div>
  );
}
