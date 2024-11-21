"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";

const navLinks = [
  { name: "Cayenne", href: "/" },
  { name: "Vehicles", href: "/veichles" },
  { name: "Support", href: "/support" },
  { name: "Login", href: "/login" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html>
      <body>
        <div>
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                href={link.href}
                key={link.name}
                className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
              >
                {link.name}
              </Link>
            );
          })}
          {children}
        </div>
      </body>
    </html>
  );
}
