#!/usr/bin/env node

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Input } from "enquirer";
import { executeBuildTest } from "./main";

const prompt = new Input({
  message: "Whats the directory folder you want to check?",
});

prompt
  .run()
  .then((answer: string) => {
    console.log("Your output:", answer.trim());
    executeBuildTest(answer.trim());
  })
  .catch((e: Error) => console.log(e));
