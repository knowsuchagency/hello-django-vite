import "@mantine/core/styles.css";

import { useState } from "react";
import { ColorPicker, Text } from "@mantine/core";

export default function ColorPickerDemo() {
  const [value, onChange] = useState("rgba(47, 119, 150, 0.7)");

  return (
    <>
      <ColorPicker format="rgba" value={value} onChange={onChange} />
      <Text>{value}</Text>
    </>
  );
}
