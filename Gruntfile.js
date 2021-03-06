module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
          jshintrc: '.jshintrc',
      },
      src: ['sample/**/*.js', 'tasks/**/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('precommit', ['jshint']);
};
