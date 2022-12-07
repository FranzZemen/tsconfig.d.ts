# Readme

Very lightweight package to get an accurate tsconfig.ts type, and some minor utilities to go with it.

This is in active development and documentation, but the TsConfig type is accurate and usable. 

# config.d.ts

Install and retrieve the config.d.ts file, or if you want the origina ts file, either git clone the project or copy 
from here:

```typescript
export type PluginImport = {
  name: string;
}

export enum WatchFile {
  fixedpollinginterval = 'fixedpollinginterval',
  prioritypollinginterval = 'prioritypollinginterval',
  dynamicprioritypolling = 'dynamicprioritypolling',
  fixedchunksizepolling = 'fixedchunksizepolling',
  usefsevents = 'usefsevents',
  usefseventsonparentdirectory = 'usefseventsonparentdirectory'
}

export enum WatchDirectory {
  usefsevents = 'usefsevents',
  fixedpollinginterval = 'fixedpollinginterval',
  dynamicprioritypolling = 'dynamicprioritypolling',
  fixedchunksizepolling = 'fixedchunksizepolling'

}

export enum PollingWatch {
  fixedinterval = 'fixedinterval',
  priorityinterval = 'priorityinterval',
  dynamicpriority = 'dynamicpriority',
  fixedchunksize = 'fixedchunksize'
}

export interface WatchOptions {
  /* TS 3.8 */ watchFile?: WatchFile;
  /* TS 3.8 */ watchDirectory?: WatchDirectory;
  /* TS 3.8 */ fallbackPolling?: PollingWatch;
  synchronousWatchDirectory?: boolean;
  excludeDirectories?: string[];
  excludeFiles?: string[];
}

export type TypeAcquisition = {
  enable?: boolean;
  include?: string[];
  exclude?: string[];
  /* TS 4.1 */ disableFilenameBasedTypeAcquisition?: boolean;
}

export type MapLike<T> = {
  [index: string]: T;
}

export enum Jsx {
  preserve = 'preserve',
  react = 'react',
  reactNative = 'react-native',
  reactJsx = 'react-jsx',
  reactJsxdev = 'react-jsxdev'
}

export enum ImportsNotUsedAsValues {
  remove = 'remove',
  preserve = 'preserve',
  error = 'error'
}

export enum ModuleDetection {
  legacy = 'legacy',
  auto = 'auto',
  force = 'force'
}

export enum Module {
  none = 'none',
  commonjs = 'commonjs',
  amd = 'amd',
  umd = 'umd',
  system = 'system',
  es6 = 'es6',
  es2015 = 'es2015',
  es2020 = 'es2020',
  es2022 = 'es2022',
  esnext = 'esnext',
  node16 = 'node16',
  nodenext = 'nodenext'
}

export enum ModuleResolution {
  classic = 'classic',
  node = 'node',
  node16 = 'node16',
  nodenext = 'nodenext'
}

export enum NewLine {
  crlf = 'crlf',
  lf = 'lf'
}

export enum Target {
  es3 = 'es3',
  es5 = 'es5',
  es6 = 'es6',
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


export interface Reference {
  path: string;
  prepend?: boolean;
}


export interface CompilerOptions {
  /* TS 1.8 */ allowJs?: boolean;
  /* TS 1.8 */ allowSyntheticDefaultImports?: boolean;
  /* TS 3.5 */ allowUmdGlobalAccess?: boolean;
  /* TS 1.8 */ allowUnreachableCode?: boolean;
  /* TS 1.8 */ allowUnusedLabels?: boolean;
  /* TS 2.1 */ alwaysStrict?: boolean;
  /* TS ?.? */ baseUrl?: string;
  /* TS ?.? */ charset?: string;
  /* TS 2.3 */ checkJs?: boolean;
  /* TS 1.0 */ declaration?: boolean;
  /* TS 2.9 */ declarationMap?: boolean;
  /* TS 2.8 */ emitDeclarationOnly?: boolean;
  /* TS 2.0 */ declarationDir?: string;
  /* TS ?.? */ disableSizeLimit?: boolean;
  disableSourceOfProjectReferenceRedirect?: boolean;
  disableSolutionSearching?: boolean;
  disableReferencedProjectLoad?: boolean;
  /* TS 2.3 */ downlevelIteration?: boolean;
  /* TS ?.? */ OM?: boolean;
  emitDecoratorMetadata?: boolean;
  /* TS 4.4 */ exactOptionalPropertyTypes?: boolean;
  experimentalDecorators?: boolean;
  /* TS ?.? */ forceConsistentCasingInFileNames?: boolean;
  /* TS ?.? */ importHelpers?: boolean;
  /* TS 3.8 */ importsNotUsedAsValues?: ImportsNotUsedAsValues;
  /* TS 1.5 */ eSourceMap?: boolean;
  inlineSources?: boolean;
  /* TS ?.? */ isolatedModules?: boolean;
  jsx?: Jsx;
  /* TS 2.9 */ keyofStringsOnly?: boolean;
  lib?: string[];
  locale?: string;
  /* TS ?.? */ mapRoot?: string;
  /* TS ?.? */ NodeModuleJsDepth?: number;
  /* TS 1.0 */ module?: Module;
  /* TS < 4.7, TS > 4.7 */moduleResolution?: ModuleResolution;
  /* TS 4.7 */ moduleSuffixes?: string[];
  moduleDetection?: ModuleDetection;
  /* TS 1.5 */ newLine?: NewLine;
  /* TS ?.? */ noEmit?: boolean;
  /* TS 1.5 */ noEmitHelpers?: boolean;
  /* TS 1.4 */ noEmitOnError?: boolean;
  noErrorTruncation?: boolean;
  /* TS 1.8 */ noFallthroughCasesInSwitch?: boolean;
  /* TS ?.? */ noImplicitAny?: boolean;
  /* TS 1.8 */ noImplicitReturns?: boolean;
  /* TS 2.0 */ noImplicitThis?: boolean;
  /* TS 2.4 */ noStrictGenericChecks?: boolean;
  /* TS 2.0 */ noUnusedLocals?: boolean;
  /* TS 2.0 */ noUnusedParameters?: boolean;
  /* TS ?.? */ noImplicitUseStrict?: boolean;
  /* TS 4.2 */ noPropertyAccessFromIndexSignature?: boolean;
  assumeChangesOnlyAffectDirectDependencies?: boolean;
  noLib?: boolean;
  /* TS ?.? */ noResolve?: boolean;
  /* TS 4.1 */ noUncheckedIndexedAccess?: boolean;
  /* TS ?.? */ out?: string;
  /* TS ?.? */ outDir?: string;
  /* TS 1.0 */ outFile?: string;
  /* TS ?.? */ plugins?: PluginImport[],/* TS ?.? */
  /* TS ?.? */ paths?: MapLike<string[]>;
  /* TS ?.? */ preserveConstEnums?: boolean;
  /* TS 4.3 */ noImplicitOverride?: boolean;
  /* TS ?.? */ preserveSymlinks?: boolean;
  /* TS 4.5 */ preserveValueImports?: boolean;
  project?: string;
  reactNamespace?: string;
  jsxFactory?: string;
  jsxFragmentFactory?: string;
  jsxImportSource?: string;
  composite?: boolean;
  incremental?: boolean;
  tsBuildInfoFile?: string;
  /* TS ?.? */ removeComments?: boolean;
  rootDir?: string;
  rootDirs?: string[];
  skipLibCheck?: boolean;
  skipDefaultLibCheck?: boolean;
  sourceMap?: boolean;
  /* TS ?.? */ sourceRoot?: string;
  /* TS 2.3 */ strict?: boolean;
  /* TS 2.6 */ strictFunctionTypes?: boolean;
  /* TS 3.2 */ strictBindCallApply?: boolean;
  /* TS 2.0 */ strictNullChecks?: boolean;
  /* TS 2.7 */ strictPropertyInitialization?: boolean;
  /* TS ?.? */ stripInternal?: boolean;
  /* TS ?.? */ suppressExcessPropertyErrors?: boolean;
  /* TS ?.? */ suppressImplicitAnyIndexErrors?: boolean;
  target?: Target;
  traceResolution?: boolean;
  /* TS 4.4 */ useUnknownInCatchVariables?: boolean;
  /* TS ?.? */ resolveJsonModule?: boolean;
  types?: string[];
  typeRoots?: string[];
  /* TS 1.8 */ esModuleInterop?: boolean;
  useDefineForClassFields?: boolean;
}

export interface TsConfig {
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
