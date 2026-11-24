import styles from "./App.module.css";

export default function App() {
  return (
    <main>
      <iframe
        class={styles.iframe}
        src="https://www.youtube.com/embed/ovzWmFTnhUU?autoplay=1&mute=0&playsinline=1&loop=1"
        title="【DDR SN】 MAX 300 (Super-Max-Me Mix) / Jondi & Spesh [DOUBLE CHALLENGE] 譜面確認+Clap"
        allow="autoplay; fullscreen"
        referrerpolicy="strict-origin-when-cross-origin"
      />
    </main>
  );
}
