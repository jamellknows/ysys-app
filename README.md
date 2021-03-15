# Getting Started

## Git stuff
* Choose one member of your team to fork this repository into their github account by clicking the fork button. Or if you have a team account, use that. This fork will be considered the "main" repository.

* To clone the main repo: `git clone https://github.com/{ACCOUNT_NAME}/ysys-app.git`

* To contribute to your project, we recommend this common pattern:
  - Checkout the main branch locally: `git checkout main`
  - Make sure this is up-to-date with the main remote branch: `git pull --rebase`
  - Make a new branch to do your work on: `git checkout -b my-new-feature-branch`
  - Write your code
  - When you're ready to commit your code, add the files you want to your commit. Use `git status` to check which files have been modified and/or added. To add files, use `git add {FILE_NAME}`. Chances are all your edits will be within `src`, so to speed things up you can use `git add src/`.
  - Commit the changes with a message: `git commit -m "added sidebar feature"`
  - Push your changes to your _remote_ branch: `git push origin my-new-feature-branch`
  - If that branch is ready to be merged into the main branch, visit it on github.com and open a pull request.
  - Make sure all the changes make sense and that there are no conflicts, then merge your new feature!

### Run

* Install the dependencies: `yarn install`

* Install : `npm i howler --save` && `yarn add bootstrap@4.6.0`

* Start the app: `yarn start`

* Navigate to `localhost:3000` to view the app.

### Tech Stack
* React.js
* JavaScript (ES6)
* Jira

### Authors
* Beverly Antwi-Agyei - [BevAntwi98](https://github.com/BevAntwi98)
* Meltem Ozmen - [boolean-n-bop](https://github.com/boolean-n-bop)
* Haze - [HazeSc](https://github.com/HazeSc)
* Jamell - [jamellknows](https://github.com/jamellknows)
 
### Acknowledgments
* Massive thank you to Brandwatch for setting the brief;  Sam Maclean ([MacleanS](https://github.com/MacleanS))once again for aiding us as our extra team member, Alastair Lockie ([larister]) (https://github.com/larister) for all his wonderful advice and tips on our functionality, and Lionel Smith for helping us with our final stretch!! :)