# boilerplate-reactjs-component
A Boilerplate for React component

## Supports
- JSX
- Minify
- JSX template literal (experimental)
- "Include" component (experimental)

## Controlled component workflow
```
parent    ←   (update props)
↓                  ↑
(set props/one-way binding)
↓                  |
component          |
↓                  |
(copy props to state)
(manual copy for Object and Array)
↓                  |
state              |
↓                  |
(set attrs from state/two-way binding)
↓                  |
Form      →      event
```

## Uncontrolled component workflow
```
parent    ←   (update props)
↓                  ↑
(set props/one-way binding)
↓                  |
component          |
↓                  |
(copy props to state)
(manual copy for Object and Array)
↓                  |
state     ←   (update state)
↓                  ↑
(set attrs from state/two-way binding)
↓                  |
Form      →      event
```