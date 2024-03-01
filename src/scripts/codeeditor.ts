window.ayongulik = {
  loadingTestCase: false,
};

const warningLog = console.warn;

// Since somehow we cannot redirect stdout using Pyodide.setStdout,
// we need to patch the console.warn like this
console.warn = (data) => {
  warningLog(data);
  printOutput(data, true);
};

document.addEventListener("DOMContentLoaded", initCodeEditor, false);

const buttonRunEl = document.getElementById("button-run");
const buttonRunTestCasesEl = document.getElementById("button-run-test-cases");

buttonRunEl?.addEventListener("click", evaluateCode);
buttonRunTestCasesEl?.addEventListener("click", evaluateTestCases);

const templateCode = `def main():
    # tulis kode kamu disini

if __name__ == '__main__':
    main()`;

async function initCodeEditor() {
  const editorEl = document.getElementById("code") as HTMLTextAreaElement;

  if (editorEl) {
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

const testCode = `
import io
import unittest
from unittest.mock import patch
from challenge import main


class TestExercisePart1(unittest.TestCase):

    @patch('sys.stdout', new_callable=io.StringIO)
    def test_one(self, stdout):
        main(10, False)
        expected_out = 'Lulus!\\n'
        self.assertEqual(stdout.getvalue(), expected_out)

    @patch('sys.stdout', new_callable=io.StringIO)
    def test_two(self, stdout):
        main(9, False)
        expected_out = 'Tidak lulus~\\n'
        self.assertEqual(stdout.getvalue(), expected_out)

    @patch('sys.stdout', new_callable=io.StringIO)
    def test_three(self, stdout):
        main(9, True)
        expected_out = 'Lulus!\\n'
        self.assertEqual(stdout.getvalue(), expected_out)


if __name__ == '__main__':
    unittest.main(exit=False)
`;

const patchPrintCode = `
import sys
import io
sys.stdout = io.StringIO()
`;

function evaluateCode() {
  try {
    if (window.pyodide?.version && window.CodeMirror?.version) {
      window.pyodide.runPython(patchPrintCode);
      window.pyodide.runPython(window.editor.getValue());
      const stdout = window.pyodide.runPython("sys.stdout.getvalue()");
      printOutput(stdout);
    }
  } catch (err) {
    printOutput(String(err));
  }
}

function evaluateTestCases() {
  try {
    if (window.pyodide?.version && window.CodeMirror?.version) {
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
    }
  } catch (err) {
    printOutput(String(err));
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
