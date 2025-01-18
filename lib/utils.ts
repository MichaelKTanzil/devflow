import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { techMap } from "@/constants/techMap";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDeviconClassName = (techname: string) => {
  const normalizedTechName = techname.replace(/[ .]/g, "").toLowerCase();

  return techMap[normalizedTechName]
    ? `${techMap[normalizedTechName]} colored`
    : "devicon-devicon-plain";
};

export const getTimeStamp = (date: Date): string => {
  const now = new Date();
  const secondsAgo = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (secondsAgo < 1) {
    return "Just now";
  }

  const timeIntervals = [
    { interval: 60, label: "second" },
    { interval: 60, label: "minute" },
    { interval: 24, label: "hour" },
    { interval: 30, label: "day" },
    { interval: 12, label: "month" },
    { interval: Infinity, label: "year" },
  ];

  let timeValue = secondsAgo;
  for (const { interval, label } of timeIntervals) {
    if (timeValue < interval) {
      return `${timeValue} ${label}${timeValue !== 1 ? "s" : ""} ago`;
    }
    timeValue = Math.floor(timeValue / interval);
  }

  return "Just now"; // Fallback
};
