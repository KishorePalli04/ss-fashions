import { whatsappUrl } from "@/lib/site-config";
import { WhatsAppIcon } from "@/components/icons";

/**
 * Persistent floating "Order via WhatsApp" action — always one tap away as the
 * visitor scrolls, which is the primary conversion goal for the store.
 */
export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order via WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] py-3.5 pl-4 pr-4 text-white shadow-lg shadow-emerald-900/20 transition-all hover:pr-5 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 sm:bottom-6 sm:right-6"
    >
      <span className="relative flex">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40" />
        <WhatsAppIcon className="relative h-6 w-6" />
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[8rem] group-hover:opacity-100">
        Order now
      </span>
    </a>
  );
}
