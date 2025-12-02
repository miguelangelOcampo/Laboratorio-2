function handleError(error) {
  console.error('API Error:', error.message);
  return { success: false, error: error.message };
}

async function fetchData(url) {
  try {
    const response = await fetch(url);
    return { success: true, data: await response.json() };
  } catch (error) {
    return handleError(error);
  }
}

module.exports = { fetchData };
