import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://imilfagteomkpujptirv.supabase.co';

const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltaWxmYWd0ZW9ta3B1anB0aXJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE3OTczMjQsImV4cCI6MjAyNzM3MzMyNH0.cyCkQEB5qpK3hMdSunoLaPyCwTBrdZTYd5K3jMu0Ppk';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
