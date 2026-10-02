import { Mail, Phone } from "lucide-react";
import { quickLinks, sitemapLinks, socialLinks } from "../data/data";
import Animated from "./Animated";

const Footer = () => {
  return (
    <footer className="px-auto relative mt-44 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Row */}
        <div className="flex flex-wrap gap-6 justify-between pb-8">
          {/* Column 1 - Brand & Social */}
          <div className="flex flex-col items-start text-left">
            <Animated>
              <img src="/assets/logo.svg" alt="logo" />
            </Animated>
            <Animated delay={0.2}>
              <p className="mt-3 text-sm/5.5 text-zinc-600 max-w-81.25">
                Serving freshly prepared dishes with authentic flavors, premium ingredients and exceptional hospitality
                every day.
              </p>
            </Animated>
            <div className="flex items-center gap-1.5 mt-6">
              {socialLinks.map((item, i) => (
                <Animated key={i} delay={i * 0.5}>
                  <a
                    href={item.href}
                    className="size-7.5 rounded-full border border-slate-300 grid place-content-center"
                  >
                    {item.icon}
                  </a>
                </Animated>
              ))}
            </div>
          </div>
          {/* Column 2 - Quick Links */}
          <div>
            <p className="font-medium mb-5">Quick Links</p>
            <div className="flex flex-col gap-2.5">
              {quickLinks.map((link, i) => (
                <Animated key={i} delay={i * 0.05}>
                  <a href={link.href} className="text-zinc-600 hover:text-zinc-500">
                    {link.name}
                  </a>
                </Animated>
              ))}
            </div>
          </div>
          {/* Column 3 - Get in Touch */}
          <div>
            <p className="font-medium mb-5">Get in Touch</p>
            <div className="space-y-2">
              <Animated>
                <a
                  href="mailto:akhileshch420@gmailcom"
                  className="flex items-center gap-1 text-zinc-600 hover:text-zinc-500"
                >
                  <Mail size={16} className="shrink-0" />
                  akhileshch420@gmail.com
                </a>
              </Animated>
              <Animated>
                <a href="tel:911-396-4523" className="flex items-center gap-1 text-zinc-600 hover:text-zinc-500">
                  <Phone size={16} className="shrink-0" />
                  911-396-4523
                </a>
              </Animated>
            </div>
          </div>
          {/* Column 4 - Sitemap */}
          <div>
            <p className="font-medium mb-5">Sitemap</p>
            <div className="flex flex-col gap-2.5">
              {sitemapLinks.map((link, i) => (
                <Animated key={i} delay={i * 0.05}>
                  <a href={link.href} className="text-zinc-600 hover:text-zinc-500">
                    {link.name}
                  </a>
                </Animated>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t text-zinc-500 border-slate-200 py-4.5 flex items-center justify-between">
          <p>© 2026. All Right Reserved.</p>
          <p>
            Designed by <a href="https://github.com/akhileshchauhan8712">akhileshchauhan8712</a>
          </p>
        </div>
      </div>
      {/* Watermark logo backdrop */}
      <div className="absolute inset-0 text-center select-none -z-1 pointer-events-none">
        <span className="text-[300px] tracking-wide font-urbanist font-semibold text-zinc-100/70">Restro</span>
      </div>
    </footer>
  );
};

export default Footer;
