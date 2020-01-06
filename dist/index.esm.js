import{ApolloLink as n,fromPromise as t,toPromise as r,Observable as e}from"apollo-link";var o=function(o){return new n((function(u,f){return t(o().then((function(t){return r((t instanceof n?t:t.default).request(u,f)||e.of())})))}))};export{o as lazy};
//# sourceMappingURL=index.esm.js.map
