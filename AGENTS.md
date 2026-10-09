<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application architecture
- Keep the provided restaurant menu in a typed browser-safe module and import uploaded media through asset pointers; this preserves the supplied catalog without exposing an insecure demo admin panel.
- Use React state for the current order and compose WhatsApp checkout client-side; orders are handed off to the restaurant rather than stored by the site.
- Define cinematic styling and semantic visual tokens in the global stylesheet; shared Button variants provide consistent controls.
