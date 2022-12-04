/*
Created by Franz Zemen 12/04/2022
License Type: MIT
*/
import {CompilerOptions, TypeAcquisition, WatchOptions} from 'typescript';

export interface Reference {
  path: string;
  prepend?: boolean;
}

export interface TsConfig {
  extends?: string;
  compilerOptions?: CompilerOptions;
  include?: string[];
  exclude?: string[];
  references?: Reference[];
  files?: string[];
  typeAcquisition?: TypeAcquisition
  watchOptions?: WatchOptions;
}
