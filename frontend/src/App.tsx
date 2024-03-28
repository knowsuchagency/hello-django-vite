import "@mantine/core/styles.css";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";

import HeroBullets from "./components/HeroBullets/HeroBullets";
import ColorPickerDemo from "./components/ColorPickerDemo";

export default function App() {
  return (
    <>
      <ColorSchemeScript defaultColorScheme="auto" />
      <MantineProvider defaultColorScheme="auto">
        <HeroBullets />
        {/* <ColorPickerDemo /> */}
      </MantineProvider>
    </>
  );
}
