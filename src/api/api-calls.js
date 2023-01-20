export const getCandidates = async () => {
  let resArray = [];
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/candidates`);
    resArray = await res.json();
  } catch (err) {
    console.error(err);
  }

  return resArray;
};

export const createCandidate = async (answers) => {
  let res = "";
  try {
    res = await fetch(`${process.env.REACT_APP_API_URL}/candidates/new`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(answers),
    });
  } catch (err) {
    console.error(err);
  }

  return res;
};

export const updateCandidate = async (id, data) => {
  let res = "";
  try {
    res = await fetch(`${process.env.REACT_APP_API_URL}/candidates/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch (err) {
    console.error(err);
  }
  return res;
};

export const deleteCandidate = async (id) => {
  let res = "";
  try {
    res = await fetch(`${process.env.REACT_APP_API_URL}/candidates/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
  }

  return res;
};
