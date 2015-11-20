'use strict';

module.exports = function (grunt) {
    grunt.registerTask('build', [
        'clean:dist',
        'jshint',
        'concat:dist',
        'concat:distMapped',
        'ngAnnotate',
        'uglify',
        'concat:license',
        'clean:pre'
    ]);
}