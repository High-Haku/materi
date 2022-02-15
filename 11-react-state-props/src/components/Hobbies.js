import { useState } from "react";
import Hobby from "./Hobby";

function Hobbies() {
  const [hobbies, setHobbies] = useState([
    {
      img: "https://assets.indozone.news/local/5e5f5f31d2e67.jpg",
      name: "Nonton",
    },
    {
      img: "https://asset.kompas.com/crops/MDitQNGmDKbF_E9AlDem0157kJs=/0x0:639x426/750x500/data/photo/2021/08/11/6113421562c87.jpg",
      name: "Tidur",
    },
    {
      img: "https://cms.sehatq.com/cdn-cgi/image/f=auto,width=480,fit=pad,background=white,quality=100/public/img/article_img/10-cara-mengajarkan-kebiasaan-makan-yang-baik-pada-anak-1614852962.jpg",
      name: "Makan",
    },
  ]);

  return (
    <div className="hobbies">
        <h2>My Hobbies</h2>
        {hobbies.map((hobby, index) => (
          // Props adalah
          // data yg di oper
          <Hobby hobby={hobby} />
        ))}
      </div>
  )
}

export default Hobbies