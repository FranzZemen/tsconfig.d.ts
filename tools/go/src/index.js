"use strict";
exports.__esModule = true;
/*
Created by Franz Zemen 12/04/2022
License Type: MIT
*/
var node_process_1 = require("node:process");
var node_fs_1 = require("node:fs");
if (node_process_1.argv.length < 3) {
    console.log('No command');
    (0, node_process_1.exit)(400);
}
var command = node_process_1.argv[2];
if (command === 'clean') {
    var cleanGo_1 = false;
    if (node_process_1.argv.length === 4) {
        var subCommand = node_process_1.argv[3];
        if (subCommand === 'go') {
            cleanGo_1 = true;
        }
        else {
            console.log("Unrecognized subcommand ".concat(subCommand));
        }
    }
    var transient_1 = 'transient';
    console.log("clean ".concat(transient_1, " starting..."));
    (0, node_fs_1.rm)(transient_1, { recursive: true, force: true }, function (err) {
        if (err) {
            console.log(err);
            (0, node_process_1.exit)(500);
        }
        else {
            console.log('...clean completed');
            if (cleanGo_1) {
                transient_1 = './tools/go/transient';
                console.log("clean ".concat(transient_1, " starting..."));
                (0, node_fs_1.rm)(transient_1, { recursive: true, force: true }, function (err) {
                    if (err) {
                        console.log(err);
                        (0, node_process_1.exit)(500);
                    }
                    else {
                        console.log('...clean completed');
                        (0, node_process_1.exit)(0);
                    }
                });
            }
            else {
                (0, node_process_1.exit)(0);
            }
        }
    });
}
else if (command === 'pkg') {
    var incMajor = false, incMinor = false, incPatch = false;
    if (node_process_1.argv.length === 4) {
        var subCommand = node_process_1.argv[3];
        console.log("Subcommand: ".concat(subCommand));
        if (subCommand === 'major') {
            incMajor = true;
        }
        else if (subCommand === 'minor') {
            incMinor = true;
        }
        else if (subCommand === 'patch') {
            incPatch = true;
        }
    }
    else {
        console.log('Format is pkg [patch|minor|major]');
        (0, node_process_1.exit)(400);
    }
    console.log('Packaging starting...');
    try {
        var packageJson = (0, node_fs_1.readFileSync)('./package.publish.json', { encoding: 'utf8' });
        var regex = /(\"version\"\s*\:\s*\")([0-9]+)\.([0-9]+)\.([0-9]+)([^"]*\")/;
        var result = regex.exec(packageJson);
        if (result) {
            var prefix = result[1];
            var major = parseInt(result[2], 10);
            var minor = parseInt(result[3], 10);
            var patch = parseInt(result[4], 10);
            console.log("Existing version: ".concat(major, ".").concat(minor, ".").concat(patch));
            if (incMajor) {
                major++;
                minor = 0;
                patch = 0;
            }
            else if (incMinor) {
                minor++;
                patch = 0;
            }
            else if (incPatch) {
                patch++;
            }
            else {
                console.log('Error, no incremental');
                (0, node_process_1.exit)(500);
            }
            console.log("New version: ".concat(major, ".").concat(minor, ".").concat(patch));
            var suffix = result[5];
            packageJson = packageJson.replace(regex, "".concat(prefix).concat(major, ".").concat(minor, ".").concat(patch).concat(suffix));
            (0, node_fs_1.writeFileSync)('./package.publish.json', packageJson, { encoding: 'utf8' });
            (0, node_fs_1.writeFileSync)('./transient/publish/package.json', packageJson, { encoding: 'utf8' });
            (0, node_fs_1.copyFileSync)('./README.md', './transient/publish/README.md');
            console.log('...packaging completed');
        }
    }
    catch (err) {
        console.log(err);
    }
}
else {
    (0, node_process_1.exit)(404);
}
