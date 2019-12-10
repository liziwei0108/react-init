import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

export default function Content() {
    return (
        <div id="content">
            <Switch>
                <Route exact path="/app">
                    <ContentDefault />
                </Route>
                <Route exact path="/content1">
                    <Content1 />
                </Route>
                <Route exact path="/content2">
                    <Content2 />
                </Route>
                <Route exact path="/content3">
                    <Content3 />
                </Route>
            </Switch>
        </div>
    )
}

function ContentDefault(){
    return(
        <div>
            请选择菜单
        </div>
    )
}

function Content1() {
    debugger
    return (
        <div>
            Content1
        </div>
    )
}


function Content2() {
    return (
        <div>
            Content2
        </div>
    )
}


function Content3() {
    return (
        <div>
            Content3
        </div>
    )
}