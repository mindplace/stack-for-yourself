module.exports = function(grunt) {

  grunt.initConfig({

    // -------------------------------------------------------------------------------------
    // This task resizes all NEWLY ADDED images placed in `assets/development/images/`
    // and places them into `assets/production/images/`.
    //
    // Relies on 'grunt-responsive-images': https://github.com/andismith/grunt-responsive-images
    //
    // To run this task manually: cd into /blog/, then `grunt resize`
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

    // -------------------------------------------------------------------------------------
    // This task compiles the main Sass file, `assets/development/stylesheets/main.scss`,
    // into `assets/development/main.css`
    //
    // Relies on 'grunt-contrib-sass': https://github.com/gruntjs/grunt-contrib-sass
    //
    // To run this task manually: cd into /blog/, then `grunt sass`
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

    // -------------------------------------------------------------------------------------
    // This task watches the main Sass file, `assets/development/stylesheets/main.scss`,
    // and runs the 'sass' task (above).
    //
    // Relies on 'grunt-contrib-watch': https://github.com/gruntjs/grunt-contrib-watch
    //
    // To run this task manually: cd into /blog/, then `grunt watch`
    watch: {
      css: {
        files: ['assets/stylesheets/main.scss'],
        tasks: ['sass']
      }
    },

    // -------------------------------------------------------------------------------------
    // This task compresses the main CSS file, `assets/development/main.css`,
    // and places compressed file into `assets/production/main.css`
    //
    // Relies on 'grunt-contrib-cssmin': https://github.com/gruntjs/grunt-contrib-cssmin
    //
    // To run this task manually: cd into /blog/, then `grunt cssmin`
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
