module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
        dist: {
            files: {
                'assets/css/site.css': 'assets/scss/site.scss'
            }
        }
    },

    watch: {
      style: {
        files: ['**/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        },
      },
    },

  });

  // Task includes
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Tasks
  grunt.registerTask('default', ['sass']);

};