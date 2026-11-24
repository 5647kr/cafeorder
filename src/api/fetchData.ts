export async function fetchMenus(): Promise<Menus[]> {
  try {
    const response = await fetch("http://localhost:5173/api/items");

    if (!response.ok) throw new Error("fetch에 실패했습니다.");

    const data: Menus[] = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
