!function(){"use strict";angular.module("auction",["ngRoute"]).config(["$routeProvider",function(a){a.when("/home",{templateUrl:"views/home.html",controller:"HomeController"}).when("/search",{templateUrl:"views/search.html",controller:"SearchController"}).otherwise({redirectTo:"/home"})}])}(),function(){"use strict";var a=function(a){var b=this;b.products=[],a.getProducts().then(function(a){b.products=a})};a.$inject=["ProductService"],angular.module("auction").controller("HomeController",a)}(),function(){"use strict";var a=function(a){var b=this;b.products=[],a.find().then(function(a){b.products=a})};a.$inject=["ProductService"],angular.module("auction").controller("SearchController",a)}(),function(){"use strict";var a=function(a){this.$http=a};a.$inject=["$http"],a.prototype={getProducts:function(){return this.$http.get("data/products-featured.json").then(function(a){return a.data})},find:function(){return this.$http.get("data/products-search.json").then(function(a){return a.data})}},angular.module("auction").service("ProductService",a)}();