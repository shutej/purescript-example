module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
    srcFiles: ["src/**/*.purs", "bower_components/**/src/**/*.purs"],

    psc: {
      options: {
        main: "Main",
        modules: ["Main"]
      },
      all: {
        src: ["<%=srcFiles%>"],
        dest: "dist/Main.js"
      }
    },

    uglify: {
      options: {
        mangle: true,
        compress: true
      },
      all: {
        files: {
          "dist/Main.min.js": ["<%= psc.all.dest %>"]
        }
      }
    },

    dotPsci: ["<%=srcFiles%>"]
  });

  grunt.loadNpmTasks("grunt-purescript");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("default", ["psc:all", "uglify:all", "dotPsci"]);
};
