System.config({
  baseURL: "/",
  transpiler: "ts",
  typescriptOptions: {
    "module": "system",
    "noImplicitAny": false,
    "typeCheck": false,
    "tsconfig": true
  },
  paths: {
    "npm:*": "jspm_packages/npm/*",
    "github:*": "jspm_packages/github/*"
  },

  map: {
    "ts": "github:frankwallis/plugin-typescript@4.0.1",
    "typescript": "npm:typescript@1.8.2",
    "github:frankwallis/plugin-typescript@4.0.1": {
      "typescript": "npm:typescript@1.8.2"
    }
  }
});
