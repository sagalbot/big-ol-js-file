const mix = require('laravel-mix');

/**
 * Transpiles down to ~300 KiB
 */
mix.js('resources/js/app-with-mix-vue-call.js', 'dist').vue({ version: 3 });

/**
 * Transpiles down to ~100 KiB
 */
mix.js('resources/js/app-without-mix-vue-call.js', 'dist');
