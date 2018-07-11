(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{162:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"query-class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-class","aria-hidden":"true"}},[t._v("#")]),t._v(" Query Class")]),a("p",[t._v("Query class is responsible for fetching data from Vuex Store. When you fetch data through Vuex getters such as "),a("code",[t._v("store.getters['entities/users/find'](1)")]),t._v(", it's using the Query class underneath to find and filter data.")]),a("p",[t._v("Usually, you won't need to care about Query class as long as you keep using getters. However, when you would like to add global features when querying data, it might be useful to use lifecycle hook. This is especially useful when you want to create a plugin for the Vuex ORM.")]),a("h2",{attrs:{id:"lifecycle-hook-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lifecycle-hook-types","aria-hidden":"true"}},[t._v("#")]),t._v(" Lifecycle Hook Types")]),a("p",[t._v("Query class comes with following lifecycle hooks.")]),a("ul",[a("li",[a("code",[t._v("beforeProcess")]),t._v(" – Called before data get filtered.")]),a("li",[a("code",[t._v("afterWhere")]),t._v(" – Called right after the data get filtered by "),a("code",[t._v("where")]),t._v(" clause.")]),a("li",[a("code",[t._v("afterOrderBy")]),t._v(" – Called right after the data get sorted by "),a("code",[t._v("orderBy")]),t._v(" clause.")]),a("li",[a("code",[t._v("afterLimit")]),t._v(" – Called right after the data get limited by "),a("code",[t._v("limit")]),t._v(" and "),a("code",[t._v("offset")]),t._v(" clause.")])]),a("p",[t._v("By registering callbacks to each hook, you can manipulate the result from the getter call.")]),a("h3",{attrs:{id:"lifecycle-hook-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lifecycle-hook-methods","aria-hidden":"true"}},[t._v("#")]),t._v(" Lifecycle Hook Methods")]),a("p",[t._v("Like javascript events, you can use the "),a("strong",[t._v("Query.on()")]),t._v(" to register a hook, and "),a("strong",[t._v("Query.off()")]),t._v(" to remove the hook.")]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hookId "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Query"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("on")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'afterWhere'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("callback")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nQuery"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("off")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hookId"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h4",{attrs:{id:"lifecycle-hook-scope"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lifecycle-hook-scope","aria-hidden":"true"}},[t._v("#")]),t._v(" Lifecycle Hook Scope")]),a("p",[t._v("By default, all hooks are registered globally within the Query class and ran on all instances within your application.")]),a("p",[t._v("If you only want to register a hook to be available for the next query() call, you can add the third optional parameter "),a("strong",[t._v("true")]),t._v(" to have the Query class automatically remove your hook after the next query() method call.")]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Query"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("on")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'beforeProcess'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("callback")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"lifecycle-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lifecycle-api","aria-hidden":"true"}},[t._v("#")]),t._v(" Lifecycle API")]),a("p",[a("strong",[t._v("Query.on")]),t._v("(type, callback, once?): hookId: number")]),a("ul",[a("li",[a("code",[t._v("type")]),t._v(" (string) - must be one of [beforeProcess, afterWhere, afterOrderBy, afterLimit]")]),a("li",[a("code",[t._v("callback")]),t._v(" (function) - must be function")]),a("li",[a("code",[t._v("once")]),t._v(" (boolean, optional) - default false")])]),a("p",[a("strong",[t._v("Returns")]),t._v(": number: < HookId >")]),a("h3",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[t._v("#")]),t._v(" Examples")]),a("p",[a("strong",[t._v("Register a beforeProcess hook to map all records")])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Query "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'vuex-orm/core'")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Add extra `hooked` field on each record.")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hookMapRecordsId "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Query"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("on")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'beforeProcess'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("records"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" entity"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" records"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("map")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("record"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    record"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hooked "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" record\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" store"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getters"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'entities/users/all'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("/* result\n  [\n    { id: 1, name: 'John Doe', hooked: true },\n    { id: 2, name: 'Jane Doe', hooked: true }\n  ]\n*/")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hookRemoved "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Query"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("off")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hookMapRecordsId"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("/* hookRemoved = true */")]),t._v("\n")])])]),a("p",[a("strong",[t._v("Soft Delete Hook Sample Implementation")])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Query "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'vuex-orm/core'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" store "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'@/store'")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" id"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'John Doe'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" deletedAt"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" id"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Bob Doe'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" deletedAt"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\nstore"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'entities/users/create'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" data"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" data "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" softDeleteHookId\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("softDeleteCallback")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("records"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" records"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("filter")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("r"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deletedAt"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("deletedRecordsCallback")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("records"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" records"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("filter")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("!")]),a("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("r"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deletedAt"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// register global hook")]),t._v("\nsoftDeleteHookId "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Query"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("on")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'beforeProcess'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" softDeleteCallback"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// query data")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" results "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" store"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getters"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'entities/users/query'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("all")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("/* results\n[{ id: 1, name: 'John Doe', deletedAt: null }]\n */")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// *** switch to showing only deleted items **")]),t._v("\nQuery"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("off")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("softDeleteHookId"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// remove global callback")]),t._v("\nQuery"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("on")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'beforeProcess'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" deletedRecordsCallback"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// run only once")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" deletedResults "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" store"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getters"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'entities/users/query'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("all")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("/* deletedResults\n[{ id: 2, name: 'Bob Doe', deletedAt: '2018-03-15TZ00:00:00' }]\n */")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// re-initialize global soft deletes")]),t._v("\nsoftDeleteHookId "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Query"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("on")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'beforeProcess'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" softDeleteCallback"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}],!1,null,null,null);s.default=e.exports}}]);