#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const enquirer_1 = require("enquirer");
const main_1 = require("./main");
const prompt = new enquirer_1.Input({
    message: "Whats the directory folder you want to check?",
});
prompt
    .run()
    .then((answer) => {
    console.log("Your output:", answer.trim());
    main_1.executeBuildTest(answer.trim());
})
    .catch((e) => console.log(e));
//# sourceMappingURL=terminal.js.map