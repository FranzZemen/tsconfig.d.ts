/*
Created by Franz Zemen 12/04/2022
License Type: MIT
*/

import {ModuleResolution, TsConfig} from './tsconfig.js';

const tsconfigBase: TsConfig = {
  compilerOptions: {
    /**
     * TYPE CHECKING:  Write better code and have fewer errors by setting as
     * many of these to restrictive settings (true or false as the case may be)
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

    // -----------------------
    // moduleResolution, which about how modules are found or 'resolved' is pretty
    // straightforward.  If you need to use classic you probably don't need this
    // package.  This leaves the choices as node node16 and nodenext. But which
    // one to use?  You might be trying different values and not seeing any
    // differences.  The typescript doc guidance seems sound enough...use node16
    // or nodenext which is the default for module values of the same, otherwise
    // use node. HOWEVER, there are other reasons to use node16/nodenext, for
    // example I discovered that the imports feature in node is only supported
    // in typescript with the moduleResolution set to node or nodenext, and
    // I expect that evolving node features will be similar.
    // /* node TS < 4.7 */ moduleResolution: 'node',
    /* node16, nodenext TS >= 4.7 */ moduleResolution: ModuleResolution.nodenext,


    /**
     * The following are left to descendent tsconfig.json as needed
     */


    // ------------------------------------------------------
    // If you use this, you probably don't need this package.
    // ------------------------------------------------------
    // /* TS 3.5 */ allowUmdGlobalAccess: undefined
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
