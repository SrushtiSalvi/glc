export const api = "http://localhost:5000";

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

export const addPost = async (
  post_type,
  company_name,
  eligibility,
  position,
  joining,
  deadline,
  content,
  status
) => {
  try {
    const response = await fetch(`${api}/admin/post/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
      body: JSON.stringify({
        company_name: company_name,
        content: content,
        // created_on: created_on,
        deadline: deadline,
        eligibility: eligibility,
        joining: joining,
        position: position,
        post_type: post_type,
        status: status,
      }),
    });
    if (response.ok) {
      const result = await response.json();
      if (result) {
        return result;
      }
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};
