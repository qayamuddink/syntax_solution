"use client";

import { useState, useRef, useEffect } from "react";
import type { FormFieldConfig } from "@/lib/types";
import { TechnicalLabel } from "@/components/ui/technical-label";

export function FormField({ id, label, type, required, options, placeholder }: FormFieldConfig) {
  const [selectedValue, setSelectedValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const inputClassName =
    "mt-2 w-full rounded-md border border-border bg-surface px-4 py-3 text-xs font-mono text-foreground outline-none transition-all duration-150 ease-out placeholder:text-muted-foreground/80 focus:border-accent focus:ring-1 focus:ring-accent/30";

  return (
    <div className="block">
      <label htmlFor={id} className="block cursor-pointer">
        <TechnicalLabel className="text-muted-foreground">{label}</TechnicalLabel>
      </label>
      {type === "textarea" ? (
        <textarea
          className={inputClassName}
          id={id}
          name={id}
          placeholder={placeholder}
          required={required}
          rows={4}
        />
      ) : null}

      {type === "select" ? (
        <div className="relative mt-2" ref={dropdownRef}>
          <input type="hidden" id={id} name={id} value={selectedValue} required={required} />
          
          <button
            type="button"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            onClick={() => setIsOpen(!isOpen)}
            onKeyDown={(e) => {
              if (e.key === "Escape") setIsOpen(false);
              if (e.key === "ArrowDown" && !isOpen) setIsOpen(true);
            }}
            className={`w-full flex items-center justify-between rounded-md border bg-surface px-4 py-3 text-xs font-mono transition-all duration-150 ease-out outline-none focus-visible:border-accent focus-visible:ring-1 focus-visible:ring-accent/30 ${
              isOpen
                ? "border-accent ring-1 ring-accent/30 text-foreground"
                : "border-border text-foreground hover:border-accent/50"
            }`}
          >
            <span className={selectedValue ? "text-foreground font-medium" : "text-muted-foreground/80"}>
              {selectedValue || placeholder || "Select an option..."}
            </span>
            <svg
              className={`size-3.5 text-accent transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && options && (
            <div className="absolute left-0 right-0 top-full z-50 mt-1.5 overflow-hidden rounded-xl border border-border bg-surface-elevated p-1.5 shadow-[0_16px_40px_rgba(0,0,0,0.25)] backdrop-blur-md animate-in fade-in slide-in-from-top-1 duration-150">
              <div className="max-h-56 overflow-y-auto space-y-0.5 font-mono text-xs">
                {options.map((option) => {
                  const isSelected = selectedValue === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        setSelectedValue(option);
                        setIsOpen(false);
                      }}
                      className={`w-full flex items-center justify-between rounded-lg px-3.5 py-2.5 text-left transition-all duration-150 ${
                        isSelected
                          ? "bg-accent/15 text-accent font-semibold"
                          : "text-muted-foreground hover:bg-accent/10 hover:text-foreground"
                      }`}
                    >
                      <span>{option}</span>
                      {isSelected && (
                        <span className="text-accent text-[11px] font-bold">✓</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      ) : null}

      {type !== "textarea" && type !== "select" ? (
        <input
          className={inputClassName}
          id={id}
          name={id}
          placeholder={placeholder}
          required={required}
          type={type}
        />
      ) : null}
    </div>
  );
}


