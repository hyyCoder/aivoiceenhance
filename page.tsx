import { Activity, CreditCard, HardDrive, Server, Users } from "lucide-react";
import { Navbar } from "@/components/navbar";

const tiles = [
  ["Users", "24,832", Users],
  ["MRR", "$84,910", CreditCard],
  ["Queue", "19 jobs", Activity],
  ["Storage", "8.4 TB", HardDrive],
  ["Workers", "12 healthy", Server]
];

export const metadata = { title: "Admin" };

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-cloud px-6 pb-16 pt-32 text-ink dark:bg-ink dark:text-cloud">
      <Navbar />
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[.22em] text-coral">Admin</p>
        <h1 className="mt-3 text-4xl font-black sm:text-6xl">Operations control room</h1>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {tiles.map(([label, value, Icon]) => (
            <article key={label as string} className="glass rounded-3xl p-5 shadow-soft">
              <Icon className="h-6 w-6 text-electric" />
              <p className="mt-4 text-sm text-ink/55 dark:text-cloud/55">{label as string}</p>
              <h2 className="text-2xl font-black">{value as string}</h2>
            </article>
          ))}
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <section className="glass rounded-3xl p-6 shadow-soft">
            <h2 className="text-2xl font-semibold">Processing queue monitor</h2>
            <p className="mt-4 text-sm text-ink/65 dark:text-cloud/65">Track extraction, enhancement, mastering, transcription, rendering, retries, and failed jobs.</p>
          </section>
          <section className="glass rounded-3xl p-6 shadow-soft">
            <h2 className="text-2xl font-semibold">Revenue dashboard</h2>
            <p className="mt-4 text-sm text-ink/65 dark:text-cloud/65">Stripe and Razorpay payment records map to subscriptions, invoices, entitlements, and usage analytics.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
