(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(3),i=n(7),r=(n(0),n(88)),c={id:"introduction",title:"Dime.Scheduler .NET SDK",sidebar_label:"Introduction",slug:"./"},o={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Dime.Scheduler .NET SDK",description:"Install",source:"@site/docs\\introduction.md",slug:"/",permalink:"/ds-sdk/docs/",editUrl:"https://github.com/dimenics/ds-sdk/tree/master/docs/docs/introduction.md",version:"current",sidebar_label:"Introduction",sidebar:"someSidebar",next:{title:"Import",permalink:"/ds-sdk/docs/import"}},s=[{value:"Install",id:"install",children:[]},{value:"Usage",id:"usage",children:[]}],d={toc:s};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"install"},"Install"),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The packages listed here are not publicly available yet on NuGet."))),Object(r.b)("p",null,"Use the package manager NuGet to install the base library of the SDK:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"dotnet add package Dime.Scheduler.Sdk")),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-csharp"},'string uri = "http://mydimescheduler.com";\nIAuthenticator authenticator = new FormsAuthenticator(uri,"admin","admin");\n\nDimeSchedulerClient client = new(uri, authenticator);\n\nIResourceEndpoint resourceEndpoint = await client.Resources.Request();\nIEnumerable<Resource> resources = await resourceEndpoint.GetAsync(new ResourceRequest());\n\nforeach (Resource resource in resources)\n    Console.WriteLine(resource.Email);\n')),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"DimeSchedulerClient")," class is the entry point and it is where all endpoints are exposed:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-csharp"},"DimeSchedulerClient client = new(uri, authenticator);\n")),Object(r.b)("p",null,"Two arguments are required: the URI to Dime.Scheduler and credentials to connect to it. The ",Object(r.b)("inlineCode",{parentName:"p"},"IAuthenticator")," (with ",Object(r.b)("inlineCode",{parentName:"p"},"FormsAuthenticator")," as the default implementation) interface is called when an endpoint is requested:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-csharp"},"IResourceEndpoint resourceEndpoint = await client.Resources.Request();\n")),Object(r.b)("p",null,"When the credentials are invalid, an exception is thrown. Otherwise, the user is authenticated and can access the endpoint:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-csharp"},"IEnumerable<Resource> resources = await resourceEndpoint.GetAsync(new ResourceRequest());\n")))}l.isMDXComponent=!0}}]);