"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9220],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(a),k=l,c=u["".concat(d,".").concat(k)]||u[k]||s[k]||r;return a?n.createElement(c,i(i({ref:t},m),{},{components:a})):n.createElement(c,i({ref:t},m))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},3076:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(7462),l=(a(7294),a(3905));const r={title:"Models"},i=void 0,o={unversionedId:"docs/specs/models",id:"docs/specs/models",title:"Models",description:"Draft Specification: functionality has not been implemented yet.",source:"@site/docs/docs/specs/models.md",sourceDirName:"docs/specs",slug:"/docs/specs/models",permalink:"/docs/specs/models",draft:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/docs/specs/models.md",tags:[],version:"current",lastUpdatedBy:"Faisal Amir",lastUpdatedAt:1700225581,formattedLastUpdatedAt:"Nov 17, 2023",frontMatter:{title:"Models"},sidebar:"docsSidebar",previous:{title:"Chats",permalink:"/docs/specs/chats"},next:{title:"Threads",permalink:"/docs/specs/threads"}},d={},p=[{value:"User Stories",id:"user-stories",level:2},{value:"Jan Model Object",id:"jan-model-object",level:2},{value:"Source_url",id:"source_url",level:3},{value:"Local source_url",id:"local-source_url",level:4},{value:"Remote source_url",id:"remote-source_url",level:4},{value:"Custom importers",id:"custom-importers",level:4},{value:"Generic Example",id:"generic-example",level:3},{value:"Example: multiple binaries",id:"example-multiple-binaries",level:3},{value:"Example: Azure API",id:"example-azure-api",level:3},{value:"Filesystem",id:"filesystem",level:2},{value:"Default ./model folder",id:"default-model-folder",level:3},{value:"Multiple quantizations",id:"multiple-quantizations",level:3},{value:"Multiple model partitions",id:"multiple-model-partitions",level:3},{value:"?? whats this example for?",id:"-whats-this-example-for",level:3},{value:"Jan API",id:"jan-api",level:2},{value:"Model API Object",id:"model-api-object",level:3},{value:"List models",id:"list-models",level:3},{value:"Get Model",id:"get-model",level:3},{value:"Delete Model",id:"delete-model",level:3},{value:"Get Model State",id:"get-model-state",level:3},{value:"Get Model Metadata",id:"get-model-metadata",level:3},{value:"Download Model",id:"download-model",level:3},{value:"Start Model",id:"start-model",level:3},{value:"Stop Model",id:"stop-model",level:3}],m={toc:p},u="wrapper";function s(e){let{components:t,...a}=e;return(0,l.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"Draft Specification: functionality has not been implemented yet. "),(0,l.kt)("p",{parentName:"admonition"},"Feedback: ",(0,l.kt)("a",{parentName:"p",href:"https://hackmd.io/ulO3uB1AQCqLa5SAAMFOQw"},"HackMD: Models Spec")," ")),(0,l.kt)("p",null,"Models are AI models like Llama and Mistral"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"OpenAI Equivalent: ",(0,l.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/models"},"https://platform.openai.com/docs/api-reference/models"))),(0,l.kt)("h2",{id:"user-stories"},"User Stories"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Users can download a model via a web URL")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Wireframes here")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Users can import a model from local directory")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Wireframes here")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Users can configure model settings, like run parameters")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Wireframes here")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Users can override run settings at runtime")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"See Assistant Spec and Thread")),(0,l.kt)("h2",{id:"jan-model-object"},"Jan Model Object"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A ",(0,l.kt)("inlineCode",{parentName:"li"},"Jan Model Object"),' is a \u201crepresentation" of a model'),(0,l.kt)("li",{parentName:"ul"},"Objects are defined by ",(0,l.kt)("inlineCode",{parentName:"li"},"model-name.json")," files in ",(0,l.kt)("inlineCode",{parentName:"li"},"json")," format"),(0,l.kt)("li",{parentName:"ul"},"Objects are identified by ",(0,l.kt)("inlineCode",{parentName:"li"},"folder-name/model-name"),", where its ",(0,l.kt)("inlineCode",{parentName:"li"},"id")," is indicative of its file location."),(0,l.kt)("li",{parentName:"ul"},"Objects are designed to be compatible with ",(0,l.kt)("inlineCode",{parentName:"li"},"OpenAI Model Objects"),", with additional properties needed to run on our infrastructure."),(0,l.kt)("li",{parentName:"ul"},"ALL object properties are optional, i.e. users should be able to run a model declared by an empty ",(0,l.kt)("inlineCode",{parentName:"li"},"json")," file.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Validation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"source_url")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The model download source. It can be an external url or a local filepath."),(0,l.kt)("td",{parentName:"tr",align:null},"Defaults to ",(0,l.kt)("inlineCode",{parentName:"td"},"pwd"),". See ",(0,l.kt)("a",{parentName:"td",href:"#Source_url"},"Source_url"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"object")),(0,l.kt)("td",{parentName:"tr",align:null},"enum: ",(0,l.kt)("inlineCode",{parentName:"td"},"model"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"assistant"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"thread"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"message")),(0,l.kt)("td",{parentName:"tr",align:null},"Type of the Jan Object. Always ",(0,l.kt)("inlineCode",{parentName:"td"},"model")),(0,l.kt)("td",{parentName:"tr",align:null},'Defaults to "model"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"A vanity name"),(0,l.kt)("td",{parentName:"tr",align:null},"Defaults to filename")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"description")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"A vanity description of the model"),(0,l.kt)("td",{parentName:"tr",align:null},'Defaults to ""')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"state")),(0,l.kt)("td",{parentName:"tr",align:null},"enum","[",(0,l.kt)("inlineCode",{parentName:"td"},"running")," , ",(0,l.kt)("inlineCode",{parentName:"td"},"stopped"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"not-downloaded")," , ",(0,l.kt)("inlineCode",{parentName:"td"},"downloading"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"Needs more thought"),(0,l.kt)("td",{parentName:"tr",align:null},"Defaults to ",(0,l.kt)("inlineCode",{parentName:"td"},"not-downloaded"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"parameters")),(0,l.kt)("td",{parentName:"tr",align:null},"map"),(0,l.kt)("td",{parentName:"tr",align:null},"Defines default model run parameters used by any assistant."),(0,l.kt)("td",{parentName:"tr",align:null},"Defaults to ",(0,l.kt)("inlineCode",{parentName:"td"},"{}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"metadata")),(0,l.kt)("td",{parentName:"tr",align:null},"map"),(0,l.kt)("td",{parentName:"tr",align:null},"Stores additional structured information about the model."),(0,l.kt)("td",{parentName:"tr",align:null},"Defaults to ",(0,l.kt)("inlineCode",{parentName:"td"},"{}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"metadata.engine")),(0,l.kt)("td",{parentName:"tr",align:null},"enum: ",(0,l.kt)("inlineCode",{parentName:"td"},"llamacpp"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"api"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"tensorrt")),(0,l.kt)("td",{parentName:"tr",align:null},"The model backend used to run model."),(0,l.kt)("td",{parentName:"tr",align:null},'Defaults to "llamacpp"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"metadata.quantization")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported formats only"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#Custom-importers"},"Custom importers"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"metadata.binaries")),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported formats only."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#Custom-importers"},"Custom importers"))))),(0,l.kt)("h3",{id:"source_url"},"Source_url"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Users can download models from a ",(0,l.kt)("inlineCode",{parentName:"li"},"remote")," source or reference an existing ",(0,l.kt)("inlineCode",{parentName:"li"},"local")," model."),(0,l.kt)("li",{parentName:"ul"},"If this property is not specified in the Model Object file, then the default behavior is to look in the current directory.")),(0,l.kt)("h4",{id:"local-source_url"},"Local source_url"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Users can import a local model by providing the filepath to the model")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'// ./models/llama2/llama2-7bn-gguf.json\n"source_url": "~/Downloads/llama-2-7bn-q5-k-l.gguf",\n\n// Default, if property is omitted\n"source_url": "./",\n')),(0,l.kt)("h4",{id:"remote-source_url"},"Remote source_url"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Users can download a model by remote URL."),(0,l.kt)("li",{parentName:"ul"},"Supported url formats:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"https://huggingface.co/TheBloke/Llama-2-7B-Chat-GGUF/blob/main/llama-2-7b-chat.Q3_K_L.gguf")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"https://any-source.com/.../model-binary.bin"))))),(0,l.kt)("h4",{id:"custom-importers"},"Custom importers"),(0,l.kt)("p",null,"Additionally, Jan supports importing popular formats. For example, if you provide a HuggingFace URL for a ",(0,l.kt)("inlineCode",{parentName:"p"},"TheBloke")," model, Jan automatically downloads and catalogs all quantizations. Custom importers autofills properties like ",(0,l.kt)("inlineCode",{parentName:"p"},"metadata.quantization")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"metadata.size"),"."),(0,l.kt)("p",null,"Supported URL formats with custom importers:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"huggingface/thebloke"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"TODO: URL here")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"janhq"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"TODO: put URL here")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"azure_openai"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"TODO: put URL here")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"openai"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"TODO: put URL here"))),(0,l.kt)("h3",{id:"generic-example"},"Generic Example"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Model has 1 binary ",(0,l.kt)("inlineCode",{parentName:"li"},"model-zephyr-7B.json")),(0,l.kt)("li",{parentName:"ul"},"See ",(0,l.kt)("a",{parentName:"li",href:"https://huggingface.co/TheBloke/zephyr-7B-beta-GGUF/"},"source"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'// ./models/zephr/zephyr-7b-beta-Q4_K_M.json\n// Note: Default fields omitted for brevity\n"source_url": "https://huggingface.co/TheBloke/zephyr-7B-beta-GGUF/blob/main/zephyr-7b-beta.Q4_K_M.gguf",\n"parameters": {\n    "ctx_len": 2048,\n    "ngl": 100,\n    "embedding": true,\n    "n_parallel": 4,\n    "pre_prompt": "A chat between a curious user and an artificial intelligence",\n    "user_prompt": "USER: ",\n    "ai_prompt": "ASSISTANT: "\n    "temperature": "0.7",\n    "token_limit": "2048",\n    "top_k": "..",\n    "top_p": "..",\n},\n"metadata": {\n    "quantization": "..",\n    "size": "..",\n}\n')),(0,l.kt)("h3",{id:"example-multiple-binaries"},"Example: multiple binaries"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Model has multiple binaries"),(0,l.kt)("li",{parentName:"ul"},"See ",(0,l.kt)("a",{parentName:"li",href:"https://huggingface.co/mys/ggml_llava-v1.5-13b"},"source"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"source_url": "https://huggingface.co/mys/ggml_llava-v1.5-13b"\n"metadata": {\n    "binaries": "..", // TODO: what should this property be\n}\n')),(0,l.kt)("h3",{id:"example-azure-api"},"Example: Azure API"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Using a remote API to access model"),(0,l.kt)("li",{parentName:"ul"},"See ",(0,l.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/ai-services/openai/quickstart?tabs=command-line%2Cpython&pivots=rest-api"},"source"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"source_url": "https://docs-test-001.openai.azure.com/openai.azure.com/docs-test-001/gpt4-turbo",\n"parameters": {\n    "API-KEY": "",\n    "DEPLOYMENT-NAME": "",\n    "api-version": "2023-05-15",\n    "temperature": "0.7",\n    "max_tokens": "2048",\n    "presence_penalty": "0",\n    "top_p": "1",\n    "stream": "true"\n}\n"metadata": {\n    "engine": "api",\n}\n')),(0,l.kt)("h2",{id:"filesystem"},"Filesystem"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Everything needed to represent a ",(0,l.kt)("inlineCode",{parentName:"li"},"model")," is packaged into an ",(0,l.kt)("inlineCode",{parentName:"li"},"Model folder"),"."),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"folder")," is standalone and can be easily zipped, imported, and exported, e.g. to Github."),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"folder")," always contains at least one ",(0,l.kt)("inlineCode",{parentName:"li"},"Model Object"),", declared in a ",(0,l.kt)("inlineCode",{parentName:"li"},"json")," format.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"folder")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"file")," do not have to share the same name"))),(0,l.kt)("li",{parentName:"ul"},"The model ",(0,l.kt)("inlineCode",{parentName:"li"},"id")," is made up of ",(0,l.kt)("inlineCode",{parentName:"li"},"folder_name/filename")," and is thus always unique.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"/janroot\n    /models\n        azure-openai/                       # Folder name\n            azure-openai-gpt3-5.json        # File name\n\n        llama2-70b/\n            model.json\n            .gguf\n")),(0,l.kt)("h3",{id:"default-model-folder"},"Default ./model folder"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Jan ships with a default model folders containing recommended models"),(0,l.kt)("li",{parentName:"ul"},"Only the Model Object ",(0,l.kt)("inlineCode",{parentName:"li"},"json")," files are included"),(0,l.kt)("li",{parentName:"ul"},"Users must later explicitly download the model binaries")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"models/\n    mistral-7b/\n        mistral-7b.json\n    hermes-7b/\n        hermes-7b.json\n")),(0,l.kt)("h3",{id:"multiple-quantizations"},"Multiple quantizations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Each quantization has its own ",(0,l.kt)("inlineCode",{parentName:"li"},"Jan Model Object")," file")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"llama2-7b-gguf/\n    llama2-7b-gguf-Q2.json\n    llama2-7b-gguf-Q3_K_L.json\n    .bin\n")),(0,l.kt)("h3",{id:"multiple-model-partitions"},"Multiple model partitions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A Model that is partitioned into several binaries use just 1 file")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"llava-ggml/\n    llava-ggml-Q5.json\n    .proj\n    ggml\n")),(0,l.kt)("h3",{id:"-whats-this-example-for"},"?? whats this example for?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"??")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"llama-70b-finetune/\n    llama-70b-finetune-q5.json\n    .bin\n")),(0,l.kt)("h2",{id:"jan-api"},"Jan API"),(0,l.kt)("h3",{id:"model-api-object"},"Model API Object"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"Jan Model Object")," maps into the ",(0,l.kt)("inlineCode",{parentName:"li"},"OpenAI Model Object"),"."),(0,l.kt)("li",{parentName:"ul"},"Properties marked with ",(0,l.kt)("inlineCode",{parentName:"li"},"*")," are compatible with the ",(0,l.kt)("a",{parentName:"li",href:"https://platform.openai.com/docs/api-reference/models"},"OpenAI ",(0,l.kt)("inlineCode",{parentName:"a"},"model")," object")),(0,l.kt)("li",{parentName:"ul"},"Note: The ",(0,l.kt)("inlineCode",{parentName:"li"},"Jan Model Object")," has additional properties when retrieved via its API endpoint."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://platform.openai.com/docs/api-reference/models/object"},"https://platform.openai.com/docs/api-reference/models/object"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Public Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Jan Model Object (",(0,l.kt)("inlineCode",{parentName:"th"},"m"),") Property"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id"),"*"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Model uuid; also the file location under ",(0,l.kt)("inlineCode",{parentName:"td"},"/models")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"folder/filename"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"object"),"*"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'Always "model"'),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"m.object"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"created"),"*"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Timestamp when model was created."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"m.json")," creation time")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"owned_by"),"*"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The organization that owns the model."),(0,l.kt)("td",{parentName:"tr",align:null},"grep author from ",(0,l.kt)("inlineCode",{parentName:"td"},"m.source_url")," OR $(whoami)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},"string or null"),(0,l.kt)("td",{parentName:"tr",align:null},"A display name"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"m.name")," or filename")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"description")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"A vanity description of the model"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"m.description"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"state")),(0,l.kt)("td",{parentName:"tr",align:null},"enum"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"parameters")),(0,l.kt)("td",{parentName:"tr",align:null},"map"),(0,l.kt)("td",{parentName:"tr",align:null},"Defines default model run parameters used by any assistant."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"metadata")),(0,l.kt)("td",{parentName:"tr",align:null},"map"),(0,l.kt)("td",{parentName:"tr",align:null},"Stores additional structured information about the model."),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"list-models"},"List models"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://platform.openai.com/docs/api-reference/models/list"},"https://platform.openai.com/docs/api-reference/models/list"))),(0,l.kt)("p",null,"TODO: @hiro"),(0,l.kt)("h3",{id:"get-model"},"Get Model"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://platform.openai.com/docs/api-reference/models/retrieve"},"https://platform.openai.com/docs/api-reference/models/retrieve"))),(0,l.kt)("p",null,"TODO: @hiro"),(0,l.kt)("h3",{id:"delete-model"},"Delete Model"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://platform.openai.com/docs/api-reference/models/delete"},"https://platform.openai.com/docs/api-reference/models/delete"))),(0,l.kt)("p",null,"TODO: @hiro"),(0,l.kt)("h3",{id:"get-model-state"},"Get Model State"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Jan-only endpoint\nTODO: @hiro")),(0,l.kt)("h3",{id:"get-model-metadata"},"Get Model Metadata"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Jan-only endpoint\nTODO: @hiro")),(0,l.kt)("h3",{id:"download-model"},"Download Model"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Jan-only endpoint\nTODO: @hiro")),(0,l.kt)("h3",{id:"start-model"},"Start Model"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Jan-only endpoint\nTODO: @hiro")),(0,l.kt)("h3",{id:"stop-model"},"Stop Model"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Jan-only endpoint\nTODO: @hiro")))}s.isMDXComponent=!0}}]);