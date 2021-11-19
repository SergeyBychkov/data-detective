"use strict";(self.webpackChunkmg_af_docusaurus=self.webpackChunkmg_af_docusaurus||[]).push([[517],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6782:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={sidebar_position:3},p="Creating a DAG",s={unversionedId:"mg-airflow/factories",id:"mg-airflow/factories",isDocsHomePage:!1,title:"Creating a DAG",description:"DAGs can be created in 3 ways:",source:"@site/docs/mg-airflow/factories.md",sourceDirName:"mg-airflow",slug:"/mg-airflow/factories",permalink:"/metadata-governance/docs/mg-airflow/factories",editUrl:"https://github.com/TinkoffCreditSystems/metadata-governance/edit/master/tools/doc-site/docs/mg-airflow/factories.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Basic framework concepts",permalink:"/metadata-governance/docs/mg-airflow/concepts"},next:{title:"Creating a new operator",permalink:"/metadata-governance/docs/mg-airflow/operators"}},c=[{value:"Python Factory",id:"python-factory",children:[],level:2},{value:"YAML Factory",id:"yaml-factory",children:[],level:2}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"creating-a-dag"},"Creating a DAG"),(0,i.kt)("p",null,"DAGs can be created in 3 ways:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Classic"),". Completely manual. It is possible to create a simple dag in the form of a ",(0,i.kt)("inlineCode",{parentName:"li"},"*.py")," file and put it in the ",(0,i.kt)("inlineCode",{parentName:"li"},"dags")," directory."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Python Factory"),". This method is semi-automatic. The Dag parameters are set as a YAML config, but the operators are set by python code"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"YAML Factory"),". Using this method, the dag is entirely set by the YAML config.")),(0,i.kt)("h2",{id:"python-factory"},"Python Factory"),(0,i.kt)("p",null,"This method creates a DAG in semi-automatic mode. The DAG itself is created from the YAML config, empty, without operators.\nOperators are added to the DAG using python code."),(0,i.kt)("p",null,"To create a dag named TAG_NAME, put the yaml file ",(0,i.kt)("inlineCode",{parentName:"p"},"meta.xml")," in any subdirectory ",(0,i.kt)("inlineCode",{parentName:"p"},"dags/dags/"),", for example ",(0,i.kt)("inlineCode",{parentName:"p"},"dags/dags/DAG_NAME")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"dags/dags/DAG_GROUP/DAG_NAME"),".\nAny subdirectory `dogs/dogs/' that has 'meta.yaml' is considered a dag.\nIt has the following parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description"),": DAG description"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tags")," - list of tags. It is usually used in filters on the portal and is optional"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"schedule_interval"),": schedule_interval airflow param, for example ",(0,i.kt)("inlineCode",{parentName:"li"},"10 17 * * *")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"default_args"),": default values",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"owner"),": airflow"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"retries"),": 1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"result_type"),": type of the result, acceptable values: 'pickle', 'pg'"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"work_type"),": type of the work, acceptable values: s3, file, pg, sftp"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"work_conn_id"),": id of the connection to the work"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"factory"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"Python")," (Python factory is being used)")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"description: DAG \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0445 Postgres\ntags:\n  - postgres\nschedule_interval: '@once'\nresult_type: Pickle\ndefault_args:\n  owner: airflow\n  retries: 1\n  result_type: pickle\n  work_type: s3\n  work_conn_id: s3work\nfactory: Python\n")),(0,i.kt)("p",null,"It is also necessary to create ",(0,i.kt)("inlineCode",{parentName:"p"},"dags / dags / DAG_NAME / code / code.py"),".\nIn this file, the function ",(0,i.kt)("inlineCode",{parentName:"p"},"def fill_dag (dag):")," must be defined, which adds the necessary statements to the dag."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def fill_dag(tdag: TDag):\n    ...\n    DbDump(\n        task_id='meta_get_schemas_main',\n        conn_id=PG,\n        sql='/code/meta_get_schemas.sql',\n        dag=tdag\n    )\n    ...\n")),(0,i.kt)("h2",{id:"yaml-factory"},"YAML Factory"),(0,i.kt)("p",null,"This method creates a DAG completely automatically from the YAML config."),(0,i.kt)("p",null,"To create a dag named DAG_NAME, put the yaml file ",(0,i.kt)("inlineCode",{parentName:"p"},"meta.yaml")," in any subdirectory",(0,i.kt)("inlineCode",{parentName:"p"},"dags/dags/"),", e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"dags/dags/DAG_NAME")," or",(0,i.kt)("inlineCode",{parentName:"p"}," dags/dags/DAG_GROUP/DAG_NAME"),".\nAny subdirectory ",(0,i.kt)("inlineCode",{parentName:"p"},"dags/dags/")," that contains ",(0,i.kt)("inlineCode",{parentName:"p"},"meta.yaml")," is considered a dag.\nThis file should contain the following parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description"),": DAG description",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tags")," - tags list. This list is used in filters on the portal"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"schedule_interval"),": schedule_interval airflow param, for example ",(0,i.kt)("inlineCode",{parentName:"li"},"10 17 * * *")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"default_args"),": default values",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"owner"),": airflow"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"retries"),": 1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"result_type"),": result type, acceptable values: 'pickle', 'pg', 'gp'"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"work_type"),": type of the work, acceptable values: s3, file, gp, pg, sftp"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"work_conn_id"),": id of the connection to the work"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"factory"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"YAML")," (YAML factory is being used)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tasks"),": tasks list",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"task_id"),": task name (unique id)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description"),": task description"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type"),": Task type, class name of one of the helpers library operators, for example ",(0,i.kt)("inlineCode",{parentName:"li"},"PgDump")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<params>"),": Parameters required to create a specific task. For example, ",(0,i.kt)("inlineCode",{parentName:"li"},"conn_id"),",",(0,i.kt)("inlineCode",{parentName:"li"}," sql"))))),(0,i.kt)("p",null,"It is important that the task parameters in the YAML file contain a complete list of required parameters for the operator constructor."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"description: \u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0439 DAG\nschedule_interval: '*/5 * * * *'\nresult_type: Pickle\ndefault_args:\n  owner: airflow\n  retries: 1\n  result_type: pickle\n  work_type: s3\n  work_conn_id: s3work\nfactory: YAML\ntasks:\n\n  - task_id: df_now\n    description: \u0417\u0430\u043f\u0440\u043e\u0441 \u043a \u0431\u0430\u0437\u0435 \u0434\u0430\u043d\u043d\u044b\u0445\n    type: DbDump\n    conn_id:  pg\n    sql: 'select now() as value;'\n\n  - task_id: append_all\n    description: \u041e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0433\u043e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u0441 \u0441\u0430\u043c\u0438\u043c \u0441\u043e\u0431\u043e\u0439\n    type: Append\n    source:\n      - df_now\n      - df_now\n")),(0,i.kt)("p",null,"All additional functions, for example, callable functions for ",(0,i.kt)("inlineCode",{parentName:"p"},"PythonOperator")," can be specified in the file",(0,i.kt)("inlineCode",{parentName:"p"}," dags / dags / DAG_NAME / code / code.py"),".\nThese functions will be automatically loaded when the DAG is generated."),(0,i.kt)("p",null,"Any such function must receive the context as the first parameter. For example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def transform(context: dict, df: DataFrame) -> DataFrame:\n    \"\"\"Transform DataFrame\n\n    :param context: Execution context\n    :param df: Input DataFrame\n    :return: df\n    \"\"\"\n    # etc_dir\n    config = read_config(context['dag'].etc_dir)\n    # Airflow Variable etl_env\n    env = 'dev' if context['var']['value'].etl_env == 'dev' else 'prod'\n    return df\n")),(0,i.kt)("p",null,"This allows access to all dag, task and running properties."))}m.isMDXComponent=!0}}]);