// X GIF Blocker – blendet GIFs in Tweets aus und zeigt einen Platzhalter.
(function () {
  const MARK = "data-gifblock-done";

  // Erkennt X-GIFs (werden als Video aus "tweet_video" ausgeliefert) sowie Tenor/Giphy-Bilder
  function isGifElement(el) {
    if (el.tagName === "VIDEO") {
      const src = (el.currentSrc || el.src || "") + " " + (el.poster || "");
      if (/tweet_video|tweet_video_thumb/.test(src)) return true;
      const source = el.querySelector("source");
      if (source && /tweet_video/.test(source.src)) return true;
    }
    if (el.tagName === "IMG") {
      const src = el.src || "";
      if (/tweet_video_thumb|media\.tenor\.com|giphy\.com/.test(src)) return true;
      if (/format=gif|\.gif(\?|$)/i.test(src)) return true;
    }
    return false;
  }

  function findContainer(el) {
    return (
      el.closest('[data-testid="tweetPhoto"]') ||
      el.closest('[data-testid="videoPlayer"]') ||
      el.closest('[data-testid="videoComponent"]') ||
      el.parentElement?.parentElement ||
      el.parentElement
    );
  }

  function hide(el) {
    const container = findContainer(el);
    if (!container || container.getAttribute(MARK)) return;
    container.setAttribute(MARK, "1");

    // Video stoppen
    container.querySelectorAll("video").forEach((v) => {
      try { v.pause(); } catch (e) {}
    });

    const placeholder = document.createElement("div");
    placeholder.textContent = "GIF hidden – click to show";
    placeholder.style.cssText =
      "padding:14px;margin:6px 0;border:1px dashed #888;border-radius:12px;" +
      "color:#888;font:14px system-ui,sans-serif;text-align:center;cursor:pointer;";
    placeholder.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      container.style.display = "";
      placeholder.remove();
    });

    container.style.display = "none";
    container.parentElement?.insertBefore(placeholder, container);
  }

  function scan(root) {
    root.querySelectorAll("video, img").forEach((el) => {
      if (isGifElement(el)) hide(el);
    });
  }

  scan(document);

  new MutationObserver((mutations) => {
    for (const m of mutations) {
      for (const node of m.addedNodes) {
        if (node.nodeType !== 1) continue;
        if (node.matches?.("video, img") && isGifElement(node)) hide(node);
        else scan(node);
      }
    }
  }).observe(document.body, { childList: true, subtree: true });
})();
