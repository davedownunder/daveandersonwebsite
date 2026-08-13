import { ReactNode } from "react";

interface ShopTagProps {
  children: ReactNode;
  className?: string;
}

export default function ShopTag({ children, className = "" }: ShopTagProps) {
  return <span className={`shop-tag ${className}`}>{children}</span>;
}
