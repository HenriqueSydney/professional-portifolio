import { envVariables } from '@/env';
import { test, expect } from '@playwright/test';

test.describe('Navigation to Blog Post and Interactions', () => {
  test('it should be able to navigate to blog posts throught Home and Posts List', async ({ page }) => {
    await page.goto(envVariables.BASE_URL);

    await expect(page).toHaveTitle(/Sobre Mim/);
    await expect(page).toHaveTitle(/Projetos Relevantes/);
    await expect(page).toHaveTitle(/Cursos & Certificações/);
    await expect(page).toHaveTitle(/Minhas Habilidades/);
    await expect(page).toHaveTitle(/Experiência Profissional/);
    await expect(page).toHaveTitle(/Blog & Artigos/);

    await page.getByRole('link', {name: /blog/i}).click()

    await expect(page).toHaveURL(`${envVariables.BASE_URL}/blog`)

    const initialPosts = await page.locator('.post-card').allTextContents()

    await page.getByRole('button', {name: /DevOps/i }).click()

    await expect(page).toHaveURL(/category=DevOps/)

    const filteredPostsByCategory = await page.locator('.post-card').allTextContents()

    expect(filteredPostsByCategory).not.toEqual(initialPosts)

    for (const post of filteredPostsByCategory) {
      expect(post).toMatch(/DevOps/i)
    }

    const searchInput = await page.locator('input[type="text"]')
    await searchInput.fill('escalabilidade')
    await page.waitForEvent('console')
    await expect(page).toHaveURL(/category=DevOps.*query=escalabilidade/)

    const filteredPostsAfterQuery = await page.locator('.post-card').allTextContents()
    expect(filteredPostsAfterQuery).not.toEqual(filteredPostsByCategory)

    for (const post of filteredPostsAfterQuery) {
      expect(post).toMatch(/DevOps/i)
      expect(post).toMatch(/escalabilidade/i)
    }

    const firstPost = page.locator('.post-card >> a').first()
    const firstPostLink = await firstPost.getAttribute('href')
    await firstPost.click()
    
    await expect(page).toHaveURL(new RegExp(firstPostLink!))

    


  });
})


