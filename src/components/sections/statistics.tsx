import { Icons } from "@/components/icons";
import { Section } from "@/components/section";
import { BorderText } from "@/components/ui/border-number";
import Link from "next/link";
import { Users } from "lucide-react";
import { getUserCount } from "@/actions/user/user-count";
import { unstable_cache } from "next/cache";

const getCachedStats = unstable_cache(
  async () => {
    const result = await getUserCount();
    const userCount = result?.data?.success ? result.data.data : 1;

    return {
      stars: 50,
      userCount,
    };
  },
  ["stats"],
  { revalidate: 3600 } // Revalidate every hour
);

export async function Statistics() {
  const { stars, userCount } = await getCachedStats();

  const stats = [
    {
      title: "50",
      subtitle: "Stars on GitHub",
      icon: <Icons.github className="h-5 w-5" />,
      link: "https://github.com/federicofanini/gymbrah.com",
    },
    {
      title: "0",
      subtitle: "Discord Members",
      icon: <Icons.discord className="h-5 w-5" />,
      link: "https://discord.gg/",
    },
    {
      title: userCount.toString(),
      subtitle: "Users",
      icon: <Users className="h-5 w-5" />,
      link: "/",
    },
  ];

  return (
    <Section id="statistics" title="Statistics">
      <div
        className="border-x border-t"
        style={{
          backgroundImage:
            "radial-gradient(circle at bottom center, hsl(var(--secondary) / 0.4), hsl(var(--background)))",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {stats.map((stat, idx) => (
            <Link
              href={stat.link}
              target="_blank"
              key={idx}
              className="flex flex-col items-center justify-center py-8 px-4 border-b sm:border-b-0 last:border-b-0 sm:border-r sm:last:border-r-0 [&:nth-child(-n+2)]:border-t-0 sm:[&:nth-child(-n+3)]:border-t-0 relative group overflow-hidden"
            >
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all transform translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 duration-300 ease-in-out">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
              <div className="text-center relative">
                <BorderText text={stat.title} />
                <div className="flex items-center justify-center gap-2 mt-2">
                  {stat.icon}
                  <p className="text-sm text-muted-foreground">
                    {stat.subtitle}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}
