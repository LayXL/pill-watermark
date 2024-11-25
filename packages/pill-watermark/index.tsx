"use client"

import type { ReactNode } from "react"
import "./styles.css"

type ScreenWidth = 1320 | 1206 | 1290 | 1179

const isIphone =
  typeof window !== "undefined" && window.navigator.userAgent.includes("iPhone")

const minScreen =
  typeof window !== "undefined" &&
  Math.min(window.screen.height, window.screen.width) * window.devicePixelRatio

const calculatedOffset: Record<ScreenWidth, number> | false = typeof window !==
  "undefined" && {
  1320: 43 / window.devicePixelRatio,
  1206: 43 / window.devicePixelRatio,
  1290: 35 / window.devicePixelRatio,
  1179: 35 / window.devicePixelRatio,
}

type PillWatermarkProps = {
  children?: ReactNode
  alwaysVisible?: boolean
  customPaddingForNotch?: number
}

export const PillWatermark = (props: PillWatermarkProps) => {
  const offset =
    calculatedOffset &&
    (calculatedOffset[minScreen as ScreenWidth] as number | undefined)

  if (!isIphone && !props.alwaysVisible) return

  return (
    <div
      className={[
        "pill-watermark-wrapper",
        props.alwaysVisible && "always-visible",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        "--offset": `${offset ?? props.customPaddingForNotch ?? 4}px`,
        "--width": `${offset ? 124 : 124}px`,
        "--height": `${offset ? 36 : 28}px`,
      }}
    >
      <div className={"island-watermark"} children={props.children} />
    </div>
  )
}
