import "@mantine/core/styles.css";

import { useState } from "react";
import { ColorPicker, Text, Container } from "@mantine/core";

export default function ColorPickerDemo() {
  const [value, onChange] = useState("rgba(47, 119, 150, 0.7)");

  return (
    <>
      <Container>
          <ColorPicker format="rgba" value={value} onChange={onChange} />
      </Container>
      <Text>{value}</Text>
    </>
  );
}
