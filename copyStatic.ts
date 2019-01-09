import * as shell from 'shelljs';

/**
 * copy static file
 */
shell.rm('-rf', 'dist/public/js');
shell.rm('-rf', 'dist/public/css');
shell.rm('-rf', 'dist/public/fonts');
shell.rm('-rf', 'dist/public/images');
shell.rm('-rf', 'dist/public/dist');
shell.rm('-rf', 'dist/public/v1');
shell.rm('-rf', 'dist/public/404.html');

shell.cp('-R', 'src/public/js/', 'dist/public/js/');
shell.cp('-R', 'src/public/css/', 'dist/public/css/');
shell.cp('-R', 'src/public/fonts/', 'dist/public/fonts/');
shell.cp('-R', 'src/public/images/', 'dist/public/images/');
shell.cp('-R', 'src/public/dist', 'dist/public/dist');
shell.cp('-R', 'src/public/v1', 'dist/public/v1');

shell.cp('-R', 'src/public/404.html', 'dist/public/404.html');
