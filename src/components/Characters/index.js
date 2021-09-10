import ChardCard from "../CharCard";
import "./styles.css";

export default function Characters({ characterList }) {
  return (
    <div>
      <h2>Meus personagens</h2>
      <div className="container">
        <ul>
          {characterList.map((item) => (
            <li key={item.id}>
              <ChardCard props={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
