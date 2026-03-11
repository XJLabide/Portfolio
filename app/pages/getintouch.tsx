"use client";

import { FormEvent, useState } from "react";
import {
  ArrowUpRight,
  InstagramIcon,
  LinkedinIcon,
  Loader2,
  MailIcon,
} from "lucide-react";
import SocialsCard from "../components/custom/socialscard";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { sendEmail } from "../lib/Email/sendEmail";

type FormStatus = {
  success: boolean | null;
  message: string;
};

export default function Getintouch() {
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    setIsLoading(true);
    setFormStatus(null);

    const result = await sendEmail(form);
    setFormStatus(result);

    if (result.success) {
      form.reset();
    }

    setIsLoading(false);
  };

  return (
    <section className="relative overflow-hidden bg-[#050505] px-4 py-24 text-[#f6f1e8] sm:px-6 lg:px-10">
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:92px_92px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(194,255,107,0.08),_transparent_25%),radial-gradient(circle_at_82%_28%,_rgba(255,123,84,0.08),_transparent_22%),linear-gradient(180deg,_#050505,_#060914)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col gap-14">
        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="max-w-4xl">
            <p className="text-[11px] uppercase tracking-[0.38em] text-[#f6f1e8]/42">
              Contact / Collaboration
            </p>
            <h2 className="mt-5 text-[14vw] font-black uppercase leading-[0.84] tracking-[-0.09em] text-[#f6f1e8] sm:text-[10vw] lg:text-[6vw]">
              Let&apos;s build
              <span className="block text-[#c2ff6b]">something real</span>
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="max-w-3xl text-xl leading-relaxed text-[#f6f1e8]/78 sm:text-2xl">
              AI automations, RAG-informed products, internal tools, or polished
              interfaces for teams that need execution, not fluff.
            </p>
            <div className="rounded-full border border-white/10 px-4 py-3 text-[10px] uppercase tracking-[0.32em] text-[#ff7b54]">
              Select client work + NDA experience
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.74fr_1.26fr]">
          <div className="space-y-5">
            <div className="rounded-[2.4rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-6 sm:p-7">
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#f6f1e8]/42">
                Fit / Working style
              </p>
              <div className="mt-5 space-y-4 text-base leading-8 text-[#f6f1e8]/68">
                <p>
                  Best for teams that need product sense, interface clarity, and actual
                  implementation in one place.
                </p>
                <p>
                  NDA-safe. If the project is sensitive, a high-level brief is enough to
                  start the conversation.
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.8rem] border border-white/10 bg-black/25 p-5">
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#f6f1e8]/38">
                  Focus
                </p>
                <p className="mt-3 text-xl font-medium leading-tight text-[#f6f1e8]">
                  AI systems, tooling, product UX
                </p>
              </div>
              <div className="rounded-[1.8rem] border border-white/10 bg-black/25 p-5">
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#f6f1e8]/38">
                  Working style
                </p>
                <p className="mt-3 text-xl font-medium leading-tight text-[#f6f1e8]">
                  Direct, strategic, execution-first
                </p>
              </div>
            </div>

            <div className="space-y-3 border-t border-white/10 pt-2">
              <SocialsCard
                title="Email"
                icon={<MailIcon className="h-5 w-5" />}
                description="labide.xj@gmail.com"
                href="mailto:labide.xj@gmail.com"
                accent="#c2ff6b"
              />
              <SocialsCard
                title="LinkedIn"
                icon={<LinkedinIcon className="h-5 w-5" />}
                description="Connect professionally"
                href="https://www.linkedin.com/in/labidexj/"
                accent="#ff7b54"
              />
              <SocialsCard
                title="Instagram"
                icon={<InstagramIcon className="h-5 w-5" />}
                description="@xanderymilk"
                href="https://instagram.com/xanderymilk"
                accent="#7dd3fc"
              />
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.7rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-6 sm:p-8">
            <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:64px_64px]" />
            <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-[#c2ff6b]/10 blur-3xl" />
            <div className="absolute bottom-10 right-10 h-32 w-32 rounded-full bg-[#ff7b54]/10 blur-3xl" />

            <div className="relative z-10">
              <div className="border-b border-white/10 pb-6">
                <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
                  <p className="text-sm leading-7 text-[#f6f1e8]/64">
                    Public case studies are limited by client confidentiality. If your work is
                    sensitive, high-level context is enough to start.
                  </p>
                </div>

                <div className="mt-6 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
                  <div className="max-w-xl">
                    <p className="text-[11px] uppercase tracking-[0.34em] text-[#f6f1e8]/42">
                      Start a conversation
                    </p>
                    <h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-[#f6f1e8] sm:text-[2.5rem]">
                      Tell me what you&apos;re building.
                    </h3>
                    <p className="mt-4 max-w-xl text-base leading-7 text-[#f6f1e8]/62">
                      Share the problem, what already exists, and what kind of outcome you
                      want to ship.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[1.2rem] border border-white/10 bg-black/20 px-4 py-4">
                      <p className="text-[10px] uppercase tracking-[0.26em] text-[#c2ff6b]">
                        01 Goal
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[#f6f1e8]/68">
                        What needs to be built or improved
                      </p>
                    </div>
                    <div className="rounded-[1.2rem] border border-white/10 bg-black/20 px-4 py-4">
                      <p className="text-[10px] uppercase tracking-[0.26em] text-[#ff7b54]">
                        02 Bottleneck
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[#f6f1e8]/68">
                        Where the current flow or system breaks
                      </p>
                    </div>
                    <div className="rounded-[1.2rem] border border-white/10 bg-black/20 px-4 py-4">
                      <p className="text-[10px] uppercase tracking-[0.26em] text-[#7dd3fc]">
                        03 Timeline
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[#f6f1e8]/68">
                        Urgency, milestones, or launch window
                      </p>
                    </div>
                    <div className="rounded-[1.2rem] border border-white/10 bg-black/20 px-4 py-4">
                      <p className="text-[10px] uppercase tracking-[0.26em] text-[#f6f1e8]/62">
                        04 AI Scope
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[#f6f1e8]/68">
                        Whether AI is already in the stack or still undefined
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label
                      htmlFor="name"
                      className="text-[11px] uppercase tracking-[0.28em] text-[#f6f1e8]/62"
                    >
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      className="mt-2 border border-white/12 bg-black/35 text-white placeholder:text-white/30"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-[11px] uppercase tracking-[0.28em] text-[#f6f1e8]/62">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      className="mt-2 border border-white/12 bg-black/35 text-white placeholder:text-white/30"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="message"
                    className="text-[11px] uppercase tracking-[0.28em] text-[#f6f1e8]/62"
                  >
                    Project brief
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="What are you building, what problem are you solving, and what kind of help do you need?"
                    rows={8}
                    className="mt-2 w-full resize-none rounded-[1.6rem] border border-white/12 bg-black/35 px-5 py-4 text-base text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#c2ff6b]/20"
                    required
                  />
                </div>

                {formStatus && (
                  <div
                    className={`rounded-[1.2rem] border px-4 py-3 text-sm ${
                      formStatus.success
                        ? "border-[#c2ff6b]/25 bg-[#c2ff6b]/8 text-[#d9ff9f]"
                        : "border-[#ff7b54]/25 bg-[#ff7b54]/8 text-[#ffb7a3]"
                    }`}
                  >
                    {formStatus.message}
                  </div>
                )}

                <div className="flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-sm text-sm leading-6 text-[#f6f1e8]/50">
                    Short is fine. Just give enough context to understand the real problem.
                  </p>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-[#f6f1e8] px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-black transition-transform duration-300 hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending
                      </>
                    ) : (
                      <>
                        Send inquiry
                        <ArrowUpRight className="h-4 w-4 text-[#ff7b54]" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
