import { expect, Page } from "@playwright/test";

export async function clickButtonSafely(page: Page, buttonName: string) {
  const commentButton = page.getByRole("button", { name: buttonName });

  // Aguardar estar visível
  await expect(commentButton).toBeVisible();

  // Scroll para o elemento
  await commentButton.scrollIntoViewIfNeeded();

  // Aguardar estabilização
  await page.waitForTimeout(500);

  // Tentar clique normal primeiro
  try {
    await commentButton.click({ timeout: 5000 });
  } catch (error) {
    console.log("Normal click failed, trying alternatives...");

    // Alternativa 1: Força o clique
    try {
      await commentButton.click({ force: true });
    } catch (error2) {
      console.log("Force click failed, using JS click...");

      // Alternativa 2: JavaScript click
      await commentButton.evaluate((button: HTMLElement) => button.click());
    }
  }
}
