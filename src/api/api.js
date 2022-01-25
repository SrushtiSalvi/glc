export const api = "http://localhost:5002";

export const getAllVacancyPosts = async (pageNumber, pageSize) => {
  try {
    const response = await fetch(
      `${api}/post/vacancy?page=${pageNumber}&page_size=${pageSize}`,
      {
        method: "GET",
      }
    );

    if (response.ok) {
      const result = await response.json();
      if (result) {
        return result;
      }
    }
  } catch (err) {
    throw err;
  }
};

export const getAllNoticePosts = async (pageNumber, pageSize) => {
  try {
    const response = await fetch(
      `${api}/post/notice?page=${pageNumber}&page_size=${pageSize}`,
      {
        method: "GET",
      }
    );

    if (response.ok) {
      const result = await response.json();
      if (result) {
        return result;
      }
    }
  } catch (err) {
    throw err;
  }
};

export const getAllBlogPosts = async (pageNumber, pageSize) => {
  try {
    const response = await fetch(
      `${api}/post/blog?page=${pageNumber}&page_size=${pageSize}`,
      {
        method: "GET",
      }
    );
    if (response.ok) {
      const result = await response.json();
      if (result) {
        return result;
      }
    }
  } catch (err) {
    throw err;
  }
};

export const adminLogin = async (username, password) => {
  try {
    const response = await fetch(`${api}/admin/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    if (response.ok) {
      const result = await response.json();
      if (result) {
        return result;
      }
    }
  } catch (err) {
    throw err;
  }
};
