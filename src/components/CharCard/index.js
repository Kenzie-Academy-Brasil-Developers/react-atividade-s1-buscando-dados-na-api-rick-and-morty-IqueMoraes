import "./styles.css";

export default function ChardCard({ props }) {
  return (
    <>
      {props.status === "Alive" && (
        <div className="card alive">
          <h4>Nome: {props.name}</h4>
          <p>Estado: {props.status}</p>
          <p>Espécie: {props.species}</p>

          <img
            src={props.image}
            alt={"Imagem do personagem" + props.name}
            className="picture"
          />
        </div>
      )}
      {props.status === "Dead" && (
        <div className="card dead">
          <h4>Nome: {props.name}</h4>
          <p>Estado: {props.status}</p>
          <p>Espécie: {props.species}</p>

          <img
            src={props.image}
            alt={"Imagem do personagem" + props.name}
            className="picture"
          />
        </div>
      )}
      {props.status === "unknown" ? (
        <div className="card unknown">
          <h4>Nome: {props.name}</h4>
          <p>Estado: {props.status}</p>
          <p>Espécie: {props.species}</p>

          <img
            src={props.image}
            alt={"Imagem do personagem" + props.name}
            className="picture"
          />
        </div>
      ) : null}
    </>
  );
}
