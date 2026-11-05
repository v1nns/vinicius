// The address is split in the HTML so scrapers don't find it as plain text.
document.querySelectorAll(".email").forEach(el => {
  const addr = `${el.dataset.user}@${el.dataset.domain}`;
  el.textContent = addr;
  const btn = el.parentElement.querySelector(".copy");
  if (!btn) return;
  btn.hidden = false;
  btn.addEventListener("click", () => {
    const done = () => { btn.textContent = "copied"; setTimeout(() => btn.textContent = "copy", 1600); };
    const select = () => { const r = document.createRange(); r.selectNodeContents(el); getSelection().removeAllRanges(); getSelection().addRange(r); };
    navigator.clipboard ? navigator.clipboard.writeText(addr).then(done, select) : select();
  });
});
