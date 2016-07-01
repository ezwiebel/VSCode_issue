# VSCode_issue

### To reproduce the issue
1. Open `VSCode_issue` folder in VSCode

2. Install extensions `Go` and `jsx` :

* Press F1
* Type *ext*
* Choose Install extension
* type *Go* choose `Go` extension
* Same thing for `jsx` typing *React*

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

