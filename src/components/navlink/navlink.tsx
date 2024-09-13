"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  activeClassName?: string;
  className?: string;
}

export function NavigationLink({
  children,
  href,
  activeClassName = "opacity-100 bg-gray-200 outline outline-offset outline-background/10 outline-offset-1",
  className = "text-sm rounded-md text-background/90 opacity-50 block hover:opacity-100 px-3.5 py-2 leading-none bg-transparent border border-transparent transition-all duration-200",
}: NavigationLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={cn(className, isActive && activeClassName)}>
      {children}
    </Link>
  );
}
