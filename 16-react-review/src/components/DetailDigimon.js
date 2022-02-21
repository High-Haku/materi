import { useParams } from "react-router-dom";

function DetailDigimon() {
  let { id } = useParams();

  return (
    <>
      <h1>Detail Digimon</h1>
      <p>{id}</p>
    </>
  );
}

export default DetailDigimon