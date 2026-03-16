import { createClient } from "https://esm.sh/@supabase/supabase-js";

const supabase = createClient(
  "https://edyaswzqtwzczqjwnrtj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkeWFzd3pxdHd6Y3pxanducnRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI1ODE5NDcsImV4cCI6MjA4ODE1Nzk0N30.o8WlHRvrSZmfwjPGD-1Q0VEOwrHR7WBa92Uctp-xL_I"
);

// LOGIN
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      alert(error.message);
      return;
    }

    window.location.href = "/";
  });
}

// SIGNUP
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const username = document.getElementById("username").value;

    const { data, error } = await supabase.auth.signUp({
      email,
      password
    });

    if (error) {
      alert(error.message);
      return;
    }

    // Create profile row
    await supabase.from("profiles").insert({
      id: data.user.id,
      username
    });

    window.location.href = "/";
  });
}
