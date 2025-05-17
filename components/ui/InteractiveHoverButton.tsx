"use client";

import { cn } from "@/lib/utils";
import { useRef } from "react";
import Link from "next/link";

interface ButtonProps {
  text?: string;
  className?: string;
  href?: string;
}

export default function Button({ text = "Button", className, href }: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const ButtonContent = () => (
    <div className="flex items-center gap-2">
      <span className="inline-block whitespace-nowrap">
        {text}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-transform duration-200 group-hover:translate-x-1"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </div>
  );

  const buttonClasses = cn(
    "group inline-flex items-center rounded-full px-6 py-2.5 text-sm font-medium",
    "bg-black text-white dark:bg-white dark:text-black",
    "hover:bg-gray-800 dark:hover:bg-gray-200",
    "transition-colors duration-200",
    className
  );

  if (href) {
    return (
      <Link href={href}>
        <button ref={buttonRef} className={buttonClasses}>
          <ButtonContent />
        </button>
      </Link>
    );
  }

  return (
    <button ref={buttonRef} className={buttonClasses}>
      <ButtonContent />
    </button>
  );
}