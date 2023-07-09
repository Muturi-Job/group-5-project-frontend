import { useState } from "react";

function CustomImage ({imgsrc, pt}) {

    return(
<div className="custom-image" style={{paddingTop: pt}}>
    <img src={imgsrc} alt="" />
</div>
    )
}
export default CustomImage;