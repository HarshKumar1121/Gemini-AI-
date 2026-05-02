const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";

export default async function runChat(prompt) {
  try {
    const res = await fetch(`${API_URL}/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Backend error");
    }

    return data.text;
  } catch (err) {
    console.error("Frontend fetch error:", err);
    return "⚠️ Gemini backend not responding.";
  }
}


// const API_URL = process.env.REACT_APP_API_URL;

// export default async function runChat(prompt) {
//   try {
//     const res = await fetch(`${API_URL}/chat`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ prompt }),
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       throw new Error(data.error || "Backend error");
//     }

//     return data.text;
//   } catch (err) {
//     console.error("Frontend fetch error:", err);
//     return "⚠️ Gemini backend not responding.";
//   }
// }


// const API_URL = process.env.REACT_APP_API_URL;

// export default async function runChat(prompt) {
//   try {
//     const res = await fetch(`${API_URL}/chat`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ prompt }),
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       throw new Error(data.error || "Backend error");
//     }

//     return data.text;
//   } catch (err) {
//     console.error("Frontend fetch error:", err);
//     return "⚠️ Gemini backend not responding.";
//   }
// }
