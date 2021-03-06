/// <reference path='../typings/main.d.ts'/>
System.register(['react', 'react-dom', 'react-router', 'jquery', './AutoQuery'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var React, react_dom_1, react_router_1, AutoQuery_1;
    var App, BasePath, AppPath, AutoQueryPath;
    return {
        setters:[
            function (React_1) {
                React = React_1;
            },
            function (react_dom_1_1) {
                react_dom_1 = react_dom_1_1;
            },
            function (react_router_1_1) {
                react_router_1 = react_router_1_1;
            },
            function (_1) {},
            function (AutoQuery_1_1) {
                AutoQuery_1 = AutoQuery_1_1;
            }],
        execute: function() {
            App = (function (_super) {
                __extends(App, _super);
                function App() {
                    _super.apply(this, arguments);
                }
                App.prototype.render = function () {
                    return this.props.children;
                };
                return App;
            }(React.Component));
            BasePath = location.pathname.substring(0, location.pathname.indexOf("/ss_admin") + 1);
            AppPath = BasePath + "ss_admin";
            AutoQueryPath = AppPath + "/autoquery";
            react_dom_1.render((React.createElement(react_router_1.Router, {history: react_router_1.browserHistory}, React.createElement(react_router_1.Redirect, {from: "/", to: AutoQueryPath}), React.createElement(react_router_1.Redirect, {from: AppPath, to: AutoQueryPath}), React.createElement(react_router_1.Route, {path: AppPath, component: App}, React.createElement(react_router_1.Route, {path: AutoQueryPath + "(/:name)", component: AutoQuery_1.default})))), document.getElementById('app'));
        }
    }
});
//# sourceMappingURL=main.js.map