import type { FormFieldConfig } from "@/lib/types";
import { TechnicalLabel } from "@/components/ui/technical-label";

export function FormField({ id, label, type, required, options, placeholder }: FormFieldConfig) {
  const className =
    "mt-2 w-full rounded-md border border-border bg-surface px-4 py-3 text-xs font-mono text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/60 focus:border-accent focus:ring-1 focus:ring-accent/30";

  return (
    <label className="block" htmlFor={id}>
      <TechnicalLabel className="text-muted-foreground">{label}</TechnicalLabel>
      {type === "textarea" ? (
        <textarea
          className={className}
          id={id}
          name={id}
          placeholder={placeholder}
          required={required}
          rows={4}
        />
      ) : null}
      {type === "select" ? (
        <select className={className} defaultValue="" id={id} name={id} required={required}>
          {placeholder ? <option value="" disabled>{placeholder}</option> : null}
          {options?.map((option) => (
            <option className="bg-surface text-foreground" key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : null}
      {type !== "textarea" && type !== "select" ? (
        <input
          className={className}
          id={id}
          name={id}
          placeholder={placeholder}
          required={required}
          type={type}
        />
      ) : null}
    </label>
  );
}

