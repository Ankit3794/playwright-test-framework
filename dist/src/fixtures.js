"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
const tslib_1 = require("tslib");
const test_1 = require("@playwright/test");
exports.test = test_1.test.extend({
    page: (_a, use_1) => tslib_1.__awaiter(void 0, [_a, use_1], void 0, function* ({ page }, use) {
        yield page.goto('https://google.com');
        yield use(page);
    }),
});
//# sourceMappingURL=fixtures.js.map