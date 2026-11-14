CREATE TABLE public.mission_control_applications (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 created_at timestamptz NOT NULL DEFAULT now(),
 name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100),
 company text NOT NULL CHECK (char_length(company) BETWEEN 2 AND 150),
 team_size text NOT NULL CHECK (team_size IN ('solo','2-5','6-15','16-50','51+')),
 bottleneck text NOT NULL CHECK (char_length(bottleneck) BETWEEN 10 AND 1000),
 whatsapp text NOT NULL CHECK (whatsapp ~ '^[0-9]{10,15}$'),
 waitlist_opt_in boolean NOT NULL DEFAULT false,
 status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','approved','waitlisted','declined'))
);
GRANT ALL ON public.mission_control_applications TO service_role;
ALTER TABLE public.mission_control_applications ENABLE ROW LEVEL SECURITY;