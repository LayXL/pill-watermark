import { SafeAreaInsetsInspector } from "@/shared/ui/safe-area-insets-inspector"
import { IslandWatermark } from "../../../../packages/pill-watermark"

export default function Page() {
  return (
    <>
      <IslandWatermark>
        <div className="size-full rounded-full bg-emerald-600 grid place-items-center">
          Yep!
        </div>
      </IslandWatermark>
      <SafeAreaInsetsInspector />
    </>
  )
}
