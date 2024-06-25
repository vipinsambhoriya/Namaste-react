# Namaste React

# parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- Parcel using a File Watching Algorithems - written in c++
- Caching - Faster Builds
- Image Optimization
- so parcel is a such a beest
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browser
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- different dev and prod bbundles

# Namaste Food

/\*\*

- Header
- -logo
- - nav item
- Body
- --Serch
- --RestaurantContainer
- ----RestaurantCards
- ----- Name of Res, Ratung, cusines, delevery time
- Footer
- ---Copyright
- ---Links
- ---Address
- ---Contact
  \*/

  // using keys (not acceptable) <<<< as key <<<<< unique id (best practice)

Two types of Export/Import

- Default Export/Import

export default component name;
import component from "path";

- Named Export/Import

export const Component;
import component from "path";

# React Hooks

(Normal JS utility function)
most important
-useState()- Superpowerful State variable in React.
-useEffect()

Two type of Routing
-Client side routing
-Server side routing

# Redux Tolkite

- Install @reduxjs/toolkit and react-redux
  -Build our store
- Connect our store to our app
- Slice (cartSlice)
- dispatch(action)
- selector

# Types of testing (developer)

- Unit Testing
- Integration Testing
- End to End Testing - e2e testing

# Setting up Testing in our app

- Install React testing library
- Install jest
- Install babel dependencies
- Configure babel
- configure Parcel config file to disable default babel transpilation
- Jest -npx jest --init
  -Install jsdom library
  -Install @babel/preset-react - to make JSX work in test cases
  -Include @babel/preset-react inside my babel config
- npm i -D @testing-library/jest-dom
