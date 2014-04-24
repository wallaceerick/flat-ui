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
            global: {
                files: {
                    //Arquivo de Destino
                    'assets/js/application.min.js': [
                        //Arquivos Inclusos 
                        'assets/js/jquery-1.8.3.min.js',
                        'assets/js/jquery.dropdown.js',
                        'assets/js/jquery.selectbox.min.js',
                        'assets/js/jquery.increment.js',
                        'assets/js/jquery.icheck.min.js',
                        'assets/js/jquery.tabs.js',
                        'assets/js/jquery.accordion.js',
                        'assets/js/jquery.maskedinput.min.js',
                        'assets/js/jquery.modal.js',
                        'assets/js/jquery.tipsy.js',
                        'assets/js/jquery.shadowbox.min.js',
                        'assets/js/jquery.responsive.slides.min.js',
                        'assets/js/jquery.scrollbar.min.js',
                        'assets/js/jquery.video.min.js',
                        'assets/js/jquery.audio.min.js',
                        'assets/js/config.js'
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

        // Remove Ununsed CSS
        uncss: {
            dist: {
                files: {
                    'assets/css/style.css': ['*.html']
                }
            },
            options: {
                compress: true
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
    grunt.loadNpmTasks('grunt-uncss');

    //Tarefas que serão Executadas
    grunt.registerTask('default', 
        [
            'uglify',
            'compass'
        ]
    );
    grunt.registerTask('w', ['watch']); 
    grunt.registerTask('i', ['imagemin']);
    grunt.registerTask('u', ['uncss']);
    
};