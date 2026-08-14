"use client";

import { ReactNode, useCallback, useEffect, useRef, useState } from "react";

interface VideoLightboxProps {
  /** YouTube video id, e.g. "huWsHT-AX5s" */
  videoId: string;
  /** Used as the dialog's accessible name */
  title: string;
  /** The visual trigger — thumbnail, card, etc. */
  children: ReactNode;
  className?: string;
}

/**
 * Plays a YouTube video in an in-page modal rather than sending the visitor
 * off to youtube.com. Falls back to nothing unusual for keyboard users:
 * the trigger is a real button, Escape closes, focus returns to the trigger,
 * and background scroll is locked while open.
 */
export default function VideoLightbox({
  videoId,
  title,
  children,
  className = "",
}: VideoLightboxProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      // send focus back where it came from
      triggerRef.current?.focus();
    };
  }, [open, close]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className={`group block w-full text-left cursor-pointer ${className}`}
      >
        {children}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={close}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/92 backdrop-blur-sm p-4 sm:p-8"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close video"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full border border-kraft/30 text-kraft hover:bg-brass hover:text-ink hover:border-brass transition-colors flex items-center justify-center"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
              <path d="M3 3l10 10M13 3L3 13" strokeLinecap="round" />
            </svg>
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl"
          >
            <div className="aspect-video overflow-hidden rounded-md border border-rule bg-ink">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <p className="font-mono text-xs tracking-widest uppercase text-kraft/70 mt-4 text-center">
              Press Esc to close
            </p>
          </div>
        </div>
      )}
    </>
  );
}
