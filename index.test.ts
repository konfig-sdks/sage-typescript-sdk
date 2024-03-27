import { Sage } from "./index";

describe("sage-typescript-sdk", () => {
    it("initialize client", async () => {
        const sage = new Sage({
            apiKey: "API_KEY",
        });
    });
});
