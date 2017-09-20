const gulp = require('gulp');

gulp.task('default', function lintCssTask() {
	const gulpStylelint = require('gulp-stylelint');
	const stylelintFormatter = require('stylelint-formatter-pretty');
	return gulp
		.src('test.scss')
		.pipe(gulpStylelint({
      fix: true,
			reporters: [
				{
				  formatter: stylelintFormatter,
          console: true
				}
			]
		}));
});
