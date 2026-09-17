"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { searchProducts } from "@/data/products";
import { Input } from "@/components/ui/input";
import { formatPrice } from "@/lib/format";
import { Button } from "@/components/ui/button";

export function SearchBar() {
  return null;
}

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const searchResults = searchQuery.length > 0 ? searchProducts(searchQuery).slice(0, 6) : [];

  useEffect(() => {
    if (open) {
      setSearchQuery("");
      const t = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [open]);

  if (!open) return null;

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[60]">
      <button className="absolute inset-0 bg-foreground/25" aria-label="Close search" onClick={onClose} />
      <div className="relative mx-auto mt-0 w-full max-w-2xl border-b border-border bg-background px-4 py-5 shadow-lg sm:mt-16 sm:border sm:px-6">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">Search</p>
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close search">
            <X className="h-4 w-4" />
          </Button>
        </div>
        <form onSubmit={handleSearchSubmit}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              ref={inputRef}
              type="search"
              placeholder="Search home, kitchen, travel, apparel..."
              className="h-12 rounded-sm border-border bg-card pl-10 pr-4"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </form>
        {searchQuery.trim().length > 0 && (
          <div className="mt-3">
            {searchResults.length > 0 ? (
              <>
                {searchResults.map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.slug}`}
                    className="flex items-center gap-3 px-1 py-2.5 transition-colors hover:bg-muted"
                    onClick={onClose}
                  >
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden border border-border bg-muted">
                      <Image src={product.images[0]} alt={product.name} fill className="object-cover" sizes="48px" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{product.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {product.category} · {formatPrice(product.salePrice ?? product.price)}
                      </p>
                    </div>
                  </Link>
                ))}
                <button
                  type="button"
                  className="mt-1 w-full border-t border-border px-1 py-3 text-left text-sm text-accent hover:underline"
                  onClick={() => {
                    router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
                    onClose();
                  }}
                >
                  View all results for “{searchQuery}”
                </button>
              </>
            ) : (
              <p className="px-1 py-4 text-sm text-muted-foreground">No products found for “{searchQuery}”.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
