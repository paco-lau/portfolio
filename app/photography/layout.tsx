// Sets the tab title; the page itself is a client component, which can't export metadata.
// The galleries below inherit the "Paco Lau: …" pattern from here
export const metadata = { title: { default: "Photography", template: "Paco Lau: %s" } };

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
