import './CoreConcept.css';

export default function CoreConceptWithObjectDestructuring({ title, description, image }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}