/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="@types/codemirror" />

import type { EditorFromTextArea } from "codemirror";

// https://github.com/pyodide/pyodide/blob/main/src/js/pyodide.ts ConfigType
interface LoadPyodideOptions {
  indexURL?: string;
  packageCacheDir?: string;
  lockFileURL?: string;
  fullStdLib?: boolean;
  stdLibURL?: string;
  stdin?: () => string;
  stdout?: (msg: string) => void;
  stderr?: (msg: string) => void;
  jsglobals?: object;
  args?: string[];
  _node_mounts?: string[];
  env?: { [key: string]: string };
  packages?: string[];
}

interface PyodideInterface {
  ERRNO_CODES: { [code: string]: number };
  FS: {
    writeFile: (...args) => void;
    mkdir: (...args) => void;
  };
  PATH: string;
  canvas: any;
  ffi: any;
  globals: string;
  loadedPackages: string[];
  pyodide_py: string;
  version: string;
  checkInterrupt: () => boolean;
  loadPackage: (names: string[], options?: any) => Promise<void>;
  loadPackagesFromImports: (code: string, options?: any) => Promise<void>;
  mountNativeFS: (path: string, fileSystemHandle: any) => Promise<void>;
  pyimport: (mode_name: string) => void;
  registerComlink: (any) => void;
  registerJsModule: (name: string, module: string) => void;
  runPython: (code: string, options?: any) => string;
  runPythonAsync: (code: string, options?: any) => Promise<string>;
  runPythonSyncifying: (code: string, options?: any) => Promise<string>;
  setDebug: (debug: boolean) => void;
  setInterruptBuffer: (buffer: any) => void;
  setStderr: (options: any) => void;
  setStdin: (options: any) => void;
  setStdout: (options: any) => void;
  toPy: (obj: any, options?: any) => void;
  unpackArchive: (buffer: any, format: string, options?: any) => void;
  unregisterJsModule: (name: string) => string;
}

declare global {
  interface Window {
    editor: EditorFromTextArea;
    loadPyodide: (options?: LoadPyodideOptions) => Promise<PyodideInterface>;
    pyodide: PyodideInterface;
  }
}
