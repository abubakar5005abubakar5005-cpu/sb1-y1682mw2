import { signIn } from 'next-auth/react';

export default function LoginPage() {
  return (
    <main className="mx-auto max-w-md px-4 py-16 text-royal-ivory">
      <div className="rounded-[28px] border border-royal-border/60 bg-white/5 p-8 text-center shadow-royal">
        <h1 className="font-display text-4xl text-royal-goldLight">Welcome back</h1>
        <p className="mt-4 text-base leading-7 text-royal-muted">
          Sign in with your Google account to enjoy a saved wishlist and personalized royal service.
        </p>
        <button
          onClick={() => signIn('google', { callbackUrl: '/' })}
          className="mt-8 w-full rounded-full bg-gold-gradient px-5 py-3 font-semibold text-royal-burgundy"
        >
          Continue with Google
        </button>
      </div>
    </main>
  );
}
