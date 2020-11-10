# Template for Pug - ScSS - Parcel

_I have included gsap3 and font awesome via cdn so they can be removed easy_

```
npx degit "b1m1nd/psp-template#develop" app-name
```

...then install dependencies

```
npm install
```

### Run scripts

```
# for testing on http://localhost:9001
npm run dev

# build ./dist/build/
npm run build

# for netlify or other static host exports root:/public/
npm run export

# for for simple github pages export ./docs/
npm run github
```

### gh-pages deploy

_you can also use gh-pages lib but must configure_

```
# for use with master branch github pages
npm run deploy
```

First create a develop branch and github repo (you can name it anything)
rename the `< >` 's with your info.

```
git init
git branch <your-branch-name>
git checkout <your-branch-name>
```

Then commit and and set origin

```
git add .
git commit -m "a commit message"
git remote add origin https://github.com/<your-git>/<repo-name>.git
git push -u origin <your-branch-name>
```

Finally configure your `/scripts/edit_deploy.js` and rename to `deploy.js`

List/Links of used libs coming soon.
