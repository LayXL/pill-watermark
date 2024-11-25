"use client"

import { useSafeAreaInsets } from "@/shared/hooks/use-safe-area-insets"

export const SafeAreaInsetsInspector = () => {
  const safeAreaInsets = useSafeAreaInsets()

  return (
    <div className={"h-screen w-screen grid place-items-center"}>
      <div>
        <p>Top: {safeAreaInsets.top}</p>
        <p>Right: {safeAreaInsets.right}</p>
        <p>Bottom: {safeAreaInsets.bottom}</p>
        <p>Left: {safeAreaInsets.left}</p>
      </div>
    </div>
  )
}
