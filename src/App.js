import './App.css';

function App() {
    let v
    let adjList

    let res = []


    function Graph(vertices) {
        v = vertices
        initAdjList()
    }

    function initAdjList() {
        adjList = new Array(v)
        for (let i = 0; i < v; i++) {
            adjList[i] = []
        }

    }

    function addEdge(u, v) {
        adjList[u].push(v)

    }

    function printAllPaths(s, d) {
        let isVisited = new Array(v)

        for (let i = 0; i < v; i++) {
            isVisited[i] = false

            let pathList = []
            pathList.push(s)
            // console.log('pathList:')
            // console.log(pathList)
            printAllPathsUtil(s, d, isVisited, pathList)

        }

    }

    function printAllPathsUtil(u, d, isVisited, localPathList) {

        if (u === d) {
            let temp = []
            temp.push(...localPathList)

            function checkArrayInArray(arr, farr) {
                return JSON.stringify(arr).includes(JSON.stringify(farr));

            }

            if (!checkArrayInArray(res, temp)) {
                res.push(temp)
            }

            // setResult(result.push([localPathList]))


            // localPathList != undefined &&  setResult(result.push(localPathList))
            return
        }
        isVisited[u] = true

        for (let i = 0; i < adjList[u].length; i++) {
            if (!isVisited[adjList[u][i]]) {
                //store current node in path[]
                localPathList.push(adjList[u][i])
                printAllPathsUtil(adjList[u][i], d, isVisited, localPathList)

                //remove current node in path[]
                localPathList.splice(localPathList.indexOf(adjList[u][i]), 1)
            }
        }
        //mark the current node
        isVisited[u] = false

    }

    Graph(4)
    addEdge(0, 1)
    addEdge(0, 2)
    addEdge(0, 3)
    addEdge(2, 0)
    addEdge(2, 1)
    addEdge(1, 3)

    let s = 2
    let d = 3
    console.log(adjList)

    printAllPaths(s, d)
    console.log(res)


    return (
        <div className="App">

            Print all Graph paths
            <div>
                path from {s} to {d}
            </div>
            <div>
                { res[0].map((item,index)=>
                <b key={index}> {item}  </b>
                )}
            </div>
            <div>
                { res[1].map((item)=>
                <b key={item+res[1]+'avd'}> {item}  </b>
                )}
            </div>
            <div>
                { res[2].map((item)=>
                <b key={res[2]+item}> {item}  </b>
                )}
            </div>

        </div>
    );
}

export default App;
