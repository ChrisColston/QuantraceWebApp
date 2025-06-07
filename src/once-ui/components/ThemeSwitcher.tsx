"use client";

import React, { forwardRef } from "react";
import { Row, useTheme, IconButton } from ".";

const ThemeSwitcher = forwardRef<HTMLDivElement, React.ComponentProps<typeof Row>>((flex, ref) => {
  const { theme, setTheme } = useTheme();

  return (
    <Row
      data-border="rounded"
      ref={ref}
      gap=""
      
      radius="full"
      {...flex}
    >
      
      <IconButton
        icon="dark"
        variant={theme === "dark" ? "primary" : "tertiary"}
        onClick={() => setTheme("dark")}
      />
      <IconButton
        icon="light"
        variant={theme === "light" ? "primary" : "tertiary"}
        onClick={() => setTheme("light")}
      />
    </Row>
  );
});

ThemeSwitcher.displayName = "ThemeSwitcher";
export { ThemeSwitcher };
