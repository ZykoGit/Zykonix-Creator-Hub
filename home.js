import { createClient } from "https://esm.sh/@supabase/supabase-js";

const supabase = createClient(
  "https://edyaswzqtwzczqjwnrtj.supabase.co",
  "YOUR_SUPABASE_ANON_KEY"
);

// Check session
async function loadUser() {
  const { data } = await supabase.auth.getUser();

  if (!data.user) {
    window.location.href = "login/";
    return;
  }

  document.getElementById("welcome").textContent =
    "Welcome, " + (data.user.email || "Creator");
}

loadUser();

// Logout
document.getElementById("logoutBtn").addEventListener("click", async () => {
  await supabase.auth.signOut();
  window.location.href = "login/";
});

// Connect YouTube
document.getElementById("connectYoutube").addEventListener("click", () => {
  // This will redirect to your OAuth start function
  window.location.href = "https://edyaswzqtwzczqjwnrtj.supabase.co/functions/v1/youtube-start";
});
