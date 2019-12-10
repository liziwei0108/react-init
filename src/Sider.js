import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function Sider() {
    return(
            <div id="sider">
                <nav>
                    <ul>
                        <li>
                            <Link to="/app">Home</Link>
                        </li>
                        <li>
                            <Link to="/content1">菜单1</Link>
                        </li>
                        <li>
                            <Link to="/content2">菜单2</Link>
                        </li>
                        <li>
                            <Link to="/content3">菜单3</Link>
                        </li>
                    </ul>
                </nav>
            </div>
    )
}