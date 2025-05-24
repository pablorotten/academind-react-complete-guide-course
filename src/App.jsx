import { useState } from "react";
import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import CoreConceptWithObjectDestructuring from "./components/CoreConceptWithObjectDestructuring.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function updateSelection(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(
      "App updateSelection uses setSelectedTopic with:",
      selectedButton
    );
  }

  let tabContent = <p>Select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code.trim()}</code>
        </pre>
      </div>
    );
  }

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
            {/* Passing the function `updateSelection` which will use the `setState` function to update the `state` */}
            <TabButton
              isSelected={(selectedTopic === "components")}
              handleSelect={() => updateSelection("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              handleSelect={() => updateSelection("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              handleSelect={() => updateSelection("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              handleSelect={() => updateSelection("state")}
            >
              State
            </TabButton>
            {/* Not using any Component, directly set in `onClick` event the `setState` function */}
            <li>
              <button onClick={() => setSelectedTopic("formula1")}>
                Fast 🏎️
              </button>
            </li>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
