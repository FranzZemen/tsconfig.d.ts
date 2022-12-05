/*
Created by Franz Zemen 12/04/2022
License Type: MIT
*/
import {exit, argv, cwd} from 'node:process';
import {rm, readFileSync} from 'node:fs';
import {constants} from 'os';

if (argv.length < 3) {
  console.log('No command');
  exit(400);
}

const command = argv[2];

console.log(`Command ${command} issued`);

if (command === 'clean') {
  let cleanUtil = false;
  if (argv.length === 4) {
    const subCommand = argv[3];
    if (subCommand === 'util') {
      console.log(`Subcommand ${subCommand}`);
      cleanUtil = true;
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
      if (cleanUtil) {
        transient = './util/transient';
        console.log(`util ${transient} starting...`);
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
  try {
    const packageJson = readFileSync('/package.publish.jso');
    console.log(packageJson);
  } catch (err) {
    console.log(err);
  }
} else {
  exit(404);
}





