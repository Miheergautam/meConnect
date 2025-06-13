import CardStack from "./CardStack";

export default function HeroOne() {
  return (
    <section className="max-w-4xl w-full mt-10 flex flex-col items-center p-6 rounded-xl shadow-md text-center">
      {/* Headline */}
      <h1 className="text-4xl md:text-5xl font-bold leading-tight text-yellow">
        Conversations. But cooler.
        <br />
        <span className="text-white">Chat like it’s 2099.</span>
      </h1>

      {/* Subheading */}
      <p className="mt-4 text-gray-300 text-base md:text-lg max-w-xl">
        Kappa lets you message your friends before they even finish typing. Zero
        distractions. Maximum chaos. Full vibes.
      </p>

      {/* CTA Buttons */}
      <div className="mt-6 max-w-xl w-full flex flex-col sm:flex-row sm:justify-center gap-4">
        <a
          href="#"
          className="px-5 py-2 bg-yellow text-black rounded-xl font-semibold transition hover:bg-yellow-400"
        >
          Open App
        </a>
        <a
          href="#"
          className="px-5 py-2 bg-yellow text-black rounded-xl font-semibold transition hover:bg-yellow-400"
        >
          Discover More
        </a>
      </div>
      <CardStack/>
    </section>
  );
}
