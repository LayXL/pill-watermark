"use client"

import { useCallback, useEffect, useState } from "react"

const isEqualJSON = (json1 = {}, json2 = {}) => {
  return JSON.stringify(json1) === JSON.stringify(json2)
}

export const useSafeAreaInsets = () => {
  const [safeArea, setSafeArea] = useState({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  })
  const insets = [
    "safe-area-inset-top",
    "safe-area-inset-right",
    "safe-area-inset-bottom",
    "safe-area-inset-left",
  ]

  useEffect(() => {
    for (const inset of insets) {
      document.documentElement.style.setProperty(`--${inset}`, `env(${inset})`)
    }
  }, [])

  const getOffsets = useCallback(() => {
    const [top, right, bottom, left] = insets.map((inset) =>
      Number.parseInt(
        window
          .getComputedStyle(document.documentElement)
          .getPropertyValue(`--${inset}`) || "0"
      )
    )

    return { top, bottom, left, right }
  }, [])

  const update = useCallback(() => {
    setSafeArea((oldSafeArea) => {
      const newSafeArea = getOffsets()
      if (!isEqualJSON(oldSafeArea, newSafeArea)) {
        return { ...newSafeArea }
      }
      return oldSafeArea
    })
  }, [getOffsets])

  useEffect(() => {
    update()
    const body = new ResizeObserver(update)
    if (window.visualViewport)
      window.visualViewport.addEventListener("resize", update)
    window.addEventListener("orientationchange", update)
    if (body) body.observe(document.body)
    return () => {
      if (body) body.disconnect()
      if (window.visualViewport)
        window.visualViewport.removeEventListener("resize", update)
      window.removeEventListener("orientationchange", update)
    }
  }, [update])

  return safeArea
}
