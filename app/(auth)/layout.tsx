export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left: Auth Form */}
      <div className="flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">{children}</div>
      </div>

      {/* Right: Illustration / Branding / Info */}
      <div className="hidden md:flex items-center justify-center bg-blue-600 text-white p-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Welcome to .meConnect</h1>
          <p className="text-lg">Chat with your buddies in real time.</p>
        </div>
      </div>
    </div>
  );
}
