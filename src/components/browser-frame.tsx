import { cn } from "@/lib/utils"

export function BrowserFrame({
  src,
  alt,
  url = "terra.foad.dev/dashboard",
  className,
}: {
  src: string
  alt: string
  url?: string
  className?: string
}) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-md bg-white shadow-[0_20px_50px_-12px_rgba(35,46,61,0.35)] ring-1 ring-black/10",
        className
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-undp-gray-300 bg-undp-gray-200 px-3 py-2">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 truncate rounded-sm bg-white px-3 py-0.5 text-[11px] text-undp-gray-600">
          {url}
        </span>
      </div>
      <img src={src} alt={alt} className="block w-full" loading="lazy" />
    </figure>
  )
}
