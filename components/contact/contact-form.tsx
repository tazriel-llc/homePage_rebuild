"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Magnetic from "@/components/motion/magnetic";
import { liveServices } from "@/content/site";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid work email"),
  company: z.string().min(2, "Please enter your company name"),
  service: z.string().min(1, "Please select a discipline of interest"),
  message: z.string().min(10, "Please share a brief summary of what isn't working"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: liveServices[0]?.slug ?? "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    // Simulating graceful submission / endpoint handoff
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex min-h-[420px] flex-col justify-center border border-line-paper bg-paper p-10 text-ink">
        <span className="font-mono text-micro uppercase tracking-widest text-accent">
          Inquiry Logged
        </span>
        <h3 className="mt-4 font-serif text-3xl font-normal">
          We have received your briefing.
        </h3>
        <p className="mt-4 text-body-l text-muted-paper">
          A senior operator from our leadership team will review your systems and
          respond within 24 hours to schedule an initial diagnostic conversation.
        </p>
        <div className="mt-8">
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="link-wipe text-sm font-medium text-ink"
          >
            Submit another inquiry →
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 border border-line-paper bg-paper p-8 text-ink sm:p-12"
      noValidate
    >
      {/* Name */}
      <div className="relative">
        <label
          htmlFor="name"
          className="block font-mono text-micro font-medium uppercase tracking-wider text-muted-paper"
        >
          Your Name *
        </label>
        <input
          id="name"
          type="text"
          {...register("name")}
          placeholder="Elena Rostova"
          className="mt-2 w-full border-b border-line-paper bg-transparent py-3 text-base text-ink placeholder:text-muted-paper/40 focus:border-accent focus:outline-none"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-accent">{errors.name.message}</p>
        )}
      </div>

      {/* Work Email */}
      <div className="relative">
        <label
          htmlFor="email"
          className="block font-mono text-micro font-medium uppercase tracking-wider text-muted-paper"
        >
          Work Email *
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          placeholder="elena@company.com"
          className="mt-2 w-full border-b border-line-paper bg-transparent py-3 text-base text-ink placeholder:text-muted-paper/40 focus:border-accent focus:outline-none"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-accent">{errors.email.message}</p>
        )}
      </div>

      {/* Company Name */}
      <div className="relative">
        <label
          htmlFor="company"
          className="block font-mono text-micro font-medium uppercase tracking-wider text-muted-paper"
        >
          Company Name *
        </label>
        <input
          id="company"
          type="text"
          {...register("company")}
          placeholder="Acme Operations Corp"
          className="mt-2 w-full border-b border-line-paper bg-transparent py-3 text-base text-ink placeholder:text-muted-paper/40 focus:border-accent focus:outline-none"
        />
        {errors.company && (
          <p className="mt-1 text-xs text-accent">{errors.company.message}</p>
        )}
      </div>

      {/* Service of Interest */}
      <div className="relative">
        <label
          htmlFor="service"
          className="block font-mono text-micro font-medium uppercase tracking-wider text-muted-paper"
        >
          Primary Discipline *
        </label>
        <select
          id="service"
          {...register("service")}
          className="mt-2 w-full border-b border-line-paper bg-transparent py-3 text-base text-ink focus:border-accent focus:outline-none"
        >
          {liveServices.map((s) => (
            <option key={s.slug} value={s.slug} className="bg-paper text-ink">
              {s.name} ({s.discipline})
            </option>
          ))}
        </select>
        {errors.service && (
          <p className="mt-1 text-xs text-accent">{errors.service.message}</p>
        )}
      </div>

      {/* Message */}
      <div className="relative">
        <label
          htmlFor="message"
          className="block font-mono text-micro font-medium uppercase tracking-wider text-muted-paper"
        >
          What isn&rsquo;t working? *
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          placeholder="Describe the current operational friction, platform requirements, or capacity constraints..."
          className="mt-2 w-full border-b border-line-paper bg-transparent py-3 text-base text-ink placeholder:text-muted-paper/40 focus:border-accent focus:outline-none"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-accent">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <Magnetic>
          <button
            type="submit"
            disabled={loading}
            className="group inline-flex items-center gap-3 bg-ink px-10 py-4 text-sm font-medium text-paper transition-all duration-300 hover:bg-ink-raised disabled:opacity-50"
          >
            <span>{loading ? "Transmitting..." : "Initiate Consultation"}</span>
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </button>
        </Magnetic>
      </div>
    </form>
  );
}
