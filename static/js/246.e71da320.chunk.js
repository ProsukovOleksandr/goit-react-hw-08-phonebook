"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[246],{338:function(e,n,t){t.r(n),t.d(n,{ContactList:function(){return o}});var r=t(208),a=t(9434),s=t(184),i=function(e){var n=e.contact,t=(0,a.I0)();return(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{children:n.name}),(0,s.jsxs)("span",{children:[" ",n.numbers]}),(0,s.jsx)("button",{onClick:function(){return t((0,r._f)(n.id))},children:"Delete"})]})},c=t(138),o=function(){var e=(0,a.v9)(c.selectContacts),n=(0,a.v9)(c.getIsLoading),t=(0,a.v9)(c.getError),r=(0,a.v9)(c.selectFilter);return(0,s.jsxs)("div",{children:[n&&(0,s.jsx)("p",{children:"Loading contacts..."}),t&&(0,s.jsx)("p",{children:t}),function(e,n){return""===n?e:e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))}(e,r).map((function(e){var n=e.id;return(0,s.jsx)(i,{contact:e},n)}))]})}},2190:function(e,n,t){t.r(n),t.d(n,{Filter:function(){return i}});var r=t(9434),a=t(138),s=t(184),i=function(){var e=(0,r.v9)(a.selectFilter),n=(0,r.I0)();return(0,s.jsxs)("label",{children:["Find contacts by name",(0,s.jsx)("input",{type:"text",onChange:function(e){n((0,a.setFilter)(e.target.value))},value:e})]})}},2015:function(e,n,t){t.r(n),t.d(n,{ContactForm:function(){return c}});var r=t(9434),a=t(138),s=t(208),i=t(184),c=function(){var e=(0,r.v9)(a.selectContacts),n=(0,r.I0)(),t={name:"",numbers:""},c=function(e){var n=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,n="",t=crypto.getRandomValues(new Uint8Array(e));e--;){var r=63&t[e];n+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return n}(5);"name"===e.target.name&&(t.name=e.target.value),"number"===e.target.name&&(t.numbers=e.target.value),t.id=n};return(0,i.jsxs)("form",{onSubmit:function(t){t.preventDefault();var r=t.target;if(e.find((function(e){return e.name===r[0].value})))return alert("".concat(r[0].value," is already in contacts")),void r.reset();n((0,s.el)({name:r[0].value,numbers:r[1].value})),r.reset()},children:[(0,i.jsxs)("label",{children:["Name",(0,i.jsx)("input",{type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:c,defaultValue:t.name})]}),(0,i.jsxs)("label",{children:["Number",(0,i.jsx)("input",{type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:c,defaultValue:t.numbers})]}),(0,i.jsx)("button",{type:"submit",children:"Add contact"})]})}},6246:function(e,n,t){t.r(n);var r=t(9434),a=t(208),s=t(2791),i=t(184),c=t(338).ContactList,o=t(2190).Filter,u=t(2015).ContactForm,l=t(138),d=l.getIsLoading,m=l.getError;n.default=function(){var e=(0,r.v9)(d),n=(0,r.v9)(m),t=(0,r.I0)();return(0,s.useEffect)((function(){t((0,a.yF)())}),[t]),(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:"Phonebook"}),(0,i.jsx)(u,{}),e&&!n&&(0,i.jsx)("b",{children:"Request in progress..."}),(0,i.jsx)("h2",{children:"Contacts"}),(0,i.jsx)(o,{}),(0,i.jsx)(c,{})]})}}}]);
//# sourceMappingURL=246.e71da320.chunk.js.map