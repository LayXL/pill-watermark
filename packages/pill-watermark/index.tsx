"use client"

import { type ReactNode, useMemo } from "react"
import "./styles.css"

type PillWatermarkProps = {
  children?: ReactNode
  alwaysVisible?: boolean
  customPaddingForNotch?: number
}

export const PillWatermark = (props: PillWatermarkProps) => {
  const isIphone = useMemo(
    () => window.navigator.userAgent.includes("iPhone"),
    []
  )

  const minScreen = useMemo(
    () =>
      Math.min(window.screen.height, window.screen.width) *
      window.devicePixelRatio,
    []
  )

  const pixelRatio = useMemo(() => window.devicePixelRatio, [])

  const insets = useMemo(() => {
    const insets = [
      "safe-area-inset-top",
      "safe-area-inset-right",
      "safe-area-inset-bottom",
      "safe-area-inset-left",
    ]

    for (const inset of insets)
      document.documentElement.style.setProperty(`--${inset}`, `env(${inset})`)

    const [top, right, bottom, left] = insets.map((inset) =>
      Number.parseInt(
        window
          .getComputedStyle(document.documentElement)
          .getPropertyValue(`--${inset}`) || "0"
      )
    )

    return { top, bottom, left, right }
  }, [])

  const offset = useMemo(() => {
    let offset = 0

    if (minScreen === 1320 || minScreen === 1206) offset = 43
    if (minScreen === 1290 || minScreen === 1290) offset = 35
    if (minScreen === 1179) offset = 35

    if (minScreen === 960 && insets.top === 49) offset = 35
    if (minScreen === 960 && insets.top === 48) offset = 28

    if (minScreen === 1125 && insets.top === 51) offset = 31
    if (minScreen === 1125 && insets.top === 53) offset = 36

    return offset / pixelRatio
  }, [minScreen, pixelRatio, insets.top])

  const height = useMemo(() => {
    if (minScreen === 1320 || minScreen === 1206) return 36
    if (minScreen === 1290 || minScreen === 1290) return 36
    if (minScreen === 1179) return 36

    if (minScreen === 960 && insets.top === 49) return 28
    if (minScreen === 960 && insets.top === 48) return 29

    if (minScreen === 1125 && insets.top === 51) return 31
    if (minScreen === 1125 && insets.top === 53) return 31
  }, [minScreen, insets.top])

  const width = useMemo(() => {
    if (minScreen === 1320 || minScreen === 1206) return 124
    if (minScreen === 1290 || minScreen === 1290) return 124
    if (minScreen === 1179) return 124

    if (minScreen === 960 && insets.top === 49) return 99
    if (minScreen === 960 && insets.top === 48) return 101

    if (minScreen === 1125 && insets.top === 51) return 108
    if (minScreen === 1125 && insets.top === 53) return 100
  }, [minScreen, insets.top])

  const bakedClassNames = useMemo(
    () =>
      ["pill-watermark-wrapper", props.alwaysVisible && "always-visible"]
        .filter(Boolean)
        .join(" "),
    [props.alwaysVisible]
  )

  const bakedStyles = useMemo(
    () => ({
      "--offset": `${offset ?? props.customPaddingForNotch ?? 4}px`,
      "--width": `${width}px`,
      "--height": `${height}px`,
    }),
    [offset, width, height, props.customPaddingForNotch]
  )

  if (!isIphone && !props.alwaysVisible) return

  return (
    <div className={bakedClassNames} style={bakedStyles}>
      <div className={"island-watermark"} children={props.children} />
    </div>
  )
}
