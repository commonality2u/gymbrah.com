import { getSubscriberCount } from "@/actions/subscribe-action";
import { getTesterCounts } from "@/actions/tester";
import { SubscribeInput } from "@/components/ui/subscribe-input";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Loader2 } from "lucide-react";

export const revalidate = 3600; // revalidate every hour

export default async function ComingSoon() {
  const subscriberCountResponse = await getSubscriberCount();
  const testerCountsResponse = await getTesterCounts();

  const subscriberCount = subscriberCountResponse.success ? (
    subscriberCountResponse.data.count
  ) : (
    <Loader2 className="w-4 h-4 animate-spin" />
  );

  const testerAthleteCount = testerCountsResponse.success
    ? testerCountsResponse.data.athlete.spotsLeft
    : 0;

  console.log("testerCountsResponse", testerCountsResponse);
  const testerBusinessCount = testerCountsResponse.success
    ? testerCountsResponse.data.business.spotsLeft
    : 0;

  return (
    <div className="inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4 py-8">
      <div className="flex flex-col items-center gap-6 w-full max-w-[320px] sm:max-w-lg text-center">
        <h2 className="text-2xl sm:text-3xl font-bold font-mono">
          FREE Private Beta Access
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg">
          Working hard to bring you the best fitness habits experience.
          {testerAthleteCount > 0 || testerBusinessCount > 0 ? (
            <>
              <br />
              Join our private beta or get on the waitlist for early access.
            </>
          ) : (
            <>
              <br />
              Join our waitlist to get early access and updates.
            </>
          )}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <div className="flex flex-col items-center p-6 rounded-lg border border-border bg-card">
            <h3 className="text-lg font-semibold mb-2">Fitness Creator</h3>
            <div className="text-3xl font-bold text-primary mb-1">
              {testerBusinessCount}
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              spots remaining
            </p>
            <Button
              asChild
              className="w-full inline-flex items-center justify-center gap-2"
              disabled={testerBusinessCount === 0}
            >
              <Link href="https://coach.gymbrah.com">
                <Image
                  src="/logo/logo_white.svg"
                  alt="Logo"
                  width={16}
                  height={16}
                  className="sm:w-5 sm:h-5"
                />
                <span>
                  {testerBusinessCount === 0
                    ? "Join Waitlist"
                    : "Join as Business"}
                </span>
              </Link>
            </Button>
          </div>

          <div className="flex flex-col items-center p-6 rounded-lg border border-border bg-card">
            <h3 className="text-lg font-semibold mb-2">Athlete</h3>
            <div className="text-3xl font-bold text-primary mb-1">
              {testerAthleteCount}
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              spots remaining
            </p>
            <Button
              asChild
              className="w-full inline-flex items-center justify-center gap-2"
              disabled={testerAthleteCount === 0}
            >
              <Link href="https://athlete.gymbrah.com">
                <Image
                  src="/logo/logo_white.svg"
                  alt="Logo"
                  width={16}
                  height={16}
                  className="sm:w-5 sm:h-5"
                />
                <span>
                  {testerAthleteCount === 0
                    ? "Join Waitlist"
                    : "Join as Athlete"}
                </span>
              </Link>
            </Button>
          </div>
        </div>

        <span className="text-sm sm:text-base text-muted-foreground">
          Or join the waitlist to get early access and updates.
        </span>

        <SubscribeInput />

        <p className="text-primary text-sm sm:text-base">
          <span className="font-bold">{subscriberCount}</span> members on the
          waitlist
        </p>

        <div className="flex flex-col items-center gap-4 w-full">
          <div className="text-xs sm:text-sm text-muted-foreground flex flex-col items-center gap-2 mt-4">
            <p className="text-center max-w-[280px] sm:max-w-sm">
              For all the beta users, I&apos;ll love to hear your feedback and
              build the app together!
            </p>
            <p className="text-center mt-6">Need support or have questions?</p>
            <a
              href="https://twitter.com/FedericoFan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium inline-flex items-center gap-1.5"
            >
              <Icons.twitter className="size-3 sm:size-4" />
              <span>Reach out on X @FedericoFan</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
