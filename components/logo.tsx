import Link from "next/link";
import { cn } from "@/lib/utils";
import React from "react";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={cn("flex items-center gap-1", className)}>
      <LogoIcon />
      <span className="text-sm text-neutral-800">AgenForce</span>
    </Link>
  );
};

export const LogoIcon = (props: React.SVGAttributes<SVGSVGElement>) => {
  return (
    <svg
      width="25"
      height="20"
      viewBox="0 0 201 138"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M95.2856 0H200.428V45.1785H95.2856V0Z" fill="black" />
      <path
        d="M200.428 12.3212V117.464H157.714V12.3212H200.428Z"
        fill="black"
      />
      <path
        d="M95.2856 45.1785V92.8214H47.6427V45.1786L95.2856 45.1785Z"
        fill="black"
      />
      <path d="M47.6428 0V47.6428H0V0H47.6428Z" fill="black" />
      <path d="M47.6428 90.3572V138H0V90.3572H47.6428Z" fill="black" />
      <path
        d="M95.2856 92.8214L200.428 92.8213V138H95.2856V92.8214Z"
        fill="black"
      />
    </svg>
  );
};
