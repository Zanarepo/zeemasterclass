// supabase-client.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://lulwaqefxlesjtevsfjj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1bHdhcWVmeGxlc2p0ZXZzZmpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwNDU3NzUsImV4cCI6MjA2NDYyMTc3NX0.uUXhWytwtO3X0LX5sjCYF9yzUc2yYz2Zgfr21hYqjQQ';
export const supabase = createClient(supabaseUrl, supabaseKey);
