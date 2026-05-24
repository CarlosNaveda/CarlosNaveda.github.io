'use client';
import { usePathname } from 'next/navigation';
import LeftBarNav from './LeftBarNav';

export default function NavWrapper() {
  const pathname = usePathname();
  return !pathname.startsWith('/blog') ? <LeftBarNav /> : null;
}