# Academind: React complete guide

Links:
- [Github](https://github.com/academind/react-complete-guide-course-resources/tree/main/attachments/03%20React%20Essentials)
- [Udemy](https://nside.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/39648990#overview) 


# Basics

## Components

They're functions in **U**ppercase that returns a value that can be rendered.

You call a component with this syntax: `<Component />`

```jsx
function Header() {
  return (
    <header>
      ...
    </header>
  );
}

...

function App() {
  return (
    <div>
      <Header />
      ...
    </div>
  );
}
```

### Props

They're properties or parameters you can pass to `Components`. By default, all of them are added in the `prop` object.
 
```jsx
import componentsImg from './assets/components.png';

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );

}

...
// usage
function App() {
  return (
    ...
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        <CoreConcept 
          title="Components"
          description="The core UI building block."
          image={componentsImg}            
        />
      </ul>
    </section>
```

You can specify what props you want with **object destructuring**. Then you don't need to use `prop` keyword:

```jsx
function CoreConceptWithObjectDestructuring({ title, description, image }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
```


## Dynamic content

You can define variables and functions. Then you use it inside curly braces `{}`.

```jsx
import reactImg from './assets/react-core-concepts.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function getRandomInt(max) {
  return Math.floor(Math.random() * max + 1);
}

function Header() {
  const description = "React Essentials";

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>{description}</h1>
      <p>
        {reactDescriptions[getRandomInt(2)]} React concepts 
      </p>
    ...
```
