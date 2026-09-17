"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { company } from "@/data/company";
import { navigationLinks } from "@/data/navigation";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SearchOverlay } from "@/components/navbar/search-bar";

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`group flex flex-col items-center ${className}`} aria-label={company.name}>
      <span className="font-display text-[15px] font-medium tracking-[0.32em] text-foreground sm:text-base">
        SHRIMPZ
      </span>
      <span className="mt-0.5 text-[9px] font-medium tracking-[0.28em] text-muted-foreground">
        MANAGEMENT LLC
      </span>
    </Link>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { itemCount } = useCart();
  const { wishlist } = useWishlist();

  useEffect(() => {
    document.body.style.overflow = mobileOpen || searchOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, searchOpen]);

  return (
    <header className="border-b border-border/80 bg-background/90">
      <Container>
        <div className="relative grid h-[68px] grid-cols-3 items-center lg:h-[76px]">
          <nav className="hidden items-center gap-1 lg:flex">
            {navigationLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="px-3 py-2 text-[12px] font-medium uppercase tracking-[0.16em] text-foreground/80 transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
                {link.children && activeDropdown === link.label && (
                  <div className="absolute left-0 top-full z-50 min-w-[220px] border border-border bg-card py-3 shadow-sm">
                    <div className="grid grid-cols-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-[18px] w-[18px]" />
            </Button>
          </div>

          <div className="flex justify-center">
            <Wordmark />
          </div>

          <div className="flex items-center justify-end gap-0.5">
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
            >
              <Search className="h-[18px] w-[18px]" />
            </Button>
            <Button variant="ghost" size="icon" asChild className="hidden h-10 w-10 sm:inline-flex">
              <Link href="/profile" aria-label="Account">
                <User className="h-[18px] w-[18px]" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="relative hidden h-10 w-10 sm:inline-flex">
              <Link href="/wishlist" aria-label="Wishlist">
                <Heart className="h-[18px] w-[18px]" />
                {wishlist.length > 0 && (
                  <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[9px] font-medium text-primary-foreground">
                    {wishlist.length}
                  </span>
                )}
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="relative h-10 w-10">
              <Link href="/cart" aria-label="Cart">
                <ShoppingBag className="h-[18px] w-[18px]" />
                {itemCount > 0 && (
                  <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[9px] font-medium text-primary-foreground">
                    {itemCount}
                  </span>
                )}
              </Link>
            </Button>
          </div>
        </div>
      </Container>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            className="absolute inset-0 bg-foreground/30"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 flex w-[min(100%,20rem)] flex-col bg-background shadow-xl">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <span className="font-display text-sm tracking-[0.24em]">MENU</span>
              <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X className="h-[18px] w-[18px]" />
              </Button>
            </div>
            <nav className="flex-1 overflow-y-auto px-5 py-6">
              <ul className="space-y-1">
                <li>
                  <Link href="/" className="block py-2.5 text-sm tracking-wide" onClick={() => setMobileOpen(false)}>
                    Home
                  </Link>
                </li>
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block py-2.5 text-sm tracking-wide"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <ul className="mb-3 ml-3 space-y-1 border-l border-border pl-3">
                        {link.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block py-1.5 text-sm text-muted-foreground"
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
                <li>
                  <Link href="/new-arrivals" className="block py-2.5 text-sm" onClick={() => setMobileOpen(false)}>
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link href="/best-sellers" className="block py-2.5 text-sm" onClick={() => setMobileOpen(false)}>
                    Best Sellers
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="block py-2.5 text-sm" onClick={() => setMobileOpen(false)}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="block py-2.5 text-sm" onClick={() => setMobileOpen(false)}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/profile" className="block py-2.5 text-sm" onClick={() => setMobileOpen(false)}>
                    Account
                  </Link>
                </li>
                <li>
                  <Link href="/wishlist" className="block py-2.5 text-sm" onClick={() => setMobileOpen(false)}>
                    Wishlist
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
