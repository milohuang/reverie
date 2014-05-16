'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        '!assets/js/scripts.min.js']
    },
    
    sass: {
      options: {
        includePaths: [
          'bower_components/foundation/scss',
          'bower_components/bourbon/app/assets/stylesheets'
        ]
      },
      dev: {
        options: {
          outputStyle: 'expanded',
          sourcemap: true,
          debugInfo: true
        },
        files: {
          'assets/css/style.css': ['assets/scss/style.scss']
        }
      },
      dist: {
        options: {
          banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
          style: 'compressed',
          debugInfo: false,
          trace: false
        },
        files: {
          'assets/css/style.css': ['assets/scss/app.scss','assets/scss/style.scss']
        }
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
          '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
          '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
          ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
      },
      dev: {
        options: {
          beautify: true,
        },   
        preserveComments: 'all',
        files: {
          'assets/js/script.js' : [
          'bower_components/jquery/dist/jquery.js',
          'bower_components/fastclick/lib/fastclick.js',
          'bower_components/foundation/js/foundation/foundation.js',
          // 'bower_components/foundation/js/foundation/foundation.abide.js',
          // 'bower_components/foundation/js/foundation/foundation.accordion.js',
          // 'bower_components/foundation/js/foundation/foundation.alert.js',
          // 'bower_components/foundation/js/foundation/foundation.clearing.js',
          // 'bower_components/foundation/js/foundation/foundation.dropdown.js',
          // 'bower_components/foundation/js/foundation/foundation.equalizer.js',
          // 'bower_components/foundation/js/foundation/foundation.interchange.js',
          // 'bower_components/foundation/js/foundation/foundation.joyride.js',
          // 'bower_components/foundation/js/foundation/foundation.magellan.js',
          // 'bower_components/foundation/js/foundation/foundation.offcanvas.js',
          // 'bower_components/foundation/js/foundation/foundation.orbit.js',
          // 'bower_components/foundation/js/foundation/foundation.reveal.js',
          // 'bower_components/foundation/js/foundation/foundation.slider.js',
          // 'bower_components/foundation/js/foundation/foundation.tab.js',
          // 'bower_components/foundation/js/foundation/foundation.tooltip.js',
          // 'bower_components/foundation/js/foundation/foundation.topbar.js',
          'assets/js/src/custom/*.js',
          ],
          'assets/js/modernizr.js' : 'assets/src/js/vendor/modernizr.js'
        }
      },
      dist: {
        options: {
          report: 'gzip',
          // preserve only those starting with a !
          preserveComments: 'some',
          compress: {
            drop_console: true,
          }
        },        
        files: {
          'assets/js/script.js' : [
          'bower_components/jquery/dist/jquery.js',
          'bower_components/fastclick/lib/fastclick.js',
          'bower_components/foundation/js/foundation/foundation.js',
          // 'bower_components/foundation/js/foundation/foundation.abide.js',
          // 'bower_components/foundation/js/foundation/foundation.accordion.js',
          // 'bower_components/foundation/js/foundation/foundation.alert.js',
          // 'bower_components/foundation/js/foundation/foundation.clearing.js',
          // 'bower_components/foundation/js/foundation/foundation.dropdown.js',
          // 'bower_components/foundation/js/foundation/foundation.equalizer.js',
          // 'bower_components/foundation/js/foundation/foundation.interchange.js',
          // 'bower_components/foundation/js/foundation/foundation.joyride.js',
          // 'bower_components/foundation/js/foundation/foundation.magellan.js',
          // 'bower_components/foundation/js/foundation/foundation.offcanvas.js',
          // 'bower_components/foundation/js/foundation/foundation.orbit.js',
          // 'bower_components/foundation/js/foundation/foundation.reveal.js',
          // 'bower_components/foundation/js/foundation/foundation.slider.js',
          // 'bower_components/foundation/js/foundation/foundation.tab.js',
          // 'bower_components/foundation/js/foundation/foundation.tooltip.js',
          // 'bower_components/foundation/js/foundation/foundation.topbar.js',
          'assets/js/src/custom/*.js',
          ],
          'assets/js/modernizr.js' : 'bower_components/modernizr/modernizr.js'
        }
      },
    },
    

    // optimize SVG files
    svgmin: {
      options: { // Configuration that will be passed directly to SVGO
        plugins: [{
          removeViewBox: false
        }]
      },
      dist: {
        files: [{
          expand: true,            // Enable dynamic expansion.
          cwd: 'assets/img/src',   // Src matches are relative to this path.
          src: ['**/*.svg'],       // Actual pattern(s) to match.
          dest: 'assets/img/',     // Destination path prefix.
          ext: '.svg'              // Dest filepaths will have this extension.
        }]
      }
    },

    // Optimize PNG files
    smushit: {
      dist: {
        files: [{
          expand: true,
          src: ['assets/img/src/**/*.png', 'assets/img/src/**/*.jpg'],
          dest: 'assets/img'
        }]
      }
    },

    watch: {

      sass: {
        files: [
          'bower_components/foundation/scss/foundation/components/*.scss',
          'bower_components/foundation/scss/foundation.scss',
          'assets/scss/*.scss',
        ],
        tasks: ['sass:dev'],
        options: {
          // Start a live reload server on the default port 35729
          livereload: true,
        }
      },

      html: {
        files: [
          '*.php',
          '*.html',
          'templates/*.php',
          'lib/*.php',
          'templates/**/*.php',
          'templates/**/**/*.php'
        ],
        options: {
          // Start a live reload server on the default port 35729
          livereload: true,
        }
      },
      js: {
        files: [
          'assets/js/src/custom/*.js',
        ],
        tasks: ['jshint', 'uglify:dev'],
        options: {
          // Start a live reload server on the default port 35729
          livereload: true,
        }
      }
    }    
  });

  // Load tasks

  
  // css stuffs
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // js stuffs
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  // images  
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-smushit');


  // Register tasks
  grunt.registerTask('default', [
    'watch'
  ]);
  grunt.registerTask('img', [
    'svgmin',
    'smushit'
  ]);  
  grunt.registerTask('dist', [
    'jshint',
    'sass:dist',
    'uglify:dist',
    'img'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);
};