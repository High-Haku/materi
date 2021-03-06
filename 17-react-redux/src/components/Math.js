import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addButton,
  multiButton,
  luasSegitigaButton,
} from "../redux/actions/math.actions";

function Math() {
  const dispatch = useDispatch();
  const tambah = useSelector((state) => state.tambah);
  const kali = useSelector((state) => state.kali);
  const luas = useSelector((state) => state.luas);

  console.log(tambah);
  const [input, setInput] = useState({
    input1: 0,
    input2: 0,
  });

  const handleChange = (name, value) => {
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  console.log(input);

  return (
    <div>
      <h1>Math</h1>
      <input
        type="number"
        value={input.input1}
        placeholder="Masukan angka pertama"
        onChange={(event) => handleChange("input1", event.target.value)}
      />
      <input
        type="number"
        value={input.input2}
        placeholder="Masukan angka kedua"
        onChange={(event) => handleChange("input2", event.target.value)}
      />
      <button type="submit" onClick={() => dispatch(addButton(input))}>
        tambahkan angka
      </button>
      <button type="submit" onClick={() => dispatch(multiButton(input))}>
        kali angka
      </button>
      <button type="submit" onClick={() => dispatch(luasSegitigaButton(input))}>
        hitung luas segitiga
      </button>
      <h1>Hasil Tambah {tambah}</h1>
      <h1>Hasil Kali {kali}</h1>
      <h1>Hasil luas segitiga {luas}</h1>
    </div>
  );
}

export default Math;

// hitung luas segitiga panjang kali tinggi bagi 2
