import React from "react"
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

export default ({ images = [] }) => {
  return (
    <React.Fragment>
      <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} />
    </React.Fragment>
  )
}
