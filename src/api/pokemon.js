import { API_HOST } from "../utils/constants";

export async function getPokemonsApi() {
  try {
    const url = `${API_HOST}/pokemon?limit=500&offset=0`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetailsByUrlApi(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
