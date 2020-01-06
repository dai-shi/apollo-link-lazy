var e=require("apollo-link");exports.lazy=function(n){return new e.ApolloLink((function(o,r){return e.fromPromise(n().then((function(n){return e.toPromise((n instanceof e.ApolloLink?n:n.default).request(o,r)||e.Observable.of())})))}))};
//# sourceMappingURL=index.js.map
