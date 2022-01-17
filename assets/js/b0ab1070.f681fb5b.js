"use strict";(self.webpackChunkdata_detective_docusaurus=self.webpackChunkdata_detective_docusaurus||[]).push([[3520],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1409:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_label:"s3_delete",title:"operators.sinks.s3_delete"},c=void 0,s={unversionedId:"data_detective_airflow_api_reference/operators/sinks/s3_delete",id:"data_detective_airflow_api_reference/operators/sinks/s3_delete",isDocsHomePage:!1,title:"operators.sinks.s3_delete",description:"S3Delete Objects",source:"@site/docs/data_detective_airflow_api_reference/operators/sinks/s3_delete.md",sourceDirName:"data_detective_airflow_api_reference/operators/sinks",slug:"/data_detective_airflow_api_reference/operators/sinks/s3_delete",permalink:"/docs/data_detective_airflow_api_reference/operators/sinks/s3_delete",editUrl:"https://github.com/tinkoff/data-detective/edit/master/tools/doc-site/docs/data_detective_airflow_api_reference/operators/sinks/s3_delete.md",tags:[],version:"current",frontMatter:{sidebar_label:"s3_delete",title:"operators.sinks.s3_delete"},sidebar:"tutorialSidebar",previous:{title:"pg_single_target_loader",permalink:"/docs/data_detective_airflow_api_reference/operators/sinks/pg_single_target_loader"},next:{title:"s3_load",permalink:"/docs/data_detective_airflow_api_reference/operators/sinks/s3_load"}},p=[{value:"S3Delete Objects",id:"s3delete-objects",children:[{value:"execute",id:"execute",children:[],level:4}],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"s3delete-objects"},"S3Delete Objects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class S3Delete(TBaseOperator)\n")),(0,o.kt)("p",null,"Delete from ",(0,o.kt)("inlineCode",{parentName:"p"},"bucket")," objects with key ",(0,o.kt)("inlineCode",{parentName:"p"},"filename_column"),"\nin S3 with connection ",(0,o.kt)("inlineCode",{parentName:"p"},"conn_id"),"\nUp to 1000 objects can be deleted in one request.\n",(0,o.kt)("a",{parentName:"p",href:"https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/s3.html#S3.Client.delete_objects"},"https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/s3.html#S3.Client.delete_objects")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    Name of the source, put in the list\n    Connection id\n    Bucket name\n    The name of the column containing the path to the file in S3\n    Number of keys to delete\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"source"),": List"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"conn_id"),": Text"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bucket"),": Text"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"filename_column"),": Text"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"batch_size"),": int"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"kwargs"),": Additional params for the TBaseOperator")),(0,o.kt)("h4",{id:"execute"},"execute"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def execute(context: Optional[Dict])\n")),(0,o.kt)("p",null,"Extended the implementation of airflow.hooks.S3_hook.py:559"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Raises"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AirflowBadRequest"),": - at a non-existent bucket")))}d.isMDXComponent=!0}}]);