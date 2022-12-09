/*
Created by Franz Zemen 12/04/2022
License Type: MIT
*/

import {ModuleResolution, TsConfig} from './tsconfig.js';

export const tsconfigBase: TsConfig = {
  compilerOptions: {
    /**
     * TYPE CHECKING:
     */
    /* TS 1.8 */ allowUnusedLabels: false,
    /* TS 1.8 */ allowUnreachableCode: false,
    /* TS 4.4 */ exactOptionalPropertyTypes: true,
    /* TS 4.3 */ noImplicitOverride: true,
    /* TS 2.0 */ noUnusedLocals: true,
    /* TS 2.0 */ noUnusedParameters: true,
    /* TS 1.8 */ noFallthroughCasesInSwitch: true,
    /* TS 1.8 */ noImplicitReturns: true,
    /* TS 4.2 */ noPropertyAccessFromIndexSignature: false,
    /* TS 4.1 */ noUncheckedIndexedAccess: true,
    /* TS 2.3 */ strict: true,
    // -------------------------------------------------------
    // If strict is set to true, set this painful condition to
    // false - it is true by default when strict is true
    // -------------------------------------------------------
    // With strict set to true, individual options can be set to false
    /* TS 4.4 */ useUnknownInCatchVariables: false,
    // ---------------------------------------------------------
    // If strict is set to false, consider each of the following
    // to true for better code and fewer errors
    // ---------------------------------------------------------
    // /* TS 2.1 */ alwaysStrict: true,
    // /* TS 3.2 */ strictBindCallApply: true,
    // /* TS 2.6 */ strictFunctionTypes: true,
    // /* TS 2.7 */ strictPropertyInitialization: true,
    // /* TS ?.? */ noImplicitAny: true,
    // /* TS 2.0 */ noImplicitThis: true,
    // /* TS 2.0 */ strictNullChecks: true,
    // ---------------------------------------------------------


    /**
     * MODULES
     */

    //----------------------------------------------------------------------
    // If find this always useful and don't understand why its not a default
    //----------------------------------------------------------------------
    /* TS ?.? */ resolveJsonModule: true,

    // ---------------------------------------------------------------------
    // Use baseUrl='./' (or whatever value) to avoid using relative imports,
    // instead considering the baseUrl as "root". Set in descendant
    // tsconfig.json files
    // ---------------------------------------------------------------------
    // /* TS ?.? */ baseUrl: './', // Paths resolved to location of ts

    // -----------------------------------------------------------------------
    // set module in descendant tsconfig.json files.  Not to be confused with
    // package.json.type=module|commonjs.
    //
    // In the latter (package.json), type=module|commonjs tells node how to
    // load .js files (.mjs & .cjs are always loaded according to what they
    // represent). It doesn't matter ** what ** the file is actually compile to
    // do.
    //
    // The module compiler option indicate how a file should actually be emitted
    // for module loading.
    //
    // As a result, it is possible to transpile a .ts file in such a way that
    // it is un-loadable by node in it's js form, for instance transpiling it to
    // be a commonjs module while setting node module loading in package.json to
    // be "module".
    //
    // Bottom line, if you want to use commonjs, jus tse this to commonjs.
    //
    // On the other hand, if you want to emit ECMAScript, then use one of the
    // ESnn values, noting that the differences between these are with respect
    // to various javascript evolutionary features, not the module system itself.
    //
    // If you want to the emitted code to depend on the package.json type field,
    // then use node16 or nodenext.
    //
    // We're not even going to support amd, umd and system - if you need that
    // you don't need this package.
    //
    // Worth noting that although several of these values result in code generated
    // for the same module system, there are other features that they incrementally
    // improve on, so it is not all about module loading.
    //
    // -----------------------------------------------------------------------
    // /* TS 1.0 */ module: undefined

    // -----------------------------------------------------------------------------
    // moduleResolution, which about how modules are found or 'resolved' is pretty
    // straightforward.  If you need to use classic you probably don't need this
    // package.  This leaves the choices as node, node16 and nodenext. But which
    // one to use?  You might be trying different values and not seeing any
    // differences.  The typescript doc guidance seems sound enough...use node16
    // or nodenext which is the default for module values of the same, otherwise
    // use node. HOWEVER, there are other reasons to use node16/nodenext, for
    // example I discovered that the package.josn imports feature in node is only
    // supported in typescript with the moduleResolution set to node or nodenext, and
    // I expect that evolving node features will be similar.
    // -----------------------------------------------------------------------------
    // /* node TS < 4.7 */ moduleResolution: 'node',
    /* node16, nodenext TS >= 4.7 */ moduleResolution: ModuleResolution.nodenext,

    // --------------------------------------
    // Left to descendant tsconfig.json files
    // --------------------------------------
    // /* TS 1.5 */ rootDir: undefined,
    // /* TS 2.0 */ rootDirs: undefined,
    // /* TS ?.? */ typeRoots: undefined,
    // /* TS ?.? */ types: undefined,

    /**
     * EMIT
     */
    /* TS 1.0 */ declaration: true,
    /* TS ?.? */ sourceMap: true,
    // --------------------------------------
    // Left to descendant tsconfig.json files
    // --------------------------------------
    // /* TS 2.0 */ declarationDir: undefined,
    // /* TS 2.8 */ emitDeclarationOnly: undefined,
    // /* TS 1.5 */ inlineSourceMap: undefined,
    // /* TS 1.4 */ noEmitOnError: undefined,
    // /* TS ?.? */ outDir: undefined,
    // /* TS 1.0 */ outFile: undefined,
    // /* TS ?.? */ removeComments: undefined,
    // /* TS 2.9 */ declarationMap: undefined,

    /**
     * JAVASCRIPT SUPPORT
     */
    /* TS 1.8 */ allowJs: true,
    /* TS 2.3 */ checkJs: true,

    // --------------------------------------
    // Left to descendant tsconfig.json files
    // --------------------------------------
    // /* TS ?.? */ maxNodeModuleJsDepth: undefined


    /**
     * EDITOR SUPPORT
     */
    // All editor support are in "NOT MAINSTREAM"

    /**
     * INTEROP CONSTRAINTS
     */
    /* TS 1.8 */ allowSyntheticDefaultImports: true,
    /* TS 2.7 */ esModuleInterop: true,
    /* TS ?.? */ forceConsistentCasingInFileNames: true,

    // --------------------------------------
    // Left to descendant tsconfig.json files
    // --------------------------------------
    // /* TS ?.? */ preserveSymlinks: undefined,

    /**
     * BACKWARDS COMPATIBILITY
     */
    // All attributes in "NOT MAINSTREAM"

    /**
     * LANGUAGE AND ENVIRONMENT
     */
    // /* TS ?.? */ emitDecoratorMetadata = undefined;
    /* TS ?.? */ experimentalDecorators: true,
    // /* TS 2.2 */ jsx: undefined,
    // /* TS ?.? */ jsxFactory: undefined,
    // /* TS 4.0 */ jsxFragmentFactory: undefined,

    // --------------------------------------------------------------------------------------------
    // See note in Typescript docs about lib overridden by npm modules where lib files update often
    // --------------------------------------------------------------------------------------------
    // /* TS 2.0, TS 4.5 */ lib: undefined,

    // --------------------------------------------
    // Default is what everyone would normally want
    // --------------------------------------------
    // /* TS 4.7 */ moduleDetection: undefined,

    // --------------------------------------
    // Left to descendant tsconfig.json files
    // --------------------------------------
    // /* TS 1.0 */ target,


    /**
     * COMPILER DIAGNOSTICS
     */
    // /* TS 4.2 */ explainFiles: undefined,
    // /* TS ?.? */ extendedDiagnostics: undefined,
    // /* TS 3.7 */ generateCpuProfile,
    // /* TS ?.? */ listEmittedFiles: undefined,
    // /* TS ?.? */ listFiles: undefined,
    // /* TS 2.0 */ traceResolution: undefined,


    /**
     * PROJECTS
     */
    // /* TS 3.0 */ composite: undefined,
    // /* TS 3.4 */ incremental: undefined,
    // /* TS 3.4 */ tsBuildInfoFile: undefined,

    /**
     * NOT MAINSTREAM
     */
    // /* TS 4.7 */ moduleSuffixes: undefined,
    // /* TS ?.? */ noResolve: undefined,
    // /* TS ?.? */ paths: undefined,
    // /* TS 3.5 */ allowUmdGlobalAccess: undefined,
    // /* TS 2.3 */ downlevelIteration: undefined,
    // /* TS ?.? */ importHelpers: undefined,
    // /* TS ?.? */ emitBOM: undefined,
    // /* TS 3.8 */ importsNotUsedAsValues: undefined,
    // /* TS ?.? */ mapRoot: undefined,
    // /* TS 1.5 */ newLine: undefined,
    // /* TS ?.? */ noEmit: undefined,
    // /* TS 1.5 */ noEmitHelpers: undefined,
    // /* TS ?.? */ preserveConstEnums: undefined,
    // /* TS 4.5 */ preserveValueImports: undefined,
    // /* TS ?.? */ sourceRoot: undefined,
    // /* TS ?.? */ stripInternal: undefined,
    // /* TS ?.? */ disableSizeLimit: undefined,
    // /* TS ?.? */ plugins: undefined,
    // /* TS ?.? */ isolatedModules: undefined,
    // /* TS ?.? */ charset: undefined,
    // /* TS 2.9 */ keyofStringsOnly: undefined,
    // /* TS ?.? */ noImplicitUseStrict: undefined,
    // /* TS 2.4 */ noStrictGenericChecks: undefined,
    // /* TS ?.? */ out,
    // /* TS ?.? */ suppressExcessPropertyErrors,
    // /* TS ?.? */ suppressImplicitAnyIndexErrors,
    // /* TS ?.? */ noLib: undefined,
    // /* TS ?.? */ reactNamespace: undefined,
    // /* TS 3.7 */ useDefineForClassFields: undefined,
    // /* TS ?.? */ diagnostics: undefined,
    // /* TS 4.0 */ disableReferencedProjectLoad: undefined,
    // /* TS 3.8 */ disableSolutionSearching: undefined,
    // /* TS 3.7 */ disableSourceOfProjectReferenceRedirect: undefined,
  },
  // ------------------------------------------------------------
  // The following are left to descendent tsconfig.json as needed
  // ------------------------------------------------------------
  // extends: undefined,
  // exclude: [],
  // include: [],
  // references: [],
  // watchOptions: undefined,
  // -----------------------------
  // The following are rarely used
  // -----------------------------
  // files: [],
  // typeAcquisition: undefined,
};
