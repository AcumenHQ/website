"use client";

import Link from "next/link";

const footerLinks = {
  Platform: [
    { label: "Courses", href: "#courses" },
    { label: "Job Board", href: "#jobs" },
    { label: "Mentorship", href: "#" },
    { label: "Reputation", href: "#reputation" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "Community", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Help Center", href: "#" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Smart Contracts", href: "#" },
  ],
};

const socialLinks = [
  { icon: "simple-icons:twitter", href: "#" },
  { icon: "simple-icons:discord", href: "#" },
  { icon: "simple-icons:github", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050505] pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded bg-neutral-800 flex items-center justify-center text-white">
                <iconify-icon icon="lucide:hexagon" width="14" />
              </div>
              <span className="text-base font-semibold text-white">ACUMEN</span>
            </Link>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Democratizing Web3 education and employment through on-chain
              reputation and verified skills.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-medium mb-4 text-sm">{category}</h4>
              <ul className="space-y-2 text-xs text-neutral-500">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-neutral-600">
          <p>© 2025 Acumen Platform. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {socialLinks.map((social) => (
              <a
                key={social.icon}
                href={social.href}
                className="hover:text-white transition-colors"
              >
                <iconify-icon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
