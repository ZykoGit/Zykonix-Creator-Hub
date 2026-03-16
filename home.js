import { createClient } from "https://esm.sh/@supabase/supabase-js";

const supabase = createClient(
  "https://edyaswzqtwzczqjwnrtj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkeWFzd3pxdHd6Y3pxanducnRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI1ODE5NDcsImV4cCI6MjA4ODE1Nzk0N30.o8WlHRvrSZmfwjPGD-1Q0VEOwrHR7WBa92Uctp-xL_I"
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
