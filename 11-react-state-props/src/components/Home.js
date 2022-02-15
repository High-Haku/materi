import { useState } from "react";
import Hobbies from "./Hobbies";

// function component
function Home() {
  // state adalah
  // data yg ada di dlm komponen
  // cara menyimpan data ke dalam state
  const [myName, setMyName] = useState("Auzan");
  // setMyName("luthfi")

  // di JS biasa
  let myname = "auzan"; // tidak bisa
  myname = "luthfi" // tidak bisa

  return (
    <div>
      <div>
        <h1>Hai saya {myName}</h1>
        <img
          src="https://spesialis1.orthopaedi.fk.unair.ac.id/wp-content/uploads/2021/02/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
          alt=""
          width={300}
        />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem voluptatibus possimus molestias blanditiis autem magni
          modi accusamus animi sit, sequi quibusdam facere error architecto
          dicta porro vitae ipsum optio. Ducimus!
        </p>
      </div>

      <Hobbies />

    </div>
  );
}

export default Home;
