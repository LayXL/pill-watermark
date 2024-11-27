import { PillWatermark } from "pill-watermark"
import type { ReactNode } from "react"

type PreviewPillWatermarkProps = {
  children: ReactNode
}

export const PreviewPillWatermark = (props: PreviewPillWatermarkProps) => {
  return <PillWatermark disablePositioning>{props.children}</PillWatermark>
}
