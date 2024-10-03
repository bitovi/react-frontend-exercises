import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "./Button";

describe("temp", () => {
    it("should", () => {
        render(<Button />);

        expect(screen.getByRole("button")).toBeDefined();
    });
});
