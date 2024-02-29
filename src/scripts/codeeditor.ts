document.addEventListener("DOMContentLoaded", main, false);

const buttonRunEl = document.getElementById("button-run");

buttonRunEl?.addEventListener("click", evaluateCode);

const templateCode = `def main():
    # tulis kode kamu disini

if __name__ == '__main__':
    main()`;

async function main() {
  const editorEl = document.getElementById("code") as HTMLTextAreaElement;

  if (editorEl) {
    window.pyodide = await window.loadPyodide({
      indexURL: "https://cdn.jsdelivr.net/pyodide/v0.20.0/full/",
    });
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

function evaluateCode() {
  try {
    if (window.pyodide?.version && window.CodeMirror?.version) {
      window.pyodide.runPython(`
						import sys
						import io
						sys.stdout = io.StringIO()
					`);
      window.pyodide.runPython(window.editor.getValue());
      const stdout = window.pyodide.runPython("sys.stdout.getvalue()");
      printOutput(stdout);
    }
  } catch (err) {
    printOutput(String(err));
  }
}

function printOutput(output: string) {
  const el = document.getElementById("output") as HTMLTextAreaElement;
  if (el) {
    el.value = output;
    if (el.parentNode) {
      const parentNode = el.parentNode as HTMLElement;
      parentNode.dataset.replicatedValue = output;
    }
  }
}
