import { SafeAreaInsetsInspector } from "@/shared/ui/safe-area-insets-inspector"
import { PillWatermark } from "pill-watermark"

export default function Page() {
  return (
    <>
      <PillWatermark>
        <div className="size-full rounded-full bg-emerald-600 grid place-items-center">
          Yep!
        </div>
      </PillWatermark>
      <SafeAreaInsetsInspector />
    </>
  )
}
