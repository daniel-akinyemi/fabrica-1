import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

const fieldBase =
  "w-full bg-cream border-2 border-ink rounded-sm px-3 py-2.5 text-sm " +
  "placeholder:text-muted/70 " +
  "focus:bg-paper focus:outline-none";

export function Label({
  htmlFor,
  children,
  required,
  className,
}: {
  htmlFor?: string;
  children: ReactNode;
  required?: boolean;
  className?: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        "block font-mono text-[11px] uppercase tracking-wider text-ink mb-1.5",
        className
      )}
    >
      {children}
      {required && <span className="text-clay ml-1">*</span>}
    </label>
  );
}

export function Field({
  label,
  htmlFor,
  hint,
  required,
  children,
}: {
  label?: string;
  htmlFor?: string;
  hint?: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      {label && (
        <Label htmlFor={htmlFor} required={required}>
          {label}
        </Label>
      )}
      {children}
      {hint && (
        <p className="mt-1 font-mono text-[11px] text-muted">{hint}</p>
      )}
    </div>
  );
}

export function Input(props: ComponentPropsWithoutRef<"input">) {
  return <input {...props} className={cn(fieldBase, props.className)} />;
}

export function Textarea(props: ComponentPropsWithoutRef<"textarea">) {
  return (
    <textarea
      {...props}
      className={cn(fieldBase, "min-h-25 resize-y", props.className)}
    />
  );
}

export function Select(props: ComponentPropsWithoutRef<"select">) {
  return (
    <select
      {...props}
      className={cn(fieldBase, "appearance-none pr-8 cursor-pointer", props.className)}
    />
  );
}
