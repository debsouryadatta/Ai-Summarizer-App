// Summary of PredroTech Redux Tookit

// Before understanding the codes, first watch out the redux analogy picture.
// * 1. Install some libraries - redux, react-redux, @reduxjs/toolkit
// * 2. Creating components - Login, Profile(with some basic ui)
// * 3. Creating a redux store in index.js(configureStore)
// * 4. Importing provider to provide the access of the store to the whole application
// * 5. Using createSlice to create reducers easily
// * 6. After creating the reducer, deafult export the reducer
// * 7. Importing the reducer which is created in the index.js and using it in the redux store
// * 8. In Profile.js, grabing the value of the user state in the user variable -> useSelector hook is used for this purpose.


// * 9. Exporting the actions of the user reducer
// * 10. In Login.js, using useDispatch hook to dispatch the action to the reducer
// * 11. Creating another action in user reducer, exporting it, implementing it in Login.js
// * 12. Creating a new theme reducer in theme.js, importing it in redux store in index.js
// * 13. Using useDispatch hook in the ChangeColor.js to dispatch the action to the theme reducer
// * 14. Using useSelector hook in Profile.js to get the theme state and use that for changing the style of the div i.e. changing the text color

// FINAL
// 1.Creating the reducers using createSlice in features folder, exporting the reducer and the actions
// 2.Creating a redux store in index.js and importing the reducer in the redux store in index.js
// 3.Using useSelector hook for getting the value of the state
// 4.Using useDispatch hook for sending the action to the reducer, i.e. for setting the state.