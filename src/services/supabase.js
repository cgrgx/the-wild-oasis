import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://qymmgzewarskiihruzwm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5bW1nemV3YXJza2lpaHJ1endtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMxNzE2NDksImV4cCI6MjAxODc0NzY0OX0.6xPLF3cNNghd8fSjLf6JQxsDTCQpwJQvNIvfiP5LudQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
