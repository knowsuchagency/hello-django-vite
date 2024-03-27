import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";

import  HeroBullets  from "./components/HeroBullets/HeroBullets";
import ColorPickerDemo from "./components/ColorPickerDemo";



export default function App() {
  return (
    <MantineProvider theme={theme}>
      <HeroBullets />
      <ColorPickerDemo />
    </MantineProvider>
  );
}
