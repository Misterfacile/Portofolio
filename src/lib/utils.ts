import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Resolves a path from content.json against the deployment's base URL, so the
 * same content works at the domain root and under a subpath (/Portofolio/).
 */
export function asset(path: string) {
  if (/^(https?:)?\/\/|^data:/.test(path)) return path;
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}
