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
    await page.addStyleTag({
      content: `
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    `,
    });
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

    // await page.waitForLoadState("networkidle");

    await expect(
      page.getByRole("button", { name: "H L Henrique Lima" })
    ).toBeVisible();

    const firstPost = page.locator(".post-card >> a").first();
    const firstPostLink = await firstPost.getAttribute("href");
    await firstPost.click();

    await expect(page).toHaveURL(new RegExp(firstPostLink!));

    await page.waitForTimeout(500);
    await page.waitForSelector('[data-testid="comment-button"]', {
      state: "visible",
      timeout: 10000,
    });
    const commentButton = page.getByTestId("comment-button");
    await expect(commentButton).toBeAttached();
    await expect(commentButton).toBeVisible();
    await expect(commentButton).toBeEnabled();

    await commentButton.scrollIntoViewIfNeeded();
    await page.waitForTimeout(100);

    // Agora que está na posição correta, tente o clique
    try {
      await commentButton.click();
      console.log("✅ Click successful!");
    } catch (error) {
      if (error instanceof Error) {
        console.log("❌ Click failed:", error.message);
      }

      // Fallback para JavaScript click
      await commentButton.evaluate((button) =>
        (button as HTMLButtonElement).click()
      );
      console.log("✅ JavaScript click executed");
    }

    // Verifica se a caixa de comentários abriu
    await expect(page.getByTestId("comment-form")).toBeVisible();

    // const commentTextArea = page.getByTestId("comment-form");

    // await expect(commentTextArea).toBeVisible();
  });
});
