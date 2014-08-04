module.exports =function(grunt){
     //Configure your tasks
     //matchdep reduces repetitive code by utilizing the package.json file to loadNpmTasks
     require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
     grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),//load properties from the package as a JSON object
      watch: {
        options:{
          livereload: true
        },
        js: {
          files:   ['src/scripts/*.js'],
          tasks:   ['copy']
        },
        coffee:{
          files: ['src/scripts/*.coffee'],
          tasks: ['coffee']
        },
        css:{
          files:   ['src/styles/*.styl'],
          tasks:   ['stylus']
        },
        html:{
          files:   ['src/*.jade'],
          tasks:   ['jade']
        }
      },
      coffee:{
        compile: {
            files: {
              'build/js/scripts-coffee.js': ['src/scripts/scripts-coffee.coffee']
            }
          }
      },
      uglify: {
        my_target: {
          files: {
            'build/js/scripts.min.js': ['src/scripts/scripts.js']
          }
        }
      },
      copy: {
        main: {
          expand: true,
          cwd: 'src/scripts',
          src: '*',
          dest: 'build/js'
        },
      },
      stylus:{
        compile: {
          options:{
            import:['nib']
          },
          files: {
            'build/css/styles.css': ['src/styles/*.styl'] // compile and concat into single file
          }
        }

      },
      jade:{
        compile:{
          options: {pretty:true},
          files:[{
            expand: true,
            cwd:    'src/',
            src:    "*.jade",
            ext:    ".html",
            dest:   "build/"
          }]
        }
      },
      githubPages: {
        target: {
          options: {
            // The default commit message for the gh-pages branch
            commitMessage: 'push'
          },
          // The folder where your gh-pages repo is
          src: 'build'
        }
      }
     });

     //Run the task
     //Copy is registered but not executed. Refer to commented code in the initConfig method for details on how to add it.
     grunt.registerTask('default', ['watch', 'uglify', 'coffee', 'stylus', 'jade', 'copy']);
     grunt.registerTask('build', ['uglify', 'coffee', 'stylus','jade', 'copy']);
     grunt.registerTask('deploy', ['build','githubPages:target']);
};
