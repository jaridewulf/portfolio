import Typical from "react-typical";
const Name = () => {
  return (
    <h1 className="name">
      Jari
      <br /> De
      <span className="typedText">
        <Typical
          loop={Infinity}
          wrapper="b"
          steps={["veloper", 2000, "signer", 2000, "inzenaar", 2000]}
        />
      </span>
      <br /> Wulf
    </h1>
  );
};

export default Name;
