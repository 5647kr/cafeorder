const baseUrl = "http://localhost:5173/api/";

export async function fetchMenus(): Promise<Menus[]> {
  try {
    const response = await fetch(`${baseUrl}items`);

    if (!response.ok) throw new Error("fetch에 실패했습니다.");

    const data: Menus[] = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function fetchMenu(id: string): Promise<Menu> {
  try {
    const response = await fetch(`${baseUrl}items/${id}`);

    if (!response.ok) throw new Error("상품 조회에 실패했습니다.");

    const data: Menu = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function fetchOptions(): Promise<Options[]> {
  try {
    const response = await fetch(`${baseUrl}options`);

    if (!response.ok) throw new Error("옵션 조회에 실패했습니다.");

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
