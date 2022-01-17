"use strict";(self.webpackChunkdata_detective_docusaurus=self.webpackChunkdata_detective_docusaurus||[]).push([[8375],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7033:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={id:"quickstart-airflow",title:"Quickstart"},c="Running the dev environment using docker-compose",s={unversionedId:"data-detective-airflow/quickstart-airflow",id:"data-detective-airflow/quickstart-airflow",isDocsHomePage:!1,title:"Quickstart",description:"Deploying the development environment",source:"@site/docs/data-detective-airflow/quickstart.md",sourceDirName:"data-detective-airflow",slug:"/data-detective-airflow/quickstart-airflow",permalink:"/docs/data-detective-airflow/quickstart-airflow",editUrl:"https://github.com/tinkoff/data-detective/edit/master/tools/doc-site/docs/data-detective-airflow/quickstart.md",tags:[],version:"current",frontMatter:{id:"quickstart-airflow",title:"Quickstart"},sidebar:"tutorialSidebar",previous:{title:"Data Detective Airflow",permalink:"/docs/data-detective-airflow/intro"},next:{title:"Basic framework concepts",permalink:"/docs/data-detective-airflow/concepts"}},p=[{value:"Setup in PyCharm Professional",id:"setup-in-pycharm-professional",children:[],level:3},{value:"Working in a dev environment",id:"working-in-a-dev-environment",children:[],level:3},{value:"Notes",id:"notes",children:[],level:2}],u={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"running-the-dev-environment-using-docker-compose"},"Running the dev environment using docker-compose"),(0,a.kt)("p",null,"Deploying the development environment"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd data-detective-airflow\ncp .env.example .env\nrandstr=`shuf -zer -n32  {A..Z} {a..z} {0..9} | tr -d '\\0'`\necho \"SECRET_KEY=${randstr}\" >> .env\ndocker-compose up -d\n")),(0,a.kt)("p",null,"It is possible to check data-detective-airflow with ",(0,a.kt)("a",{parentName:"p",href:"https://airflow.apache.org/docs/stable/executor/celery.html"},"Celery Executor"),"\nas follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose -f docker-compose.CeleryExecutor.yml up -d\n")),(0,a.kt)("p",null,"This services will be launched:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"redis - queue storage"),(0,a.kt)("li",{parentName:"ul"},"webserver - portal"),(0,a.kt)("li",{parentName:"ul"},"scheduler - scheduler that runs tasks"),(0,a.kt)("li",{parentName:"ul"},"flower - view current queues"),(0,a.kt)("li",{parentName:"ul"},"worker - a service that runs tasks, scalable, 2 instances")),(0,a.kt)("p",null,"To run autotests, run the command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose -f docker-compose.tests.yml up --build --exit-code-from=tests\n")),(0,a.kt)("p",null,"For all Executor, postgres is used as a metadata repository (metadb).\nIn a production environment, it is advisable to use the Celery Executor option."),(0,a.kt)("h3",{id:"setup-in-pycharm-professional"},"Setup in PyCharm Professional"),(0,a.kt)("p",null,"Configuring SSH Python interpreter in PyCharm"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Preferences (CMD + ,) > Project Settings > Project Interpreter")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Click on the gear icon next to the "Project Interpreter" dropdown > Add')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Select "SSH Interpreter" > Host: localhost'),(0,a.kt)("p",{parentName:"li"},"Port: 9922, "),(0,a.kt)("p",{parentName:"li"},"Username: airflow. "),(0,a.kt)("p",{parentName:"li"},"Password: see ",(0,a.kt)("inlineCode",{parentName:"p"},"./Dockerfile:15")),(0,a.kt)("p",{parentName:"li"},"Interpreter: /usr/local/bin/python3, "),(0,a.kt)("p",{parentName:"li"},"Sync folders: Project Root -> /usr/local/airflow"),(0,a.kt)("p",{parentName:"li"},'Disable "Automatically upload..."')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Confirm the changes and wait for PyCharm to update the indexes")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To run tests go to PyCharm -> Edit Configurations -> Environment variables: "))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"AIRFLOW_HOME=/usr/local/airflow;PYTHON_PATH=/usr/local/bin/python/:/usr/local/airflow:/usr/local/airflow/dags;AIRFLOW__CORE__SQL_ALCHEMY_CONN=postgresql+psycopg2://airflow:airflow@metadb:5432/airflow\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In order not to specify Environment variables every time, they should be added to Templates -> Python tests -> pytest (\u0432 Edit Configurations)"),(0,a.kt)("li",{parentName:"ol"},"Setting up py test. To do this, in the Pycharm settings, select\nTools->Python Integrated Tools->Testing->Default test runner = pytest.\nAfter that, it is possible to run tests by right-clicking on the directory ",(0,a.kt)("inlineCode",{parentName:"li"},"tests")," or the desired test file.")),(0,a.kt)("h3",{id:"working-in-a-dev-environment"},"Working in a dev environment"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Airflow UI is available at http://localhost:8080/.\nLogin/password to log in - airflow /airflow.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To connect to a dev container with airflow, select this options below in PyCharm: ",(0,a.kt)("inlineCode",{parentName:"p"},"Tools > Start SSH Session > Remote Python ...")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose exec app bash")," (app - service name in docker-compose.yml, bash - command for executing)"))),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"At the time of publication, Docker Compose in the command line can be called with a command without a hyphen ",(0,a.kt)("inlineCode",{parentName:"li"},"docker compose ..."),".\nThe documentation will contain examples with ",(0,a.kt)("inlineCode",{parentName:"li"},"docker-compose ..."),".")))}d.isMDXComponent=!0}}]);