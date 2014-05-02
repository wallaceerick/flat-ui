module.exports = function(grunt){
    'use strict';

    //Configuração
    grunt.initConfig({

        //Minficar JS
        uglify: {
            options: {
                mangle: false
            },
            //Cria um Arquivo
            dist: {
                files: {
                    //Arquivo de Destino
                    'assets/js/application.min.js': [
                        //Arquivos Inclusos 
                        'assets/js/_jquery.js',
                        'assets/js/_dropdown.js',
                        'assets/js/_select.js',
                        'assets/js/_increment.js',
                        'assets/js/_icheck.min.js',
                        'assets/js/_tabs.js',
                        'assets/js/_accordion.js',
                        'assets/js/_maskedinput.min.js',
                        'assets/js/_modal.js',
                        'assets/js/_tipsy.js',
                        'assets/js/_shadowbox.min.js',
                        'assets/js/_responsive.slides.min.js',
                        'assets/js/_scrollbar.min.js',
                        'assets/js/_video.min.js',
                        //'assets/js/jquery.audio.min.js',
                        'assets/js/_config.js'
                    ]
                },
                options: {
                    banner: '/*\n***********************\nFlat UI: Application JS\nLast Update: <%= grunt.template.today("dd-mm-yyyy") %>\nAuthor: Wallace Erick\nAuthor URL: http://www.wallaceerick.com.br/\n***********************\n*/\n'
                }
            }
        },

        //Compass
        compass: {
            dist: {
                options: {
                    sassDir:         'assets/css',
                    cssDir:          'assets/css',
                    imagesDir:       'assets/images', 
                    fontsDir:        'assets/fonts',
                    javascriptsDir:  'assets/js',
                    outputStyle:     'compressed',
                    environment:     'production',
                    relativeAssets:  true,
                    specify:        'assets/css/*.scss',
                    banner:         '/*\n***********************\nFlat UI: Style CSS\nLast Update: <%= grunt.template.today("dd-mm-yyyy") %>\nAuthor: Wallace Erick\nAuthor URL: http://www.wallaceerick.com.br/\n***********************\n*/'
                }
            }
        },

        rev: {
            options: {
                encoding: 'utf8',
                algorithm: 'md5',
                length: 20
            },
            assets: {
                files: [{
                    src: [
                        //'assets/images/**/*.{jpg,jpeg,gif,png}',
                        //'assets/fonts/*.{eot,svg,ttf,woff}',
                        'assets/js/application.min.js',
                        'assets/css/style.css'
                    ]
                }]
            }
        },

        //Minificar Imagens
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 3
                },
                files: [{
                    expand: true,      
                    cwd:  'assets/images/',
                    dest: 'assets/images/',
                    src: ['**/*.png', '**/*.jpg']
                }],
            }
        },

        //Watch
        watch: {
            options: {
                livereload: true,
            },
            dist: {
                files: [
                    'assets/js/*.js',
                    'assets/css/**/*.css',
                    'assets/css/**/*.scss'
                ],
                tasks: ['uglify', 'compass'] 
            }
        } 

    });
 
    //Plugins do Grunt
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-rev');

    //Tarefas que serão Executadas
    grunt.registerTask('default', 
        [
            'uglify',
            'compass'
        ]
    );
    grunt.registerTask('w', ['watch']); 
    grunt.registerTask('i', ['imagemin']);
    grunt.registerTask('r', ['rev']);
    
};