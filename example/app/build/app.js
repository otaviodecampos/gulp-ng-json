(function() {
    'use strict'

    angular.module('app', [
        
        'app.templates', 

    ]);

})();

(function() {
    'use strict'

    angular.module('app')
        .constant('', Constant());

    function Constant() {
        return {
          "name": "Demo",
          "version": "0.0.1",
          "description": "Gulp-Angular-Json Demo",
          "author": {
                    "name": "otaviodecampos",
                    "email": "otaviodecampos@hotmail.com"
          }
};
    }

})();