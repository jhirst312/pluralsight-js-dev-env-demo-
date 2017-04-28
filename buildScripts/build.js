/*eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('generating minified bundle for production. this will take a moment'));

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(chalk.red(err));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
      return jsonStats.errors.map(error => console.log(chalk.red(error)));
  }

  if (jsonStats.hasWarnings) {
      console.log(chalk.yellow('Webpack generated the following warnings'));
  }

  console.log(`webpack stats: ${stats}`);

  console.log(chalk.green('your app has been built for production and written to /dist!'));

  return 0;
});
