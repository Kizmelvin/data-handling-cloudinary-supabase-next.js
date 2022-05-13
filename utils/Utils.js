import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tffwkbmmbwsalvqgdviq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmZndrYm1tYndzYWx2cWdkdmlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyMjIzNDMsImV4cCI6MTk2Nzc5ODM0M30.IHptGzM6I15o-yGBHQTsm4zBoOhXncDgPvyN7f_vPJQ";

export const supabase = createClient(supabaseUrl, supabaseKey);
