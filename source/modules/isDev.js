const isDev = function() {
   return !argv.prod;
}

export{ isDev };