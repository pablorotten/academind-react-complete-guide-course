# Academind: React complete guide

Links:
- [Github](https://github.com/academind/react-complete-guide-course-resources/tree/main/attachments/03%20React%20Essentials)
- [Udemy](https://nside.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/39648990#overview) 


# Basics

## Components

Functions starting with Capital letter that returns a value that can be rendered.


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
      <main>
        ...
      </main>
    </div>
  );
}
```

## Dynamic content

It's inside curly braces `{}`. Can be variables and functions.

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
