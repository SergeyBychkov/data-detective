"use strict";(self.webpackChunkdata_detective_docusaurus=self.webpackChunkdata_detective_docusaurus||[]).push([[4461],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return g}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),d=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(r),g=n,_=u["".concat(c,".").concat(g)]||u[g]||p[g]||l;return r?a.createElement(_,o(o({ref:t},s),{},{components:r})):a.createElement(_,o({ref:t},s))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var d=2;d<l;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1333:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return s},default:function(){return u}});var a=r(7462),n=r(3366),l=(r(7294),r(3905)),o=["components"],i={sidebar_label:"tdag",title:"dag_generator.dags.tdag"},c=void 0,d={unversionedId:"data_detective_airflow_api_reference/dag_generator/dags/tdag",id:"data_detective_airflow_api_reference/dag_generator/dags/tdag",isDocsHomePage:!1,title:"dag_generator.dags.tdag",description:"TDag Objects",source:"@site/docs/data_detective_airflow_api_reference/dag_generator/dags/tdag.md",sourceDirName:"data_detective_airflow_api_reference/dag_generator/dags",slug:"/data_detective_airflow_api_reference/dag_generator/dags/tdag",permalink:"/docs/data_detective_airflow_api_reference/dag_generator/dags/tdag",editUrl:"https://github.com/tinkoff/data-detective/edit/master/tools/doc-site/docs/data_detective_airflow_api_reference/dag_generator/dags/tdag.md",tags:[],version:"current",frontMatter:{sidebar_label:"tdag",title:"dag_generator.dags.tdag"},sidebar:"tutorialSidebar",previous:{title:"python_dag",permalink:"/docs/data_detective_airflow_api_reference/dag_generator/dags/python_dag"},next:{title:"yaml_dag",permalink:"/docs/data_detective_airflow_api_reference/dag_generator/dags/yaml_dag"}},s=[{value:"TDag Objects",id:"tdag-objects",children:[{value:"get_result",id:"get_result",children:[],level:4},{value:"get_work",id:"get_work",children:[],level:4},{value:"clear_all_works",id:"clear_all_works",children:[],level:4},{value:"get_all_works",id:"get_all_works",children:[],level:4},{value:"get_callable_by_def",id:"get_callable_by_def",children:[],level:4}],level:2}],p={toc:s};function u(e){var t=e.components,r=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"tdag-objects"},"TDag Objects"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class TDag(DAG)\n")),(0,l.kt)("p",null,"The Airflow DAG extension"),(0,l.kt)("p",null,":raises Exception, FileNotFoundError:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dag_dir"),": The path to the directory with the dag file (or its YAML)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"factory"),": The type of factory to generate, if ","'","None","'",", then the dag was created without generating"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"kwargs"),": Additional arguments")),(0,l.kt)("h4",{id:"get_result"},"get","_","result"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_result(operator: TBaseOperator, result_name: str, result_type: str, work_type: str, work_conn_id: str = None, **kwargs, ,) -> BaseResult\n")),(0,l.kt)("p",null,"Return result.\nNo physical initialization is taking place"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Raises"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ValueError"),": ")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,"The result of the operator"),(0,l.kt)("h4",{id:"get_work"},"get","_","work"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_work(work_type: str = None, work_conn_id: str = None) -> BaseWork\n")),(0,l.kt)("p",null,"Get work by conn_id.\nNote! Only the class itself is created here, work is not initialized and is not created"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Raises"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ValueError"),": ")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,"Work with work_type located in work_conn_id"),(0,l.kt)("h4",{id:"clear_all_works"},"clear","_","all","_","works"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def clear_all_works(context: dict)\n")),(0,l.kt)("p",null,"Clearing all works after execution"),(0,l.kt)("h4",{id:"get_all_works"},"get","_","all","_","works"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_all_works(context: dict)\n")),(0,l.kt)("p",null,"Clearing all work on completion of execution"),(0,l.kt)("h4",{id:"get_callable_by_def"},"get","_","callable","_","by","_","def"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_callable_by_def(func_def: str) -> Callable\n")),(0,l.kt)("p",null,"Get a function by its description from yaml. Lambdas are supported.\nIf the function is in the project, use it directly.\nIf the function is in code.py - take it from there, otherwise from the global"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"func_def"),": Function description")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,"Callable"))}u.isMDXComponent=!0}}]);