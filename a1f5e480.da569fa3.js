(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{73:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(7),o=(a(0),a(88)),r={id:"validation",title:"Validation",sidebar_label:"Validation"},l={unversionedId:"validation",id:"validation",isDocsHomePage:!1,title:"Validation",description:"Validation is done through the capabilities exposed in the System.ComponentModel.DataAnnotations namespace. Wrapped in the interface  IValidatableImportRequest, import objects are validated before the request is sent to Dime.Scheduler.",source:"@site/docs\\validation.md",slug:"/validation",permalink:"/ds-sdk/docs/validation",editUrl:"https://github.com/dimenics/ds-sdk/tree/master/docs/docs/validation.md",version:"current",sidebar_label:"Validation",sidebar:"someSidebar",previous:{title:"Import",permalink:"/ds-sdk/docs/import"}},s=[],d={toc:s};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Validation is done through the capabilities exposed in the ",Object(o.b)("inlineCode",{parentName:"p"},"System.ComponentModel.DataAnnotations")," namespace. Wrapped in the interface ",Object(o.b)("inlineCode",{parentName:"p"}," IValidatableImportRequest<out T>"),", import objects are validated before the request is sent to Dime.Scheduler."),Object(o.b)("p",null,"Take the ",Object(o.b)("inlineCode",{parentName:"p"},"FilterGroup")," class as an example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},"public class FilterGroup : IImportRequestable, IValidatableImportRequest<FilterGroup>\n{\n    [Required]\n    public string Name { get; set; }\n}\n")),Object(o.b)("p",null,"When invoking the following request, an exception will be thrown:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},"FilterGroup model = new FilterGroup { ColumnNo = 1 };\n((IImportRequestable) model).ToImportRequest(TransactionType.Append); // Will throw exception\n")))}p.isMDXComponent=!0}}]);