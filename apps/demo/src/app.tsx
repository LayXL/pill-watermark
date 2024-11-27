import { PillWatermark } from "pill-watermark"
import "pill-watermark/dist/index.css"
import ExampleIcon from "@/example-icon.svg?react"
import { PreviewPillWatermark } from "@/preview-pill-watermark.tsx"

export default function App() {
  return (
    <>
      <PillWatermark>
        <div className="size-full bg-gradient-to-br from-orange-600 to-orange-400 grid place-items-center">
          <span className="text-white font-bold">PW</span>
        </div>
      </PillWatermark>
      <div className="h-screen pt-safe-area overflow-scroll">
        <div className="p-4 flex flex-col gap-1">
          <PreviewPillWatermark>
            <div className="size-full bg-gradient-to-br from-orange-600 to-orange-400 grid place-items-center">
              <span className="text-white font-bold">PW</span>
            </div>
          </PreviewPillWatermark>
          <PreviewPillWatermark>
            <div className="rounded-full px-2 w-max bg-indigo-500 flex gap-1 items-center">
              <ExampleIcon width={16} height={16} />
              <p className={"font-medium"}>Acme</p>
            </div>
          </PreviewPillWatermark>
        </div>
      </div>
    </>
  )
}
