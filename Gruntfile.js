module.exports = function (grunt) {

	var package = grunt.file.readJSON('package.json');

	// Project configuration.
	grunt.initConfig({
		pkg: package,
		copy: {
			main: {
				files: [{
					expand: true,
					flatten: true,
					src: ['tmp/index.html'],
					dest: 'dist/',
					filter: 'isFile'
				}],
			},
			thirdParty: {
				files: [{
					src: [
						'node_modules/ng-scrollbar/dist/ng-scrollbar.min.js',
					],
					flatten: true,
					expand: true,
					dest: 'dist/js/',
					filter: 'isFile'
				}, {
					src: [
						'node_modules/ng-scrollbar/dist/ng-scrollbar.min.css',
					],
					flatten: true,
					expand: true,
					dest: 'dist/styles/',
					filter: 'isFile'
				}]
			},
			css: {
				files: [{
					src: [
						'node_modules/bootstrap/dist/css/bootstrap.css',
						'node_modules/bootstrap/dist/css/bootstrap-theme.css',
						'node_modules/angular-hotkeys/build/hotkeys.css',
						'node_modules/angular-loading-bar/build/loading-bar.min.css',
					],
					flatten: true,
					expand: true,
					dest: 'dist/styles/',
					filter: 'isFile'
				}, {
					expand: true,
					flatten: true,
					src: [
						'node_modules/bootstrap/dist/fonts/*',
						'assets/fonts/AAicons.ttf',
						'assets/fonts/AAicons.eot',
						'assets/fonts/AAicons.svg',
						'assets/fonts/AAicons.woff'
					],
					dest: 'dist/fonts/',
					filter: 'isFile'
				}]
			},
			style_images: {
				files: [{
					expand: true,
					flatten: true,
					src: ['src/assets/**/*'],
					dest: 'dist/assets/',
					filter: 'isFile'
				}]
			},
			prehtml: {
				files: [{
					expand: true,
					flatten: true,
					src: ['src/app/**/*.html'],
					dest: 'dist/partials/',
					filter: 'isFile'
				}]
			},
			html: {
				files: [{
					expand: true,
					flatten: true,
					src: ['tmp/*.html'],
					dest: 'dist/',
					filter: 'isFile'
				}]
			}
		},
		clean: {
			build: {
				src: ['dist']
			},
			tmp: {
				src: ['tmp']
			}

		},
		sass: {
			dist: { // Target
				options: { // Target options
					style: 'expanded'
				},
				files: [{
					expand: true,
					flatten: true,
					cwd: 'src',
					src: ['styles/*.scss', '**/*.scss'],
					dest: 'dist/styles/',
					ext: '.css'
				}]
			}
		},
		browserify: {
			options: {
				browserifyOptions: {
					debug: true
				}
			},
			dist: {
				files: {
					'dist/js/guru.js': [
						'src/app/app.js'
					]
				}
			},
		},

		htmlclean: {
			options: {
				protect: /<\!--%fooTemplate\b.*?%-->/g,
				edit: function (html) {
					return html.replace(/\begg(s?)\b/ig, 'omelet$1');
				}
			},
			partials: {
				expand: true,
				cwd: 'tmp/partials/',
				src: '**/*.html',
				dest: 'tmp/partials/'
			},
			index: {
				expand: false,
				src: 'src/index.html',
				dest: 'tmp/index.html'
			}
		},
		ngtemplates: {
			'aah-guru': {
				cwd: 'tmp',
				src: 'partials/**/*.html',
				dest: 'dist/js/templates.js'
			}
		},
		jshint: {
			src: 'src/**/*.js',
			options: {
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish')
			}
		},
		'string-replace': {
			dev: {
				files: {
					'tmp/': 'tmp/partials/*.html',
				},
				options: {
					replacements: [{
						pattern: '::VERSION::',
						replacement: package.version
					}, {
						pattern: '::ENV::',
						replacement: 'DEV'
					}]
				}
			}
		}

	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-htmlclean');
	grunt.loadNpmTasks('grunt-angular-templates');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-karma');

	grunt.loadNpmTasks('grunt-angular-templates');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-string-replace');


	// Default task(s).
	grunt.registerTask('default', ['clean', 'browserify', 'copy', 'htmlclean', 'copy:html', 'ngtemplates', 'sass']);


	grunt.registerTask('debug', ['clean', 'browserify', 'copy', 'htmlclean', 'copy:html', 'ngtemplates', 'sass']);
};