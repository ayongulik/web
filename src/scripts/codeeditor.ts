import { BASE_PATH } from "src/config";

const warningLog = console.warn;

// Since somehow we cannot redirect stdout using Pyodide.setStdout,
// we need to patch the console.warn like this
console.warn = (data) => {
  warningLog(data);
  printOutput(data, true);
};

const buttonRunId = "button-run";
const buttonRunTestCasesId = "button-run-test-cases";
const buttonRunEl = document.getElementById(buttonRunId);
const buttonRunTestCasesEl = document.getElementById(buttonRunTestCasesId);

const templateCode = `def main():
    # tulis kode kamu disini

if __name__ == '__main__':
    main()`;

const patchPrintCode = `
import sys
import io
sys.stdout = io.StringIO()
`;

document.addEventListener("DOMContentLoaded", initCodeEditor, false);

buttonRunEl?.addEventListener("click", evaluateCode);
buttonRunTestCasesEl?.addEventListener("click", evaluateTestCases);

async function initCodeEditor() {
  const editorEl = document.getElementById("code") as HTMLTextAreaElement;

  if (editorEl) {
    toggleLoadingOnButton(buttonRunId, true);
    toggleLoadingOnButton(buttonRunTestCasesId, true);

    window.pyodide = await window.loadPyodide();
    window.editor = window.CodeMirror.fromTextArea(
      document.getElementById("code") as HTMLTextAreaElement,
      {
        mode: {
          name: "python",
          version: 3,
          singleLineStringErrors: false,
        },
        theme: "material-darker",
        lineNumbers: true,
        indentUnit: 4,
        viewportMargin: Infinity,
      },
    );

    window.editor.setValue(templateCode);
    updateToMinHeight(window.editor, 300);

    toggleLoadingOnButton(buttonRunId, false);
    toggleLoadingOnButton(buttonRunTestCasesId, false);
    console.log("Editor is ready!");
  }

  console.log("Editor is disabled");
}

function updateToMinHeight(
  editor: CodeMirror.EditorFromTextArea,
  minHeight: number,
) {
  editor.getScrollerElement().style.minHeight = `${minHeight}px`;
  editor.refresh();
}

function evaluateCode() {
  try {
    if (window.pyodide?.version && window.CodeMirror?.version) {
      toggleLoadingOnButton(buttonRunId, true);

      window.pyodide.runPython(patchPrintCode);
      window.pyodide.runPython(window.editor.getValue());
      const stdout = window.pyodide.runPython("sys.stdout.getvalue()");
      printOutput(stdout);

      toggleLoadingOnButton(buttonRunId, false);
    }
  } catch (err) {
    printOutput(String(err));
    toggleLoadingOnButton(buttonRunId, false);
  }
}

async function evaluateTestCases() {
  try {
    if (window.pyodide?.version && window.CodeMirror?.version) {
      toggleLoadingOnButton(buttonRunTestCasesId, true);

      const repoUrl =
        "https://raw.githubusercontent.com/ayongulik/gameshark/master/tests";
      let testFilePath = window.location.pathname.replace(BASE_PATH, "");
      // handle trailing backslash
      if (testFilePath.slice(-1) === "/") {
        testFilePath = testFilePath.slice(0, testFilePath.length - 1);
      }
      const response = await fetch(`${repoUrl}${testFilePath}.py`);

      if (response.ok) {
        const testCode = await response.text();
        window.pyodide.runPython(patchPrintCode);
        window.pyodide.FS.writeFile("challenge.py", window.editor.getValue());
        window.pyodide.FS.writeFile("test.py", testCode);
        printOutput("");
        window.pyodide.runPython(`
          exec(open('test.py').read())
          import sys
          sys.modules.pop("test", None)
          sys.modules.pop("challenge", None)
        `);

        toggleLoadingOnButton(buttonRunTestCasesId, false);
      }

      toggleLoadingOnButton(buttonRunTestCasesId, false);
    }
  } catch (err) {
    printOutput(String(err));
    toggleLoadingOnButton(buttonRunTestCasesId, false);
  }
}

function printOutput(output: string, append = false) {
  const el = document.getElementById("output") as HTMLTextAreaElement;
  if (el) {
    el.value = append ? `${el.value}\n${output}` : output;

    if (el.parentNode) {
      const parentNode = el.parentNode as HTMLElement;
      parentNode.dataset.replicatedValue = el.value;
    }
  }
}

function toggleLoadingOnButton(id: string, loading = true) {
  const el = document.getElementById(id) as HTMLButtonElement;
  if (el) {
    if (loading) {
      el.disabled = true;
      el.classList.add("loading");
    } else {
      el.disabled = false;
      el.classList.remove("loading");
    }
  }
}
