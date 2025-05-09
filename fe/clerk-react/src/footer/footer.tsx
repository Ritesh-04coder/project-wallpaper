import * as React from "react";
import { cn } from "../lib/utils";

interface FooterProps {
  className?: string;
  brand?: {
    name: string;
    description: string;
  };
  socialLinks?: {
    name: string;
    href: string;
  }[];
  columns?: {
    title: string;
    links: {
      name: string;
      href: string;
      Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
    }[];
  }[];
  copyright?: string;
  gradientFrom?: string;
}

export const Footer: React.FC<FooterProps> = ({
  className = "",
  brand,
  socialLinks,
  columns,
  copyright,
  gradientFrom = "from-white/[0.08]",
}) => {
  return (
    <footer
      className={cn(
        "relative overflow-hidden",
        "bg-gradient-to-r",
        gradientFrom,
        "to-transparent",
        "backdrop-blur-[2px]",
        "border-t border-white/[0.15]",
        "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="col-span-1 lg:col-span-1">
            <h2 className="text-xl font-bold text-white">{brand?.name}</h2>
            <p className="mt-2 text-white/[0.85]">{brand?.description}</p>
            <div className="mt-4 flex space-x-4">
              {socialLinks?.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/[0.65] hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

    
          {columns?.map((col) => (
            <div key={col.title} className="col-span-1">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="flex items-center text-white/[0.85] hover:text-white"
                    >
                      {link.Icon && (
                        <link.Icon className="h-5 w-5 mr-2 text-white/[0.65]" />
                      )}
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      
        <div className="mt-8 pt-8 border-t border-white/[0.15]">
          <p className="text-sm text-white/[0.65] text-center">{copyright}</p>
        </div>
      </div>
    </footer>
  );
};
