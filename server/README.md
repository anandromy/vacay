## Initial setup
```
mkdir server
cd server
npm init -y
npm i typescript --save-dev
tsc --init   
touch .gitignore

```
1. Edit outDir as ./dist inside tsconifg.json
2. Add dist, node_modules and .env inside .gitignore
3 Install nodemon as dev dependency
4. set main as './dist/index.js' inside package.json
5. create a src folder, inside create index.ts file
6. write a dev script inside package.json : `"dev": "tsc --w & nodemon"`
7. Test `npm run dev` script
8. `npm i express cors dotenv jwt mongoose express-validator`
