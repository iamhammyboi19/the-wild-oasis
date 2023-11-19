import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://bhjgzletbebyrtexvytr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJoamd6bGV0YmVieXJ0ZXh2eXRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc4MjIwODAsImV4cCI6MjAxMzM5ODA4MH0.3NFUL6aB2EKOqzgNKXxIflc8MmMSb3z5gv7UNE_BbWg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
