import { assert } from "chai";
import { add } from "../../src/ts/util"

describe("Index", () => {
    it("trivial pass", () => {
        assert.equal(add(1,2), 3);
    });
}); 