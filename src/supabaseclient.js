import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hvuqyqrgnljfajyytudt.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2dXF5cXJnbmxqZmFqeXl0dWR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcwNzMyNjksImV4cCI6MjAzMjY0OTI2OX0.kwK5QFAuckf-TYWUHtF3KJyXTuCLsQWc1ySaPd7gjOE";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
