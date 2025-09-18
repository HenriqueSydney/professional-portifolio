import { envVariables } from "@/env";
import { test, expect } from "@playwright/test";
import { clickButtonSafely } from "./utils/clickButtonSafely";

test.describe("Navigation to Blog Post and Interactions", () => {
  test("unlogged user should be able to navigate to blog posts throught Home and Posts List", async ({
    page,
  }) => {
    await page.goto(envVariables.BASE_URL);

    await expect(page.getByRole("heading", { name: "About Me" })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Relevant Projects" })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Courses & Certifications" })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "My Skills" })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Professional Experience" })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Blog & Articles" })
    ).toBeVisible();

    await page
      .getByRole("banner")
      .getByRole("button", { name: "Blog" })
      .click();

    await expect(page).toHaveURL(`${envVariables.BASE_URL}/en/blog`);

    const initialPosts = await page.locator(".post-card").allTextContents();

    await page.getByRole("button", { name: /DevOps/i }).click();

    await expect(page).toHaveURL(/category=DevOps/);

    const filteredPostsByCategory = await page
      .locator(".post-card")
      .allTextContents();

    expect(filteredPostsByCategory).not.toEqual(initialPosts);

    for (const post of filteredPostsByCategory) {
      expect(post).toMatch(/DevOps/i);
    }

    const searchInput = await page.locator('input[type="text"]');
    await searchInput.fill("How does it work");
    await page.waitForURL(
      /category=DevOps.*query=How(\+|%20)does(\+|%20)it(\+|%20)work/
    );
    await expect(page).toHaveURL(
      /category=DevOps.*query=How(\+|%20)does(\+|%20)it(\+|%20)work/
    );

    const filteredPostsAfterQuery = await page
      .locator(".post-card")
      .allTextContents();
    // expect(filteredPostsAfterQuery).not.toEqual(filteredPostsByCategory);

    for (const post of filteredPostsAfterQuery) {
      expect(post).toMatch(/DevOps/i);
      expect(post).toMatch(/How does it work/i);
    }

    const firstPost = page.locator(".post-card >> a").first();
    const firstPostLink = await firstPost.getAttribute("href");
    await firstPost.click();

    await expect(page).toHaveURL(new RegExp(firstPostLink!));

    await expect(
      page.getByText("DevOps", { exact: true }).first()
    ).toBeVisible();

    await expect(page.getByTestId("post-likes")).toBeVisible();
    await expect(page.getByTestId("post-views")).toBeVisible();
    await expect(page.getByTestId("post-comments-total")).toBeVisible();
    await expect(page.getByTestId("post-publication-date")).toBeVisible();
    await expect(page.getByTestId("post-title")).toBeVisible();
    await expect(page.getByTestId("post-tags-container")).toBeVisible();
    await expect(page.getByTestId("post-content")).toBeVisible();
    await expect(page.getByText("To comment, please sign in.")).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Share" }).nth(1)
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Comment" }).nth(1)
    ).not.toBeVisible();
  });

  test("logged user should be able to navigate to blog post and comment a post", async ({
    page,
  }) => {
    // Seu mock aqui
    await page.route("**/api/auth/session", (route) => {
      console.log("🔥 MOCK HIT!");
      route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          user: { name: "Henrique Lima", email: "henrique@example.com" },
          expires: new Date(Date.now() + 1000 * 60 * 60).toISOString(),
        }),
      });
    });

    await page.goto(`${envVariables.BASE_URL}/en/blog`);

    await page.waitForLoadState("networkidle");

    await expect(
      page.getByRole("button", { name: "H L Henrique Lima" })
    ).toBeVisible();

    const firstPost = page.locator(".post-card >> a").first();
    const firstPostLink = await firstPost.getAttribute("href");
    await firstPost.click();

    await expect(page).toHaveURL(new RegExp(firstPostLink!));

    const commentButton = page.getByRole("button", { name: "Comment" });

    await expect(commentButton).toBeVisible();

    await clickButtonSafely(page, "Comment");

    const commentBox = page;
  });
});
