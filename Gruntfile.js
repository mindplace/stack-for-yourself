module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      myTask: {
        options: {
          sizes: [
          {
            width: 800,
          }]
        },
        files: [{
          expand: true,
          src: ['**.*'],
          cwd: 'assets/original_images',
          custom_dest: 'assets/img'
        }]
      }
    },

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'assets/stylesheets/main.css': 'assets/stylesheets/main.scss'
        }
      }
    },

    watch: {
      css: {
        files: [
          'assets/stylesheets/*.scss',
          'assets/stylesheets/components/*.scss',
          'assets/stylesheets/pages/*.scss',
          'assets/stylesheets/theme/*.scss',
          'assets/stylesheets/vendor/*.scss'
        ],
        tasks: ['sass', 'cssmin']
      }
    },

    cssmin: {
      target: {
        files: {
          'assets/stylesheets/main.min.css': 'assets/stylesheets/main.css'
        }
      }
    },

  });

  // -------------------------------------------------------------------------------------

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('resize', ['responsive_images']);

  // -------------------------------------------------------------------------------------

  // 'default' preps all assets for deployment.
  // To run manually, run `grunt default`
  grunt.registerTask('default', ["resize", 'sass', 'cssmin']);
};
