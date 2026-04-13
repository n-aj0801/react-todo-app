import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// アプリ全体で使う「窓口」をエクスポート
export const supabase = createClient(supabaseUrl, supabaseAnonKey)