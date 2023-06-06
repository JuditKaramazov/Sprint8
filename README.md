# Sprint 8 IT Academy | Star Wars Application
![Alt text](https://github.com/JuditKaramazov/Sprint8/blob/15da93282ca11f639d96de00aa24245c5586fe31/src/assets/Screenshot-1.png)


## Introduction

In all sincerity, I never connected with the idea of communities congregating to share their love and criticism of a specific multimedia work, no matter how passionate I am about certain artistic artifacts. This passion always existed deep within, as a silent one, and just as the "daughter of my generation" that I am, the scope of this passion was remarkably reduced to (and highly influenced by) the decade of the 90s and its most relevant media, films, games and pop culture.

`Star Wars` was never a solid reference according to my relationship to the collective imaginary, though; however, its influence is as undeniable as it has been well-established and consolidated through the years, and that's probably why `IT Academy` asked us to work on a project related to this specific universe.

![Alt text](https://github.com/JuditKaramazov/Sprint8/blob/15da93282ca11f639d96de00aa24245c5586fe31/src/assets/Screenshot-3.jpeg)

As seen above, the final result should fetch each starship's data (including films and pilots) from the SWAPI Star Wars API (`https://swapi.dev/`) while combining it with the visual assets provided by `https://starwars-visualguide.com/`. After accessing an entire list located in the `Starships` section, the user can check all the information fetched with `Axios`, which is the HTTP client-based package I decided to use in order to communicate and send requests to the REST endpoints.

Although the simplicity of the application is what seems to be an undeniable reality, there was, of course, a little extra: it was necessary to incorporate a `registration system` and `protected routes` just so only registered users could access the exclusive content:

![Alt text](https://github.com/JuditKaramazov/Sprint8/blob/15da93282ca11f639d96de00aa24245c5586fe31/src/assets/Screenshot-2.png)

In order to achieve it, I had to work on the following utilities:

- The already mentioned Star Wars `APIs`.
- User management, implemented thanks to `localStorage` usage.
- A `Sign Up`, `Login` and `Sign Out` system keeping track of `new users`, `unregistered`, and already `registered` ones, which allows the user to `sign up`, `log in`, `finish their session` and still `keep their information stored`. As you can see in the previous image, the site greets the registered users by `displaying their names` on the screen.
- `Private routes` granting users free access to `Home` (a so-called "welcome page" with a `slider` integrated) and the `About` section, but showing an alert and preventing them from accessing the `Starships` one without previous registration.
- An `infinite scroll` system followed by different `"Loading..."` or `"All starships successfully loaded!"` messages, making it more accessible for the user to navigate the list.

<br>

## Style
![Alt text](https://github.com/JuditKaramazov/Sprint8/blob/15da93282ca11f639d96de00aa24245c5586fe31/src/assets/Screenshot-4.png)

<br>

The influence of the official Star Wars website (`https://www.starwars.com/`) when it comes to assembling this application is undeniable, independently of the more-than-evident differences between a professional product and an amateur one like this little application. However, and although there's a lot to work on during these first steps of my personal `reskilling` process, I still managed to divide the project into my already-traditional three main pages:

- A `Home` page, with a `slider` displaying different Star Wars images.
- The `Starships` section or `main site`, with the previously discussed content.
- An `About` page which I couldn't resist to incorporate. Why? Let me tell you the story of my people...

Most of the IT Academy students share similar profiles and backgrounds: a previous formation, the urge to change our lives, and the decision to build them from scratch. During this process of self-discovery, deconstruction and transformation, my best friend, `Kernelkun`, has always been there. Maybe because of that, or simply because he's a huge `Star Wars` nerd, I couldn't deny myself the pleasure of `thanking him` (as well as everyone visiting this little space, too) again.

As for the ones getting started with React just like I am, I know, guys: the learning process is indeed a bumpy ride with many obstacles to overcome, but remember our motto: `Don't give up, skeleton!`
Oh, wait, wait... are you telling me you're crazy enough to give React a try? If that's the case, you little Padawan...

<br>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
