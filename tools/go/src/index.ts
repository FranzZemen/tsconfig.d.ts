/*
Created by Franz Zemen 12/04/2022
License Type: MIT
*/
import {copyFileSync, readFileSync, rm, writeFileSync} from 'node:fs';
import {argv, exit} from 'node:process';

if (argv.length < 3) {
  console.log('No command');
  exit(400);
}

const command = argv[2];

if (command === 'clean') {
  let cleanGo = false;
  if (argv.length === 4) {
    const subCommand = argv[3];
    if (subCommand === 'go') {
      cleanGo = true;
    } else {
      console.log(`Unrecognized subcommand ${subCommand}`);
    }
  }
  let transient = 'transient';
  console.log(`clean ${transient} starting...`);
  rm(transient, {recursive: true, force: true}, err => {
    if (err) {
      console.log(err);
      exit(500);
    } else {
      console.log('...clean completed');
      if (cleanGo) {
        transient = './tools/go/transient';
        console.log(`clean ${transient} starting...`);
        rm(transient, {recursive: true, force: true}, err => {
          if (err) {
            console.log(err);
            exit(500);
          } else {
            console.log('...clean completed');
            exit(0);
          }
        });
      } else {
        exit(0);
      }
    }
  });
} else if (command === 'pkg') {
  let incMajor = false, incMinor = false, incPatch = false;
  if (argv.length === 4) {
    const subCommand = argv[3];
    console.log(`Subcommand: ${subCommand}`);
    if (subCommand === 'major') {
      incMajor = true;
    } else if (subCommand === 'minor') {
      incMinor = true;
    } else if (subCommand === 'patch') {
      incPatch = true;
    }
  } else {
    console.log('Format is pkg [patch|minor|major]');
    exit(400);
  }
  console.log('Packaging starting...');
  try {
    let packageJson = readFileSync('./package.publish.json', {encoding: 'utf8'});
    const regex = /(\"version\"\s*\:\s*\")([0-9]+)\.([0-9]+)\.([0-9]+)([^"]*\")/;
    const result = regex.exec(packageJson);
    if (result) {
      let prefix = result[1];
      let major = parseInt(result[2], 10);
      let minor = parseInt(result[3], 10);
      let patch = parseInt(result[4], 10);
      console.log(`Existing version: ${major}.${minor}.${patch}`);
      if (incMajor) {
        major++;
        minor = 0;
        patch = 0;
      } else if (incMinor) {
        minor++;
        patch = 0;
      } else if (incPatch) {
        patch++;
      } else {
        console.log('Error, no incremental');
        exit(500);
      }
      console.log(`New version: ${major}.${minor}.${patch}`);
      let suffix = result[5];
      packageJson = packageJson.replace(regex, `${prefix}${major}.${minor}.${patch}${suffix}`);
      writeFileSync('./package.publish.json', packageJson, {encoding: 'utf8'});
      writeFileSync('./transient/publish/package.json', packageJson, {encoding: 'utf8'});
      copyFileSync('./README.md', './transient/publish/README.md');
      console.log('...packaging completed');
    }
  } catch (err) {
    console.log(err);
  }
} else {
  exit(404);
}
export {}





