import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import galleyImages from './AfGallery'


const PintrestGallery = () => {
  return (
    <>
      <ResponsiveMasonry columnsCountBreakPoints={{350:1, 768: 3, 992: 4}}>
        <Masonry gutter='0.9rem'>
          {
            galleyImages.map((curImg, index) =>
              <img src={curImg} key={index} style={{width: "100%", display:"block", borderRadius: "10px"}}></img>
            )
          }
        </Masonry>
      </ResponsiveMasonry>
    </>
  )
}

export default PintrestGallery
