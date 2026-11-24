import { createSignal } from "solid-js";

export default function App() {
  const [count, setCount] = createSignal(0);

  return (
    <main class="container">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/ovzWmFTnhUU?si=Y_Op9AMudVFJ4rlv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />

      <h1>Solid v2 Counter</h1>

      <button type="button" onClick={() => setCount((c) => c + 1)}>
        Count: {count()}
      </button>
    </main>
  );
}
