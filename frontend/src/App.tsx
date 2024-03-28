import "@mantine/core/styles.css";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";

import HeroBullets from "./components/HeroBullets/HeroBullets";

export default function App() {
  return (
    <>
      <ColorSchemeScript defaultColorScheme="auto" />
      <MantineProvider defaultColorScheme="auto">
        <HeroBullets />
      </MantineProvider>
    </>
  );
}
