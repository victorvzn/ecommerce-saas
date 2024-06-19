import { UserButton } from "@clerk/nextjs";

export default function SetupPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Ecommerce Saas v0.1.0</h1>

      <div className="flex gap-3">
        This is a protected route!

        <UserButton afterSignOutUrl="/sign-in" />
      </div>
    </main>
  );
}
