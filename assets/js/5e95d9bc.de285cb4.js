(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(106)),l={author:"Nailuj29",author_title:"Author of SpiderWren",author_url:"https://github.com/nailuj29gaming",tags:["wren","web","SpiderWren"],description:"This post should help you understand what SpiderWren is",hide_table_of_contents:!1},s={permalink:"/blog/2021/04/21/what-is-wren-web",editUrl:"https://github.com/SpiderWren/docs/edit/master/blog/blog/2021-04-21-what-is-wren-web.md",source:"@site/blog/2021-04-21-what-is-wren-web.md",title:"What is SpiderWren?",description:"This post should help you understand what SpiderWren is",date:"2021-04-21T00:00:00.000Z",formattedDate:"April 20, 2021",tags:[{label:"wren",permalink:"/blog/tags/wren"},{label:"web",permalink:"/blog/tags/web"},{label:"SpiderWren",permalink:"/blog/tags/spider-wren"}],readingTime:.47,truncated:!1},o=[{value:"Well, what is Wren?",id:"well-what-is-wren",children:[]}],p={toc:o};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"SpiderWren is a very simple and minimal web framework for the Wren scripting language. It is still very early in development, so expect lots of changes."),Object(i.b)("h2",{id:"well-what-is-wren"},"Well, what is Wren?"),Object(i.b)("p",null,"Wren is a tiny, embeddable scripting language similar to Lua, but with classes and many other features that make it great."),Object(i.b)("h1",{id:"a-simple-example"},"A simple example"),Object(i.b)("p",null,"A simple example for SpiderWren (it is subject to change) is:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-wren"},'import "web" for Routes, App\n\nRoutes.GET("/greet/:name") { | params | \n    return "Hello, %(params["name"])"\n}\n\nApp.run(3000)\n')),Object(i.b)("p",null,"This tiny example demonstrates all the current features of SpiderWren!"))}u.isMDXComponent=!0}}]);