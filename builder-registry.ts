"use client";
import { Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});


import CodeSnippet from "@/components/CodeSnippet";

Builder.registerComponent(CodeSnippet, {
  name: "CodeSnippet",
  inputs: [
    {
      name: "text",
      type: "longText",
      defaultValue: "Hello, World!",
    },
    {
      name: "language",
      type: "string",
      defaultValue: "javascript",
    },
    {
      name: "showLineNumbers",
      type: "boolean",
      defaultValue: true,
    },
    {
      name: "theme",
      type: "string",
      defaultValue: "material",
    },
    {
      name: "codeBlock",
      type: "boolean",
      defaultValue: true,
    }
  ],
});
