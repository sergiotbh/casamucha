import React from 'react';

const MapContainer = () => {
  return(
    <div dangerouslySetInnerHTML={{__html: ' <div class="mapouter"><div class="gmap_canvas"><iframe width="1178" height="460" id="gmap_canvas" src="https://maps.google.com/maps?q=Casa%20Mucha%20Guadalajara&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/"></a><br><style>.mapouter{position:relative;text-align:right;height:460px;width:1178px;}</style><a href="https://www.embedgooglemap.net">google map for web</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:460px;width:1178px;}</style></div></div>'}} />
  )
}

export default MapContainer;