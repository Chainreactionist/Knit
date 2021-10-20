"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[391],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85787:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={sidebar_position:2},c="Getting Started",s={unversionedId:"gettingstarted",id:"gettingstarted",isDocsHomePage:!1,title:"Getting Started",description:"Install",source:"@site/docs/gettingstarted.md",sourceDirName:".",slug:"/gettingstarted",permalink:"/Knit/docs/gettingstarted",editUrl:"https://git:ghs_I0fgRiFQsF6hfoUzSJrwXZpNLt7iVN2DMFhV@github.com/Sleitnick/Knit/edit/master/docs/gettingstarted.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"About",permalink:"/Knit/docs/intro"},next:{title:"Services",permalink:"/Knit/docs/services"}},p=[{value:"Install",id:"install",children:[]},{value:"Basic Usage",id:"basic-usage",children:[{value:"A Simple Service",id:"a-simple-service",children:[]}]}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("p",null,"Installing Knit is very simple. Just drop the module into ReplicatedStorage. Knit can also be used within a Rojo project."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Roblox Studio workflow:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Get ",(0,o.kt)("a",{parentName:"li",href:"https://www.roblox.com/library/5530714855/Knit"},"Knit")," from the Roblox library."),(0,o.kt)("li",{parentName:"ol"},"Place Knit directly within ReplicatedStorage.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Rojo/Wally workflow:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add Knit to your ",(0,o.kt)("inlineCode",{parentName:"p"},"wally.toml")," dependency list (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},'Knit = "sleitnick/knit@1.1.0-rc.1"'),")")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Require Knit like any other module grabbed from Wally"),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Wally")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Not familiar with Wally? Wally is a package manager (like NPM) for the Roblox ecosystem.\nTo get started, check out the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/UpliftGames/wally"},"Wally repository"),"."))))),(0,o.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,o.kt)("p",null,"The core usage of Knit is the same from the server and the client. The general pattern is to create a single script on the server and a single script on the client. These scripts will load Knit, create services/controllers, and then start Knit."),(0,o.kt)("p",null,"The most basic usage would look as such:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local Knit = require(game:GetService(\"ReplicatedStorage\").Packages.Knit)\n\nKnit.Start():catch(warn)\n-- Knit.Start() returns a Promise, so we are catching any errors and feeding it to the built-in 'warn' function\n-- You could also chain 'await()' to the end to yield until the whole sequence is completed:\n--    Knit.Start():catch(warn):await()\n")),(0,o.kt)("p",null,"That would be the necessary code on both the server and the client. However, nothing interesting is going to happen. Let's dive into some more examples."),(0,o.kt)("h3",{id:"a-simple-service"},"A Simple Service"),(0,o.kt)("p",null,"A service is simply a structure that ",(0,o.kt)("em",{parentName:"p"},"serves")," some specific purpose. For instance, a game might have a MoneyService, which manages in-game currency for players. Let's look at a simple example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local Knit = require(game:GetService("ReplicatedStorage").Packages.Knit)\n\n-- Create the service:\nlocal MoneyService = Knit.CreateService {\n    Name = "MoneyService";\n}\n\n-- Add some methods to the service:\n\nfunction MoneyService:GetMoney(player)\n    -- Do some sort of data fetch\n    local money = someDataStore:GetAsync("money")\n    return money\nend\n\nfunction MoneyService:GiveMoney(player, amount)\n    -- Do some sort of data fetch\n    local money = self:GetMoney(player)\n    money += amount\n    someDataStore:SetAsync("money", money)\nend\n\nKnit.Start():catch(warn)\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It's better practice to put services and controllers within their own ModuleScript and then require them from your main script. For the sake of simplicity, they are all in one script for these examples."))),(0,o.kt)("p",null,"Now we have a little MoneyService that can get and give money to a player. However, only the server can use this at the moment. What if we want clients to fetch how much money they have? To do this, we have to create some client-side code to consume our service. We ",(0,o.kt)("em",{parentName:"p"},"could")," create a controller, but it's not necessary for this example."),(0,o.kt)("p",null,"First, we need to expose a method to the client. We can do this by writing methods on the service's Client table:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"-- Money service on the server\n...\nfunction MoneyService.Client:GetMoney(player)\n    -- We already wrote this method, so we can just call the other one.\n    -- 'self.Server' will reference back to the root MoneyService.\n    return self.Server:GetMoney(player)\nend\n...\n")),(0,o.kt)("p",null,"We can write client-side code to fetch money from the service:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'-- Client-side code\nlocal Knit = require(game:GetService("ReplicatedStorage").Packages.Knit)\nKnit.Start():catch(warn):await()\n\nlocal moneyService = Knit.GetService("MoneyService")\nlocal money = moneyService:GetMoney()\n\n-- Alternatively, using promises:\nmoneyService:GetMoneyPromise():andThen(function(money)\n    print(money)\nend)\n')),(0,o.kt)("p",null,"Under the hood, Knit is creating a RemoteFunction bound to the service's GetMoney method. Knit keeps RemoteFunctions and RemoteEvents out of the way so that developers can focus on writing code and not building communication infrastructure."),(0,o.kt)("p",null,"Check out the ",(0,o.kt)("a",{parentName:"p",href:"/Knit/docs/services"},"Services")," documentation for more info on services."))}d.isMDXComponent=!0}}]);