import path from 'path';
import { execSync } from 'child_process';
import fs from 'fs';
import { dependencies } from '../../release/app/package.json';
import webpackPaths from '../configs/webpack.paths';

if (
  Object.keys(dependencies || {}).length > 0 &&
  fs.existsSync(webpackPaths.appNodeModulesPath)
) {
  // Getting build fails with --parallel flag
  const electronRebuildCmd =
    '../../node_modules/.bin/electron-rebuild --force --version 15.1.0 --types prod,dev,optional --module-dir .';
  const cmd =
    process.platform === 'win32'
      ? electronRebuildCmd.replace(/\//g, '\\')
      : electronRebuildCmd;
  execSync(cmd, {
    cwd: webpackPaths.appPath,
    stdio: 'inherit',
  });
}
