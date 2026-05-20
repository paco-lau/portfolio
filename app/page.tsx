export default function Home() {
  return (
    <>
      <section
        className="h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/landing-page-background.jpg')" }}
      />
      <section className="min-h-screen flex items-center justify-center px-8">
        <p
          className="text-center text-neutral-900 font-[family-name:var(--font-inter)] leading-tight max-w-5xl"
          style={{ fontSize: "75px" }}
        >
          I specialize in making you curious to scroll on my designs and capture the best moments of your life
        </p>
      </section>
    </>
  );
}
