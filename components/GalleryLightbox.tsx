'use client'

import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

interface Props {
  open: boolean
  close: () => void
  slides: { src: string }[]
  index: number
}

export default function GalleryLightbox({
  open,
  close,
  slides,
  index
}: Props) {
  return (
    <Lightbox
      open={open}
      close={close}
      slides={slides}
      index={index}
    />
  )
}
