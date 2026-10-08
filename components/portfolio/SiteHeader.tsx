"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#work", label: "Projects" },
  { href: "/work/spiral-one", label: "Spiral One" },
  { href: "/#about", label: "About" },
  { href: "/resume/Kareem_Singleton_Resume_2026.pdf", label: "Resume", external: true },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const priorOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusable = () => panelRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? [];
    const first = focusable()[0];
    first?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); triggerRef.current?.focus(); }
      if (event.key !== "Tab") return;
      const items = [...focusable()];
      if (!items.length) return;
      const active = document.activeElement as HTMLElement;
      const firstItem = items[0], lastItem = items.at(-1)!;
      if (event.shiftKey && active === firstItem) { event.preventDefault(); lastItem.focus(); }
      if (!event.shiftKey && active === lastItem) { event.preventDefault(); firstItem.focus(); }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = priorOverflow; window.removeEventListener("keydown", onKeyDown); };
  }, [open]);

  const close = () => setOpen(false);
  return <header className="site-header">
    <div className="site-header__inner">
      <Link href="/" className="site-brand">Kareem Singleton</Link>
      <nav className="site-nav" aria-label="Primary navigation">
        {links.map(({ href, label, external }) => <Link key={label} href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>{label}</Link>)}
      </nav>
      <button ref={triggerRef} className="site-menu-trigger" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>
        <span className="sr-only">{open ? "Close navigation" : "Open navigation"}</span>{open ? <X /> : <Menu />}
      </button>
    </div>
    {open && <div className="site-menu-backdrop" onMouseDown={close}>
      <nav ref={panelRef} id="mobile-navigation" className="site-mobile-nav" aria-label="Mobile navigation" aria-modal="true" role="dialog" onMouseDown={(event) => event.stopPropagation()}>
        <div className="site-mobile-nav__heading"><span>Navigation</span><button type="button" onClick={close} aria-label="Close navigation"><X /></button></div>
        {links.map(({ href, label, external }) => <Link key={label} href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} onClick={close}>{label}</Link>)}
      </nav>
    </div>}
  </header>;
}
