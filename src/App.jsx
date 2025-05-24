import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import CoreConceptWithObjectDestructuring from "./components/CoreConceptWithObjectDestructuring.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* Manual core concept */}
            <CoreConceptWithObjectDestructuring
              title="Components"
              description="The core UI building block."
              image={componentsImg}
            />
            {/* Auto-generated core concepts */}
            {CORE_CONCEPTS.map((concept, index) => (
              <CoreConcept
                key={index}
                title={concept.title}
                description={concept.description}
                image={concept.image}
              />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
          <TabButton>Components</TabButton>
          <TabButton>Components</TabButton>
          <TabButton>Components</TabButton>
          <TabButton>Components</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
