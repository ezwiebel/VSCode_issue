# VSCode_issue

### To reproduce the issue

>EDIT
>Apparently no need to install `Go` and `jsx` extensions ton get the problem.
>Problem solved with excluding `node_modules` folder explicitely with its full path in `jsconfig.json` :
```
"exclude": [
   "frontend/node_modules"
]
```
>Still need to figure out why tsserver didn't warn about problem with that setup

1. Open `VSCode_issue` folder in VSCode

2. Install extensions `Go` and `jsx` :

    * Press F1
    * Type *ext*
    * Choose Install extension
    * type *Go* choose `Go` extension
    * Same thing for `jsx` typing *React*
    
   [Go extensions Readme](https://marketplace.visualstudio.com/items?itemName=lukehoban.Go)
   
   [jsx extension Readme](https://marketplace.visualstudio.com/items?itemName=TwentyChung.jsx)

3. Set `settings.json` as follows :

    ```
    {
        //GO
        "go.buildOnSave": true,
        "go.lintOnSave": true,
        "go.vetOnSave": true,
        "go.buildTags": "",
        "go.buildFlags": [],
        "go.lintFlags": [],
        "go.vetFlags": [],
        "go.coverOnSave": false,
        "go.useCodeSnippetsOnFunctionSuggest": false,
        "go.formatOnSave": true,
        "go.formatTool": "goreturns",
        "go.goroot": "/opt/go",
        "go.gopath": "/home/emile/dev/RMTool/go",
        "go.gocodeAutoBuild": false,
    
        //React / JS
        "javascript.validate.enable": false,
        "editor.tabSize": 2,
        "files.trimTrailingWhitespace": true,
        // Migrated from previous "File | Auto Save" setting:
        "files.autoSave": "onFocusChange"
    }
    ```

4. Play with features (completion, navigation, etc.) in backend and frontend. Frontend should not work and a huge process should fire.

    ![](http://reho.st/self/d1ced4e1b743ecabcfe470aaa225b687fe8745ed.png)

>Note : `jsconfig.json` & `.eslintrc` have been modified and are in the repository already

### To install and run :

#### Frontend
 
```
$ cd frontend
$ npm install
$ npm run dev
```

**Run tests**

`npm run test`

#### Backend

```
$ cd backend
$ go build
$ ./backend
```

**Run tests**

`go test [-v]`

