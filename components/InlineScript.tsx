/**
 * Inline <script> that runs only from the server HTML (during parsing, before first paint).
 * On the client it renders as text/plain, which keeps React from warning about script tags.
 */
export function InlineScript({ html }: { html: string }) {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
