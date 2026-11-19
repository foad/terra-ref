import { XIcon } from "lucide-react"

import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

export function ZoomableImage({
  src,
  alt,
  className,
  imgClassName,
}: {
  src: string
  alt: string
  className?: string
  imgClassName?: string
}) {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <button
            type="button"
            aria-label={`Enlarge: ${alt}`}
            className={cn(
              "cursor-zoom-in transition-opacity outline-none hover:opacity-90 focus-visible:ring-3 focus-visible:ring-ring/50",
              className
            )}
          />
        }
      >
        <img src={src} alt={alt} loading="lazy" className={imgClassName} />
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        overlayClassName="bg-black/85 supports-backdrop-filter:backdrop-blur-sm"
        className="flex w-auto max-w-[95vw] items-center justify-center bg-transparent p-0 ring-0 sm:max-w-[95vw]"
      >
        <DialogTitle className="sr-only">{alt}</DialogTitle>
        <DialogClose className="cursor-zoom-out outline-none">
          <img src={src} alt={alt} className="max-h-[85vh] max-w-[90vw] object-contain" />
        </DialogClose>
        <DialogClose
          aria-label="Close"
          className="absolute -top-12 right-0 flex size-10 items-center justify-center bg-white/10 text-white hover:bg-white/20"
        >
          <XIcon className="size-5" />
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}
