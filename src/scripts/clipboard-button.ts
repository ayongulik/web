const copyButtonLabel = "Copy";

document.addEventListener("DOMContentLoaded", initClipboardButton, false);

async function initClipboardButton() {
  const codeBlocks: HTMLPreElement[] = Array.from(
    document.querySelectorAll("pre.astro-code"),
  );

  for (const codeBlock of codeBlocks) {
    const wrapper = document.createElement("div");
    wrapper.style.position = "relative";

    const copyButton = document.createElement("button");
    copyButton.className = "copy-code";
    copyButton.innerHTML = copyButtonLabel;

    codeBlock.setAttribute("tabindex", "0");
    codeBlock.appendChild(copyButton);

    codeBlock.parentNode?.insertBefore(wrapper, codeBlock);
    wrapper.appendChild(codeBlock);

    copyButton.addEventListener("click", async () => {
      await copyCode(codeBlock, copyButton);
    });
  }
}

async function copyCode(block: HTMLPreElement, button: HTMLButtonElement) {
  const code = block.querySelector("code");
  const text = code?.innerText as string;

  await navigator.clipboard.writeText(text);

  button.innerText = "Copied";

  setTimeout(() => {
    button.innerText = copyButtonLabel;
  }, 700);
}
