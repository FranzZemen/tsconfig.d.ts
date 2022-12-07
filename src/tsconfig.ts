/*
Created by Franz Zemen 12/04/2022
License Type: MIT
*/

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
  allowJs?: boolean;
  allowSyntheticDefaultImports?: boolean;
  /* TS 3.5 */ allowUmdGlobalAccess?: boolean;
  /* TS 1.8 */ allowUnreachableCode?: boolean;
  /* TS 1.8 */ allowUnusedLabels?: boolean;
  /* TS 2.1 */ alwaysStrict?: boolean;
  /* TS ?.? */ baseUrl?: string;
  charset?: string;
  checkJs?: boolean;
  declaration?: boolean;
  declarationMap?: boolean;
  emitDeclarationOnly?: boolean;
  declarationDir?: string;
  disableSizeLimit?: boolean;
  disableSourceOfProjectReferenceRedirect?: boolean;
  disableSolutionSearching?: boolean;
  disableReferencedProjectLoad?: boolean;
  downlevelIteration?: boolean;
  emitBOM?: boolean;
  emitDecoratorMetadata?: boolean;
  /* TS 4.4 */ exactOptionalPropertyTypes?: boolean;
  experimentalDecorators?: boolean;
  forceConsistentCasingInFileNames?: boolean;
  importHelpers?: boolean;
  importsNotUsedAsValues?: ImportsNotUsedAsValues;
  inlineSourceMap?: boolean;
  inlineSources?: boolean;
  isolatedModules?: boolean;
  jsx?: Jsx;
  keyofStringsOnly?: boolean;
  lib?: string[];
  locale?: string;
  mapRoot?: string;
  maxNodeModuleJsDepth?: number;
  /* TS 1.0 */ module?: Module;
  /* TS < 4.7, TS > 4.7 */moduleResolution?: ModuleResolution;
  /* TS 4.7 */ moduleSuffixes?: string[];
  moduleDetection?: ModuleDetection;
  newLine?: NewLine;
  noEmit?: boolean;
  noEmitHelpers?: boolean;
  noEmitOnError?: boolean;
  noErrorTruncation?: boolean;
  /* TS 1.8 */ noFallthroughCasesInSwitch?: boolean;
  /* TS ?.? */ noImplicitAny?: boolean;
  /* TS 1.8 */ noImplicitReturns?: boolean;
  /* TS 2.0 */ noImplicitThis?: boolean;
  noStrictGenericChecks?: boolean;
  /* TS 2.0 */ noUnusedLocals?: boolean;
  /* TS 2.0 */ noUnusedParameters?: boolean;
  noImplicitUseStrict?: boolean;
  /* TS 4.2 */ noPropertyAccessFromIndexSignature?: boolean;
  assumeChangesOnlyAffectDirectDependencies?: boolean;
  noLib?: boolean;
  /* TS ?.? */ noResolve?: boolean;
  /* TS 4.1 */ noUncheckedIndexedAccess?: boolean;
  out?: string;
  outDir?: string;
  outFile?: string;
  plugins?: PluginImport[],
  /* TS ?.? */ paths?: MapLike<string[]>;
  preserveConstEnums?: boolean;
  /* TS 4.3 */ noImplicitOverride?: boolean;
  preserveSymlinks?: boolean;
  preserveValueImports?: boolean;
  project?: string;
  reactNamespace?: string;
  jsxFactory?: string;
  jsxFragmentFactory?: string;
  jsxImportSource?: string;
  composite?: boolean;
  incremental?: boolean;
  tsBuildInfoFile?: string;
  removeComments?: boolean;
  rootDir?: string;
  rootDirs?: string[];
  skipLibCheck?: boolean;
  skipDefaultLibCheck?: boolean;
  sourceMap?: boolean;
  sourceRoot?: string;
  /* TS 2.3 */ strict?: boolean;
  /* TS 2.6 */ strictFunctionTypes?: boolean;
  /* TS 3.2 */ strictBindCallApply?: boolean;
  /* TS 2.0 */ strictNullChecks?: boolean;
  /* TS 2.7 */ strictPropertyInitialization?: boolean;
  stripInternal?: boolean;
  suppressExcessPropertyErrors?: boolean;
  suppressImplicitAnyIndexErrors?: boolean;
  target?: Target;
  traceResolution?: boolean;
  /* TS 4.4 */ useUnknownInCatchVariables?: boolean;
  /* TS ?.? */ resolveJsonModule?: boolean;
  types?: string[];
  /** Paths used to compute primary types search locations */
  typeRoots?: string[];
  esModuleInterop?: boolean;
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
