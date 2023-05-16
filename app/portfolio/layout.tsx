import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio — Linkai Wu',
  description: 'A collection of my best projects. I\'m a maker, designer, and student currently based in Maryland. Welcome to my corner of the internet!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
