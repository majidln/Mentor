# Find You Mentor!

This writes in React Native. I tried to used the best practices in React Native such concern separation in (logic and component) to develop this skeleton. So we can extend this skeleton into the large scale application



### Features

- React Native
- TypeScript
-  React Navigation
- Redux
- Hooks

### How to Run
##### Install dependencies
```sh
yarn
```
##### Run in android:
```sh
yarn start
yarn android
```
##### Run in IOS:
```sh
npx pod-install
yarn ios
```
### Structure
 The scrucure of ```src``` directory in the project are:
 
    ├── components
		├── atomics		# This contains the components that has only single responsiblities. So, they just render an UI element
		├── screens		# Each directory inside this directory contain component related to specific screen. So for the each screen we have a directory here. like item of employees list
    ├── data			# Hold the static data here, etc employees list
    ├── hooks			# Hold the hooks here, each file contain hooks with related logics. Each hooks should start with `use` key word
    ├── navigation		# Navigation of application like Stack and Tabs are here
    ├── screens			# Put the screen UI. each concern has a directory here with related screen. For example in UserForm directory we have two screen for the complete user date in two steps form
    ├── services		# All services are under this directory
    ├── store 			# Each separated concern has a dir in this dir that contains actions, reducer, constants, saga**
    ├── styles			# Put the shared Js objects like colors, typography here 
    ├── types			# Define global Type-Script type definition.

### Third Party Packages
##### React navigation
As most of React Native application, This project usees [React Navigation](https://reactnavigation.org/) for the routing between differnece screens,
Official [documents](https://reactnative.dev/docs/navigation#react-navigation) of react-native mentioned:
> **React Navigation** provides a straightforward **navigation** solution, with the ability to present common stack **navigation** and tabbed **navigation** patterns on both Android and iOS.
##### State Managment


