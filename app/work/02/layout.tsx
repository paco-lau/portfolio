import { workMetadata } from "../../lib/projects";

// Sets the tab title; the page itself is a client component, which can't export metadata.
export const metadata = workMetadata("02");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
