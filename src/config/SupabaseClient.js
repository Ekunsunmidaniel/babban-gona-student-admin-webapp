import { createClient } from "@supabase/supabase-js";
import { defineConfig, loadEnv } from "vite";

const supabaseUrl = import.meta.env.VITE_SUPERBASE_URL;
const superbaseKey = import.meta.env.VITE_SUPERBASE_KEY;

if (!supabaseUrl) {
  throw new Error("supabaseUrl is required. Check your environment variables.");
}

const supabase = createClient(supabaseUrl, superbaseKey);
export default supabase;
