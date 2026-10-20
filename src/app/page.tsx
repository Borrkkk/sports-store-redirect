import Image from "next/image";
import { Countdown } from "@/components/countdown";
import { JerseyPlate } from "@/components/jersey-plate";
import { SignupForm } from "@/components/signup-form";
import { SiteHeader } from "@/components/site-header";
import { MapleLeaf, Wordmark } from "@/components/wordmark";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";

const facts = [
  { value: "32 years", label: "On the floor at Upper Canada Mall" },
  { value: "Newmarket", label: "Where the doors are still open" },
  { value: "Aurora", label: "Where the operation is going" },
  { value: "October 31", label: "Last day. A Saturday." },
];

export default function Home() {
  return (
    <div id="top" className="flex flex-1 flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-sign focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="flex-1">
        <Hero />
        <Facts />
        <Letter />
        <Plans />
        <Signup />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section
      id="move"
      className="scroll-mt-24 mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-20"
    >
      <div>
        <p className="text-xs font-semibold tracking-[0.22em] text-sign uppercase">
          Thank you, Newmarket
        </p>
        <h1 className="mt-4 font-serif text-[clamp(2.7rem,6vw,4.6rem)] leading-[0.92] tracking-[-0.03em] text-ink">
          We&apos;re moving
          <span className="block">the shop to</span>
          <span className="block italic text-sign">Aurora.</span>
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/80">
          After 32 years in the Upper Canada Mall, we&apos;re moving our
          operations to Aurora. Saturday, October 31 is the last day here. We
          can&apos;t wait to see you.
        </p>
        <div className="mt-5">
          <Countdown />
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#list"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 rounded-none px-5 text-sm font-semibold tracking-[0.14em] uppercase",
            )}
          >
            Send me the new address
          </a>
          <a
            href="#next"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-12 rounded-none border-ink/20 bg-transparent px-5 text-sm font-semibold tracking-[0.14em] text-ink uppercase hover:bg-ink hover:text-paper",
            )}
          >
            What&apos;s coming
          </a>
        </div>
      </div>

      <figure>
        <div className="bg-sign p-2 shadow-[12px_12px_0_0_#0136b2] sm:p-3">
          <Image
            src="/store-team.jpg"
            alt="The Sports Store team standing under the shop sign at Upper Canada Mall, with jerseys on the wall and a small white dog."
            width={660}
            height={598}
            priority
            sizes="(min-width: 1024px) 540px, 100vw"
            className="h-auto w-full"
          />
        </div>
        <figcaption className="mt-4 flex items-start justify-between gap-4 text-sm text-ink/70">
          <span>The team, still at Upper Canada Mall.</span>
          <span className="shrink-0 tracking-[0.14em] uppercase">Newmarket</span>
        </figcaption>
      </figure>
    </section>
  );
}

function Facts() {
  return (
    <section aria-label="The move at a glance" className="bg-sign text-white">
      <dl className="mx-auto grid max-w-6xl gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((fact) => (
          <div key={fact.value} className="bg-sign px-6 py-7 sm:px-8">
            <dt className="font-serif text-3xl tracking-tight">{fact.value}</dt>
            <dd className="mt-2 text-sm leading-snug text-white/75">
              {fact.label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Letter() {
  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <p className="text-xs font-semibold tracking-[0.22em] text-sign uppercase">
          From the floor
        </p>
        <p className="mt-3 font-serif text-4xl leading-none tracking-tight text-ink">
          A long time in one mall.
        </p>
      </div>
      <div className="max-w-xl space-y-5 text-lg leading-relaxed text-ink/85 lg:col-span-7 lg:col-start-6">
        <p>
          The mall has been the shop. Same door, same wall of jerseys, a lot of
          the same faces. Some of you came in as kids and came back tall enough
          for the adult rack.
        </p>
        <p>
          Saturday, October 31 is the last day those doors open in Newmarket.
          After that, the operation is in Aurora. The street address isn&apos;t
          on this page because it isn&apos;t final. Leave your name and
          we&apos;ll send it.
        </p>
        <p className="font-serif text-2xl leading-snug text-ink italic">
          That&apos;s the news. The rest is what the new website is for.
        </p>
      </div>
    </section>
  );
}

function Plans() {
  return (
    <section id="next" className="scroll-mt-24 bg-sign-deep text-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-xs font-semibold tracking-[0.22em] text-white/55 uppercase">
          Not open yet
        </p>
        <h2 className="mt-3 max-w-3xl font-serif text-[clamp(2.4rem,5vw,4.25rem)] leading-[0.95] tracking-[-0.03em]">
          Bigger plans than a new address.
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
          The Aurora shop is the counter. The new website is where the store
          gets wider. Three things are in the works. None of them are for sale
          on this page.
        </p>

        <ol className="mt-14 divide-y divide-white/15 border-y border-white/15">
          <li className="grid items-center gap-10 py-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="font-serif text-sm text-maple italic">01</p>
              <h3 className="mt-2 font-serif text-4xl leading-none tracking-tight sm:text-5xl">
                Custom jerseys, sewn to order.
              </h3>
              <p className="mt-5 text-lg leading-relaxed text-white/75">
                A webstore for licensed jerseys. You choose the jersey. You
                choose the name and the number. We sew them on — not a heat
                press, and not a film that lifts after a season.
              </p>
              <p className="mt-4 text-sm font-semibold tracking-[0.16em] text-white/50 uppercase">
                Opens with the new website
              </p>
            </div>
            <JerseyPlate id="adult" note="Name and number, sewn on" />
          </li>

          <li className="grid items-center gap-10 py-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="font-serif text-sm text-maple italic">02</p>
              <h3 className="mt-2 font-serif text-4xl leading-none tracking-tight sm:text-5xl">
                Vintage. Buy it, or sell it.
              </h3>
              <p className="mt-5 text-lg leading-relaxed text-white/75">
                A buy-and-sell vintage shop. Shop the pieces that already have
                a history, and sell us the one that&apos;s been in a closet
                since a season you still talk about. The Aurora counter will
                take them. So will the website.
              </p>
              <p className="mt-4 text-sm font-semibold tracking-[0.16em] text-white/50 uppercase">
                Opens with the new website
              </p>
            </div>
            <div className="grid grid-cols-2 border border-white/20">
              <div className="border-r border-white/20 p-5 sm:p-7">
                <p className="text-xs font-semibold tracking-[0.18em] text-white/50 uppercase">
                  Buy
                </p>
                <p className="mt-3 font-serif text-3xl leading-none tracking-tight sm:text-4xl">
                  Shop the old ones.
                </p>
              </div>
              <div className="p-5 sm:p-7">
                <p className="text-xs font-semibold tracking-[0.18em] text-white/50 uppercase">
                  Sell
                </p>
                <p className="mt-3 font-serif text-3xl leading-none tracking-tight sm:text-4xl">
                  Bring yours in.
                </p>
              </div>
            </div>
          </li>

          <li className="grid items-center gap-10 py-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="font-serif text-sm text-maple italic">03</p>
              <h3 className="mt-2 font-serif text-4xl leading-none tracking-tight sm:text-5xl">
                The same jerseys, for kids.
              </h3>
              <p className="mt-5 text-lg leading-relaxed text-white/75">
                A kids&apos; section for those custom jerseys. Licensed, in
                kids&apos; sizes, with the name and number sewn on. Same work
                as the adult order, cut for smaller shoulders.
              </p>
              <p className="mt-4 text-sm font-semibold tracking-[0.16em] text-white/50 uppercase">
                Opens with the new website
              </p>
            </div>
            <JerseyPlate id="kids" note="Kids' sizes. Same stitching." compact />
          </li>
        </ol>
      </div>
    </section>
  );
}

function Signup() {
  return (
    <section
      id="list"
      className="scroll-mt-24 mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-20"
    >
      <div>
        <p className="text-xs font-semibold tracking-[0.22em] text-sign uppercase">
          The list
        </p>
        <h2 className="mt-3 font-serif text-[clamp(2.4rem,5vw,4rem)] leading-[0.95] tracking-[-0.03em] text-ink">
          Hear it when we know it.
        </h2>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-ink/80">
          Sign up and we&apos;ll tell you two things: where to find us in
          Aurora, and the day the website opens. Custom jerseys, the vintage
          shop, and the kids&apos; rack come with that site.
        </p>
      </div>
      <SignupForm />
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-ink/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <Wordmark />
          <p className="mt-4 font-serif text-2xl text-ink">Thank you, Newmarket.</p>
        </div>
        <p className="flex items-center gap-2 text-sm text-ink/70">
          <MapleLeaf className="text-maple" />
          Last day at Upper Canada Mall: Saturday, October 31.
        </p>
      </div>
    </footer>
  );
}
