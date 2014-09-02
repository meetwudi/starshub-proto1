module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      files: ['*.html', '*.less'],
      options: {
        livereload: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

};