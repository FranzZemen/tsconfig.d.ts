# Readme

Very lightweight package to get an accurate tsconfig.ts type, and some minor utilities to go with it.

This package has zero dependencies. 

This is in active development and documentation, but the TsConfig type is accurate and usable. 

This covers up to Typescript 4.9 as of this release.  Our aim is to keep this updated to the latest version.

# Release Notes

| Tag | Version | Release Notes |
|-----|---------|---------------|
|     |         |               |
|     |         |               |


# config.d.ts

Install and retrieve the config.d.ts file, or if you want the original ts file, either git clone the project or copy 
from here, below.

# Install

```
npm i config.d.ts
```

# Usage

```typescript
import {TsConfig} from './tsconfig.js';

const tsconfig: TsConfig = {}


````

# Types

```typescript
/*
Created by Franz Zemen 12/04/2022
License Type: MIT
*/

export type PluginImport = {
  name: string;
}

export enum WatchFile {
  fixedpollinginterval         = 'fixedpollinginterval',
  prioritypollinginterval      = 'prioritypollinginterval',
  dynamicprioritypolling       = 'dynamicprioritypolling',
  fixedchunksizepolling        = 'fixedchunksizepolling',
  usefsevents                  = 'usefsevents',
  usefseventsonparentdirectory = 'usefseventsonparentdirectory'
}

export enum WatchDirectory {
  usefsevents            = 'usefsevents',
  fixedpollinginterval   = 'fixedpollinginterval',
  dynamicprioritypolling = 'dynamicprioritypolling',
  fixedchunksizepolling  = 'fixedchunksizepolling'

}

export enum PollingWatch {
  fixedinterval    = 'fixedinterval',
  priorityinterval = 'priorityinterval',
  dynamicpriority  = 'dynamicpriority',
  fixedchunksize   = 'fixedchunksize'
}

export type WatchOptions = {
  /* TS 3.8 */ watchFile?: WatchFile;
  /* TS 3.8 */ watchDirectory?: WatchDirectory;
  /* TS 3.8 */ fallbackPolling?: PollingWatch;
  synchronousWatchDirectory?: boolean;
  excludeDirectories?: string[];
  excludeFiles?: string[];
}

export type TypeAcquisition = {
  /* TS ?.? */ enable?: boolean;
  /* TS ?.? */ include?: string[];
  /* TS ?.? */ exclude?: string[];
  /* TS 4.1 */ disableFilenameBasedTypeAcquisition?: boolean;
}

export type MapLike<T> = {
  [index: string]: T;
}

export enum Jsx {
  preserve    = 'preserve',
  react       = 'react',
  reactNative = 'react-native',
  reactJsx    = 'react-jsx',
  reactJsxdev = 'react-jsxdev'
}

export enum ImportsNotUsedAsValues {
  remove   = 'remove',
  preserve = 'preserve',
  error    = 'error'
}

export enum ModuleDetection {
  legacy = 'legacy',
  auto   = 'auto',
  force  = 'force'
}

export enum Module {
  none     = 'none',
  commonjs = 'commonjs',
  // Note that typescript potentially plans to deprecate and eventually eliminate this flag starting in version 5
  amd      = 'amd',
  // Note that typescript potentially plans to deprecate and eventually eliminate this flag starting in version 5
  umd      = 'umd',
  // Note that typescript potentially plans to deprecate and eventually eliminate this flag starting in version 5
  system   = 'system',
  es6      = 'es6',
  es2015   = 'es2015',
  es2020   = 'es2020',
  es2022   = 'es2022',
  esnext   = 'esnext',
  node16   = 'node16',
  nodenext = 'nodenext'
}

export enum ModuleResolution {
  classic  = 'classic',
  node     = 'node',
  node16   = 'node16',
  nodenext = 'nodenext'
}

export enum NewLine {
  crlf = 'crlf',
  lf   = 'lf'
}

export enum Target {
  // Note that typescript potentially plans to deprecate and eventually eliminate this flag starting in version 5
  es3    = 'es3',
  es5    = 'es5',
  es6    = 'es6',
  es2015 = 'es2015',
  es2016 = 'es2016',
  es2017 = 'es2017',
  es2018 = 'es2018',
  es2019 = 'es2019',
  es2020 = 'es2020',
  es2021 = 'es2021',
  es2022 = 'es2022',
  esnext = 'esnext'
}


export type Reference = {
  path: string;
  prepend?: boolean;
}

export type TypeCheckingCompilerOptions = {
  /* TS 1.8 */ allowUnreachableCode?: boolean;
  /* TS 1.8 */ allowUnusedLabels?: boolean;
  /* TS 2.1 */ alwaysStrict?: boolean;
  /* TS 4.4 */ exactOptionalPropertyTypes?: boolean;
  /* TS 1.8 */ noFallthroughCasesInSwitch?: boolean;
  /* TS ?.? */ noImplicitAny?: boolean;
  /* TS 4.3 */ noImplicitOverride?: boolean;
  /* TS 1.8 */ noImplicitReturns?: boolean;
  /* TS 2.0 */ noImplicitThis?: boolean;
  /* TS 4.2 */ noPropertyAccessFromIndexSignature?: boolean;
  /* TS 4.1 */ noUncheckedIndexedAccess?: boolean;
  /* TS 2.0 */ noUnusedLocals?: boolean;
  /* TS 2.0 */ noUnusedParameters?: boolean;
  /* TS 2.3 */ strict?: boolean;
  /* TS 3.2 */ strictBindCallApply?: boolean;
  /* TS 2.6 */ strictFunctionTypes?: boolean;
  /* TS 2.0 */ strictNullChecks?: boolean;
  /* TS 2.7 */ strictPropertyInitialization?: boolean;
  /* TS 4.4 */ useUnknownInCatchVariables?: boolean;
}

export type ModulesCompilerOptions = {
  /* TS 3.5 */ allowUmdGlobalAccess?: boolean;
  /* TS ?.? */ baseUrl?: string;
  /* TS 1.0 */ module?: Module;
  /* TS < 4.7, TS > 4.7 */moduleResolution?: ModuleResolution;
  /* TS 4.7 */ moduleSuffixes?: string[];
  /* TS ?.? */ noResolve?: boolean;
  /* TS ?.? */ paths?: MapLike<string[]>;
  /* TS ?.? */ resolveJsonModule?: boolean;
  /* TS 1.5 */ rootDir?: string;
  /* TS 2.0 */ rootDirs?: string[];
  /* TS ?.? */ types?: string[];
  /* TS ?.? */ typeRoots?: string[];
}

export type EmitCompilerOptions = {
  /* TS 1.0 */ declaration?: boolean;
  /* TS 2.9 */ declarationMap?: boolean;
  /* TS 2.8 */ emitDeclarationOnly?: boolean;
  /* TS 2.0 */ declarationDir?: string;
  /* TS 2.3 */ downlevelIteration?: boolean;
  /* TS ?.? */ emitBOM?: boolean;
  /* TS ?.? */ importHelpers?: boolean;
  /* TS 3.8 */ importsNotUsedAsValues?: ImportsNotUsedAsValues;
  /* TS 1.5 */ inlineSourceMap?: boolean;
  /* TS 1.5 */ inlineSources?: boolean;
  /* TS ?.? */ mapRoot?: string;
  /* TS 1.5 */ newLine?: NewLine;
  /* TS ?.? */ noEmit?: boolean;
  /* TS 1.5 */ noEmitHelpers?: boolean;
  /* TS 1.4 */ noEmitOnError?: boolean;
  /* TS ?.? */ outDir?: string;
  /* TS 1.0 */ outFile?: string;
  /* TS ?.? */ preserveConstEnums?: boolean;
  /* TS 4.5 */ preserveValueImports?: boolean;
  /* TS ?.? */ removeComments?: boolean;
  /* TS ?.? */ sourceMap?: boolean;
  /* TS ?.? */ sourceRoot?: string;
  /* TS ?.? */ stripInternal?: boolean;
}

export type JavascriptSupportCompilerOptions = {
  /* TS 1.8 */ allowJs?: boolean;
  /* TS 2.3 */ checkJs?: boolean;
  /* TS ?.? */ maxNodeModuleJsDepth;
}

export type EditorSupportCompilerOptions = {
  /* TS ?.? */ disableSizeLimit?: boolean;
  /* TS ?.? */ plugins?: PluginImport[],/* TS ?.? */
}

export type InteropConstraintsCompilerOptions = {
  /* TS 1.8 */ allowSyntheticDefaultImports?: boolean;
  /* TS 1.8 */ esModuleInterop?: boolean;
  /* TS ?.? */ forceConsistentCasingInFileNames?: boolean;
  /* TS ?.? */ isolatedModules?: boolean;
  /* TS ?.? */ preserveSymlinks?: boolean;
}

export type BackwardsCompatibilityCompilerOptions = {
  /* TS ?.? */ charset?: string;
  /* TS 2.9 */ keyofStringsOnly?: boolean;
  /* TS ?.? */ noImplicitUseStrict?: boolean;
  /* TS 2.4 */ noStrictGenericChecks?: boolean;
  /* TS ?.? */ out?: string;
  /* TS ?.? */ suppressExcessPropertyErrors?: boolean;
  /* TS ?.? */ suppressImplicitAnyIndexErrors?: boolean;
}

export type LanguageAndEnvironmentCompilerOptions = {
  /* TS ?.? */ emitDecoratorMetadata?: boolean;
  /* TS ?.? */ experimentalDecorators?: boolean;
  /* TS 2.2 */ jsx?: Jsx;
  /* TS ?.? */ jsxFactory?: string;
  /* TS 4.0 */ jsxFragmentFactory?: string;
  /* TS 4.0 */ jsxImportSource?: string;
  /* TS 2.0, TS 4.5 */ lib?: string[];
  /* TS 4.7 */ moduleDetection?: ModuleDetection;
  /* TS ?.? */ noLib?: boolean;
  /* TS ?.? */ reactNamespace?: string;
  /* TS 1.0 */ target?: Target;
  /* TS 3.7 */ useDefineForClassFields?: boolean;
}

export type CompilerDiagnosticsCompilerOptions = {
  /* TS ?.? */ diagnostics?: boolean;
  /* TS ?.? */ extendedDiagnostics?: boolean;
  /* TS 4.2 */ explainFiles?: boolean;
  /* TS 3.7 */ generateCpuProfile?: boolean;
  /* TS ?.? */ listEmittedFiles?: boolean;
  /* TS ?.? */ listFiles?: boolean;
  /* TS 2.0 */ traceResolution?: boolean;
}

export type ProjectsCompilerOptions = {
  /* TS 3.0 */ composite?: boolean;
  /* TS 4.0 */ disableReferencedProjectLoad?: boolean;
  /* TS 3.8 */ disableSolutionSearching?: boolean;
  /* TS 3.7 */ disableSourceOfProjectReferenceRedirect?: boolean;
  /* TS 3.4 */ incremental?: boolean;
  /* TS 3.4 */ tsBuildInfoFile?: string;
}

export type OutputFormattingCompilerOptions = {
  /* TS ?.? */ noErrorTruncation?: boolean;
  /* TS ?.? */ preserveWatchOutput?: boolean;
  /* TS ?.? */ pretty?: boolean;
}

export type CompletenessCompilerOptions = {
  /* TS 2.0 */ skipLibCheck?: boolean;
  /* TS ?.? */ skipDefaultLibCheck?: boolean;
}

export type WatchOptionsCompilerOptions = {
  /* TS 3.8 */ assumeChangesOnlyAffectDirectDependencies?: boolean;
}


export type CompilerOptions = {}
  & TypeCheckingCompilerOptions
  & ModulesCompilerOptions
  & EmitCompilerOptions
  & JavascriptSupportCompilerOptions
  & EditorSupportCompilerOptions
  & InteropConstraintsCompilerOptions
  & BackwardsCompatibilityCompilerOptions
  & LanguageAndEnvironmentCompilerOptions
  & CompilerDiagnosticsCompilerOptions
  & ProjectsCompilerOptions
  & OutputFormattingCompilerOptions
  & CompletenessCompilerOptions
  & WatchOptionsCompilerOptions;


export type TsConfig = {
  extends?: string;
  compilerOptions?: CompilerOptions;
  include?: string[];
  exclude?: string[];
  references?: Reference[];
  files?: string[];
  typeAcquisition?: TypeAcquisition;
  watchOptions?: WatchOptions;
}

```
