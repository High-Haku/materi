function Hobby({ hobby }) {
  return (
    <div>
      <img src={hobby.img} alt="" width={150} />
      <h4>{hobby.name}</h4>
    </div>
  );
}

export default Hobby;
