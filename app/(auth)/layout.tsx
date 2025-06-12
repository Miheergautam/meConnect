export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen grid place-items-center bg-black px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-4xl rounded-2xl border border-yellow overflow-hidden shadow-lg">
        {/* Left: Auth Form */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md">{children}</div>
        </div>

        {/* Right: Illustration / Branding / Info */}
        <div className="hidden md:flex flex-col items-center justify-center text-yellow px-6 py-8 md:p-12">
          {/* Illustration */}
          <img
            src="/auth_illustrator.svg" 
            alt="Chat Illustration"
            className="w-3/4 max-w-xs md:max-w-sm lg:max-w-md"
          />

          {/* Text Content */}
          <div className="text-center space-y-4">
            <h1 className="text-2xl md:text-3xl font-bold hover-scale-up transition">
              Welcome to <span className="text-white">.meConnect</span>
            </h1>
            <p className="text-base md:text-md text-yellow/80">
              Chat with your buddies in real time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
