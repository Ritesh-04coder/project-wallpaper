import * as React from "react";
import { Blocks, Code as CodeXml, CreditCard, Handshake, Scale, Webhook } from "lucide-react";
import { Footer } from "./footer";

const PlausibleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      stroke="currentColor"
      strokeWidth="2"
      d="M4 8.5V23c3 0 6-3 6-5.5h2.5c4 0 7.5-4 7.5-9 0-3-3-7.5-8-7.5S4 5.5 4 8.5Z"
    />
  </svg>
);

const MatomoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      stroke="currentColor"
      strokeMiterlimit="1.4"
      strokeWidth="2"
      d="m13.8 16.3.8.6v-.1l.2-.2a164.4 164.4 0 0 1 .6-.9l.9 1a4.1 4.1 0 0 0 5.3.4c1-.7 1.3-1.8 1.3-2.8 0-1-.5-2-1-2.8l-3-5A3 3 0 0 0 16 5c-.9 0-1.6.3-2 .5-.8.4-1.3 1-1.7 1.8l-1-1.1-.7.7.6-.7a5 5 0 0 0-3-1.3c-1.1 0-2.3.3-3 1.4L1.7 12a4.7 4.7 0 0 0-.7 3.1 4 4 0 0 0 1.2 2c1 .8 2.3.9 3.4.7 1-.2 2.3-.8 2.8-1.9l1 .8a3.6 3.6 0 0 0 3.5 1.2 3.8 3.8 0 0 0 1.5-.9l-.6-.7Zm0 0 .7.7v-.1l-.7-.6Z"
    />
  </svg>
);

const GoogleAnalyticsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M17 5.1v13.5c0 1.6 1 2.4 2 2.4s2-.7 2-2.4V5.2C21 4 20 3 19 3s-2 1-2 2.1Zm-7 7v6.6c0 1.5 1 2.3 2 2.3s2-.7 2-2.3v-6.5c0-1.3-1-2.2-2-2.2s-2 1-2 2.1Zm-3.6 8.3a2 2 0 1 0-2.8-2.8 2 2 0 0 0 2.8 2.8Z"
    />
  </svg>
);

export function FooterDemo() {
  return (
    <Footer
      className="mt-20"
      brand={{
        name: "webtics",
        description: "Track and monitor your website traffic.",
      }}
      socialLinks={[
        { name: "Twitter", href: "https://x.com/raymethula" },
        { name: "Github", href: "https://github.com/serafimcloud" },
        { name: "Discord", href: "#" },
      ]}
      columns={[
        {
          title: "Product",
          links: [
            { name: "Features", Icon: Blocks, href: "#features" },
            { name: "Pricing", Icon: CreditCard, href: "#pricing" },
            { name: "Integrations", Icon: Webhook, href: "#integrations" },
            { name: "API Documentation", Icon: CodeXml, href: "/docs/api" },
          ],
        },
        {
          title: "Compare",
          links: [
            { name: "Plausible", Icon: PlausibleIcon, href: "/compare/plausible" },
            { name: "Matomo", Icon: MatomoIcon, href: "/compare/matomo" },
            {
              name: "Google Analytics",
              Icon: GoogleAnalyticsIcon,
              href: "/compare/google-analytics",
            },
          ],
        },
        {
          title: "Legal",
          links: [
            { name: "Privacy Policy", Icon: Scale, href: "/legal/privacy" },
            { name: "Terms of Service", Icon: Handshake, href: "/legal/terms" },
          ],
        },
      ]}
      copyright="webtics Inc. © 2024"
    />
  );
}