# Modern Disney Clone using React JS

![Modern Disney Clone using React JS](https://user-images.githubusercontent.com/71302066/201341087-e0d292e3-cc71-4691-b274-cb662b62da23.png "Modern Disney Clone using React JS")

[![Ask Me Anything!](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://github.com/Technical-Shubham-tech "Ask Me Anything!")
[![GitHub license](https://img.shields.io/github/license/Technical-Shubham-tech/disney-clone)](https://github.com/Technical-Shubham-tech/disney-clone/blob/main/LICENSE.md "GitHub license")
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/Technical-Shubham-tech/disney-clone/commits/main "Maintenance")
[![GitHub branches](https://badgen.net/github/branches/Technical-Shubham-tech/disney-clone?max-age=2592000)](https://github.com/Technical-Shubham-tech/disney-clone/branches "GitHub branches")
[![Github commits](https://badgen.net/github/commits/Technical-Shubham-tech/disney-clone/main?max-age=2592000)](https://github.com/Technical-Shubham-tech/disney-clone/commits "Github commits")
[![Website Status](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://clonedisneyplus.web.app "Website Status")
[![GitHub issues](https://img.shields.io/github/issues/Technical-Shubham-tech/disney-clone)](https://github.com/Technical-Shubham-tech/disney-clone/issues "GitHub issues")
[![GitHub pull requests](https://img.shields.io/github/issues-pr/Technical-Shubham-tech/disney-clone)](https://github.com/Technical-Shubham-tech/disney-clone/pulls "GitHub pull requests")

## ⚠️ Before you start

1. Make sure **Git** and **NodeJS** is installed
2. Create **firebase.js** file inside src folder.
3. Contents of **firebase.js**

```
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// your firebase config
const firebaseConfig = {
  apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "testapp.firebaseapp.com",
  projectId: "testapp",
  storageBucket: "testapp.appspot.com",
  messagingSenderId: "0123456789",
  appId: "1:XXXXXXXXXXX:web:XXXXXXXXXXXXXXXXXXXX",
  measurementId: "G-XXXXXXXXXX",
};

// initialize firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); // firebase db
const auth = firebase.auth(); //firebase auth
const provider = new firebase.auth.GoogleAuthProvider(); // Google auth provider
const storage = firebase.storage(); // firebase storage

export { auth, provider, storage };
export default db;
```

4. Now, to get your _firebaseConfig_, go to [Firebase](https://console.firebase.google.com) and create a new project.

5. Go to **Project Settings** and click on **Web icon to create a web app**. Follow on-screen instructions.

![Create a web app](https://user-images.githubusercontent.com/71302066/201342692-a89d4647-df4a-434a-9033-e29af466311d.png "Create a web app")

6. Make sure your setup firebase hosting as well in order to host it later online.

![Setup firebase hosting](https://user-images.githubusercontent.com/71302066/201343231-7d4ff5cd-6798-4e1b-a69b-40c7a60e941e.png "Setup firebase hosting")

7. Now, you can copy your firebase config after redirected.

![Copy firebase config](https://user-images.githubusercontent.com/71302066/201343950-ece31f95-4641-4604-acc2-bf4d63f0cb47.png "Copy firebase config")

**NOTE:** Make sure you never share your config online.

8. To enable Google Auth, go to **Authorisation/Get Started**

9. Click on Google and Enable. Then, Click Save.

![Enable Google Auth](https://user-images.githubusercontent.com/71302066/201348852-2137ed2f-03b1-47f0-9cda-29b8a6771dca.png "Enable Google Auth")

10. Now, once Google Authentication is Enabled. Create a firestore database to fetch movie details.

11. Go to **Firestore Database/Create Database**. Start in test mode. Select best firestore location.

12. Create a new collection named _movies_. You will find all movies info in _disneyPlusMoviesData.json_ file. You can add your custom movies too.

![Create Movies Collection](https://user-images.githubusercontent.com/71302066/201350127-d0236496-1fc8-46a9-81ec-6c0310d9a99e.png "Create Movies Collection")

## :pushpin: How to use this App?

1. Clone this **repository** to your local computer.
2. Open **terminal** in root directory.
3. Type and Run `npm install` or `yarn install`.
4. Once packages are installed, you can start this app using `npm start` or `yarn start`.
5. Now app is fully configured and you can start using this app :+1:.

## :camera: Screenshots:

![Modern UI/UX](https://user-images.githubusercontent.com/71302066/201344366-63f2ae6b-b588-4cde-b85f-657b94ca5f3e.png "Modern UI/UX")

![Login Page](https://user-images.githubusercontent.com/71302066/201344467-db22b5b0-b4a4-416c-a92e-35f4d282b216.png "Login Page")

![Movie Details Page](https://user-images.githubusercontent.com/71302066/201344694-1f1e6e4f-dc38-40e0-8979-1f5cc335d44e.png "Movie Details Page")

## :gear: Built with

[<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" width="150" height="40" />](https://www.javascript.com/ "JavaScript")

[<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" width="150" />](https://reactjs.org/ "React JS")

[<img src="https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black" width="150" />](https://firebase.google.com/ "Firebase")

[<img src="http://ForTheBadge.com/images/badges/built-with-love.svg" alt="Built with Love">](https://github.com/Technical-Shubham-tech/ "Built with Love")

## :wrench: Stats

![Stats for this App](https://user-images.githubusercontent.com/71302066/201345325-97b7bc0e-6ed6-4d43-bb13-d169e40ef8bc.svg "Stats for this App")

## :raised_hands: Contribute

You might encounter some bugs while using this app. You are more than welcome to contribute. Just submit changes via pull request and I will review them before merging. Make sure you follow community guidelines.

## Buy Me a Coffee 🍺

[<img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" width="200" />](https://www.buymeacoffee.com/sanidhy "Buy me a Coffee")

## :rocket: Follow Me

[![GitHub followers](https://img.shields.io/github/followers/Technical-Shubham-tech?style=social&label=Follow&maxAge=2592000)](https://github.com/Technical-Shubham-tech "Follow Me")
[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2FTechnicalShubam)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2FTechnical-Shubham-tech%2Fmedical-chat-app "Tweet")
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/channel/UCNAz_hUVBG2ZUN8TVm0bmYw "Subscribe my Channel")

## :star: Give A Star

You can also give this repository a star to show more people and they can use this repository.

## :books: Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## :page_with_curl: Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
