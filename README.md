# Academind: React complete guide

Links:
- [Github](https://github.com/academind/react-complete-guide-course-resources/tree/main/attachments/03%20React%20Essentials)
- [Udemy](https://nside.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/39648990#overview) 

# Components

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