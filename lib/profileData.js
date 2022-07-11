export async function getProfileData() {
  const response = await fetch(
    "https://mockend.com/Andrew-Wichmann/Fundraiser-Site/users/1"
  );

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
  return response.json();
}
