import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";

import { useState } from "react";
import { ColorPicker, Text } from "@mantine/core";

function Demo() {
  const [value, onChange] = useState("rgba(47, 119, 150, 0.7)");

  return (
    <>
      <ColorPicker format="rgba" value={value} onChange={onChange} />
      <Text>{value}</Text>
    </>
  );
}

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Demo />
    </MantineProvider>
  );
}
