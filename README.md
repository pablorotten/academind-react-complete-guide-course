# Academind: React complete guide

Links:
- [Github](https://github.com/academind/react-complete-guide-course-resources/tree/main/attachments/03%20React%20Essentials)
- [Udemy](https://nside.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/39648990#overview) 


# Basics

## Components

Functions starting with Captital letter that returns a piece of html.


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

## Dynamic values

You can save elements in variables and use them in the html code:
- Some text
- The src of an image

```jsx
import reactImg from './assets/react-core-concepts.png';

function Header() {
  const description = "React Essentials";

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>{description}</h1>
      ....
```