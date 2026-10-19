// Paste your values from Supabase: Project Settings -> API.
// The anon key is safe to be public. NEVER paste the service_role key here.
const SUPABASE_URL = "https://rvngglgbhvbffxkkobxd.supabase.co/rest/v1/";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2bmdnbGdiaHZiZmZ4a2tvYnhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIzOTYwODgsImV4cCI6MjEwNzk3MjA4OH0.GSVZPVbXxoac4dUfNzC7jFW1qAtF73hqq-ZEluGNCsM
";

const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
/Users/vanshika/Desktop/config.js
