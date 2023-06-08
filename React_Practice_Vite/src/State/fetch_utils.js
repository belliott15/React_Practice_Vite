export async function fetchCards() {
  const response = await fetch("https://api.magicthegathering.io/v1/cards", {
    method: "GET",
  });
  return response.status === 200 ? response.json() : null;
}

export async function fetchCardTypes() {
  const response = await fetch("https://api.magicthegathering.io/v1/types", {
    method: "GET",
  });
  return response.status === 200 ? response.json() : null;
}
