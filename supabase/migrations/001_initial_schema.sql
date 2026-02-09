-- PuffSense Initial Schema
-- Enums
create type user_role as enum ('admin', 'coach', 'parent', 'sailor');
create type team_type as enum ('club', 'family');
create type skill_level as enum ('beginner', 'intermediate', 'advanced', 'racing');
create type criteria_level as enum ('developing', 'proficient', 'advanced');
create type score_value as enum ('not_started', 'developing', 'proficient', 'advanced');
create type insight_type as enum ('focus_area', 'progression_readiness', 'session_recommendation', 'goal_nudge');
create type goal_status as enum ('active', 'completed', 'abandoned');
create type mood as enum ('great', 'good', 'okay', 'tough');
create type achievement_category as enum ('milestone', 'skill', 'promotion', 'streak');
create type recommendation_status as enum ('pending', 'approved', 'modified', 'dismissed');

-- Teams (clubs or family teams)
create table teams (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  type team_type not null default 'family',
  logo_url text,
  invite_code text unique,
  created_at timestamptz not null default now()
);

-- Profiles (extends auth.users)
create table profiles (
  id uuid primary key references auth.users on delete cascade,
  full_name text not null,
  email text not null,
  role user_role not null default 'parent',
  team_id uuid references teams on delete set null,
  is_independent_coach boolean not null default false,
  avatar_url text,
  created_at timestamptz not null default now()
);

-- Boat classes
create table boat_classes (
  id uuid primary key default gen_random_uuid(),
  team_id uuid not null references teams on delete cascade,
  name text not null,
  description text,
  skill_level skill_level not null default 'beginner',
  created_at timestamptz not null default now()
);

-- Rubrics
create table rubrics (
  id uuid primary key default gen_random_uuid(),
  team_id uuid not null references teams on delete cascade,
  boat_class_id uuid not null references boat_classes on delete cascade,
  name text not null,
  description text,
  created_by uuid not null references profiles on delete cascade,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

-- Rubric criteria
create table rubric_criteria (
  id uuid primary key default gen_random_uuid(),
  rubric_id uuid not null references rubrics on delete cascade,
  name text not null,
  description text,
  sort_order integer not null default 0,
  level_required criteria_level not null default 'proficient'
);

-- Sailor profiles
create table sailor_profiles (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references profiles on delete cascade,
  parent_id uuid references profiles on delete set null,
  current_boat_class_id uuid references boat_classes on delete set null,
  date_of_birth date,
  created_at timestamptz not null default now()
);

-- Sessions
create table sessions (
  id uuid primary key default gen_random_uuid(),
  team_id uuid not null references teams on delete cascade,
  coach_id uuid not null references profiles on delete cascade,
  boat_class_id uuid not null references boat_classes on delete cascade,
  date date not null default current_date,
  wind_speed_knots integer,
  wind_direction text,
  weather_conditions text,
  water_conditions text,
  notes text,
  created_at timestamptz not null default now()
);

-- Evaluations
create table evaluations (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references sessions on delete cascade,
  sailor_id uuid not null references sailor_profiles on delete cascade,
  coach_id uuid not null references profiles on delete cascade,
  overall_notes text,
  created_at timestamptz not null default now()
);

-- Evaluation scores
create table evaluation_scores (
  id uuid primary key default gen_random_uuid(),
  evaluation_id uuid not null references evaluations on delete cascade,
  rubric_criteria_id uuid not null references rubric_criteria on delete cascade,
  score score_value not null default 'not_started',
  notes text
);

-- AI insights
create table ai_insights (
  id uuid primary key default gen_random_uuid(),
  sailor_id uuid not null references sailor_profiles on delete cascade,
  rubric_id uuid references rubrics on delete set null,
  insight_type insight_type not null,
  content text not null,
  context_json jsonb,
  created_at timestamptz not null default now()
);

-- Sailor goals
create table sailor_goals (
  id uuid primary key default gen_random_uuid(),
  sailor_id uuid not null references sailor_profiles on delete cascade,
  title text not null,
  description text,
  rubric_criteria_id uuid references rubric_criteria on delete set null,
  target_date date,
  status goal_status not null default 'active',
  created_at timestamptz not null default now(),
  completed_at timestamptz
);

-- Journal entries
create table journal_entries (
  id uuid primary key default gen_random_uuid(),
  sailor_id uuid not null references sailor_profiles on delete cascade,
  session_id uuid references sessions on delete set null,
  date date not null default current_date,
  notes text not null,
  wind_estimate text,
  boat_class_id uuid references boat_classes on delete set null,
  drills text[],
  mood mood,
  created_at timestamptz not null default now()
);

-- Achievements
create table achievements (
  id uuid primary key default gen_random_uuid(),
  key text unique not null,
  name text not null,
  description text not null,
  icon_url text,
  category achievement_category not null,
  criteria_json jsonb not null default '{}'
);

-- Sailor achievements
create table sailor_achievements (
  id uuid primary key default gen_random_uuid(),
  sailor_id uuid not null references sailor_profiles on delete cascade,
  achievement_id uuid not null references achievements on delete cascade,
  earned_at timestamptz not null default now(),
  unique (sailor_id, achievement_id)
);

-- Recommendation requests
create table recommendation_requests (
  id uuid primary key default gen_random_uuid(),
  sailor_id uuid not null references sailor_profiles on delete cascade,
  ai_insight_id uuid not null references ai_insights on delete cascade,
  requested_by uuid not null references profiles on delete cascade,
  sent_to uuid not null references profiles on delete cascade,
  status recommendation_status not null default 'pending',
  response_notes text,
  created_at timestamptz not null default now(),
  responded_at timestamptz
);

-- Indexes
create index idx_profiles_team on profiles (team_id);
create index idx_boat_classes_team on boat_classes (team_id);
create index idx_rubrics_team on rubrics (team_id);
create index idx_rubrics_boat_class on rubrics (boat_class_id);
create index idx_rubric_criteria_rubric on rubric_criteria (rubric_id);
create index idx_sailor_profiles_profile on sailor_profiles (profile_id);
create index idx_sailor_profiles_parent on sailor_profiles (parent_id);
create index idx_sessions_team on sessions (team_id);
create index idx_sessions_coach on sessions (coach_id);
create index idx_evaluations_session on evaluations (session_id);
create index idx_evaluations_sailor on evaluations (sailor_id);
create index idx_evaluation_scores_evaluation on evaluation_scores (evaluation_id);
create index idx_ai_insights_sailor on ai_insights (sailor_id);
create index idx_sailor_goals_sailor on sailor_goals (sailor_id);
create index idx_journal_entries_sailor on journal_entries (sailor_id);
create index idx_sailor_achievements_sailor on sailor_achievements (sailor_id);
create index idx_recommendation_requests_sailor on recommendation_requests (sailor_id);

-- ============================================================
-- Row Level Security
-- ============================================================

alter table teams enable row level security;
alter table profiles enable row level security;
alter table boat_classes enable row level security;
alter table rubrics enable row level security;
alter table rubric_criteria enable row level security;
alter table sailor_profiles enable row level security;
alter table sessions enable row level security;
alter table evaluations enable row level security;
alter table evaluation_scores enable row level security;
alter table ai_insights enable row level security;
alter table sailor_goals enable row level security;
alter table journal_entries enable row level security;
alter table achievements enable row level security;
alter table sailor_achievements enable row level security;
alter table recommendation_requests enable row level security;

-- Helper: get current user's team_id
create or replace function auth.team_id()
returns uuid
language sql
stable
as $$
  select team_id from profiles where id = auth.uid()
$$;

-- Helper: get current user's role
create or replace function auth.user_role()
returns user_role
language sql
stable
as $$
  select role from profiles where id = auth.uid()
$$;

-- Helper: is current user an independent coach?
create or replace function auth.is_independent_coach()
returns boolean
language sql
stable
as $$
  select is_independent_coach from profiles where id = auth.uid()
$$;

-- Helper: can current user act as coach? (admin, coach, or independent parent)
create or replace function auth.can_coach()
returns boolean
language sql
stable
as $$
  select role in ('admin', 'coach') or is_independent_coach
  from profiles where id = auth.uid()
$$;

-- TEAMS
create policy "Users can view their own team"
  on teams for select
  using (id = auth.team_id());

create policy "Admins and independent coaches can update their team"
  on teams for update
  using (id = auth.team_id() and (auth.user_role() = 'admin' or auth.is_independent_coach()));

-- PROFILES
create policy "Users can view profiles in their team"
  on profiles for select
  using (team_id = auth.team_id());

create policy "Users can update their own profile"
  on profiles for update
  using (id = auth.uid());

create policy "Users can insert their own profile"
  on profiles for insert
  with check (id = auth.uid());

-- BOAT CLASSES
create policy "Users can view boat classes in their team"
  on boat_classes for select
  using (team_id = auth.team_id());

create policy "Admins and independent coaches can manage boat classes"
  on boat_classes for all
  using (team_id = auth.team_id() and (auth.user_role() = 'admin' or auth.is_independent_coach()));

-- RUBRICS
create policy "Users can view rubrics in their team"
  on rubrics for select
  using (team_id = auth.team_id());

create policy "Coaches can manage rubrics"
  on rubrics for all
  using (team_id = auth.team_id() and auth.can_coach());

-- RUBRIC CRITERIA
create policy "Users can view criteria for their team's rubrics"
  on rubric_criteria for select
  using (
    exists (
      select 1 from rubrics
      where rubrics.id = rubric_criteria.rubric_id
      and rubrics.team_id = auth.team_id()
    )
  );

create policy "Coaches can manage criteria"
  on rubric_criteria for all
  using (
    exists (
      select 1 from rubrics
      where rubrics.id = rubric_criteria.rubric_id
      and rubrics.team_id = auth.team_id()
      and auth.can_coach()
    )
  );

-- SAILOR PROFILES
create policy "Coaches see all sailors in team"
  on sailor_profiles for select
  using (
    exists (
      select 1 from profiles p
      where p.id = sailor_profiles.profile_id
      and p.team_id = auth.team_id()
    )
    and (auth.can_coach() or sailor_profiles.profile_id = auth.uid() or sailor_profiles.parent_id = auth.uid())
  );

create policy "Coaches and parents can create sailor profiles"
  on sailor_profiles for insert
  with check (auth.can_coach() or parent_id = auth.uid());

-- SESSIONS
create policy "Users can view sessions in their team"
  on sessions for select
  using (team_id = auth.team_id());

create policy "Coaches can create and manage sessions"
  on sessions for all
  using (team_id = auth.team_id() and auth.can_coach());

-- EVALUATIONS
create policy "Coaches see all evaluations in team"
  on evaluations for select
  using (
    exists (
      select 1 from sessions s
      where s.id = evaluations.session_id
      and s.team_id = auth.team_id()
    )
  );

create policy "Parents see evaluations for their sailors"
  on evaluations for select
  using (
    exists (
      select 1 from sailor_profiles sp
      where sp.id = evaluations.sailor_id
      and sp.parent_id = auth.uid()
    )
  );

create policy "Sailors see their own evaluations"
  on evaluations for select
  using (
    exists (
      select 1 from sailor_profiles sp
      where sp.id = evaluations.sailor_id
      and sp.profile_id = auth.uid()
    )
  );

create policy "Coaches can create evaluations"
  on evaluations for insert
  with check (auth.can_coach());

-- EVALUATION SCORES
create policy "Users can view scores they can see evaluations for"
  on evaluation_scores for select
  using (
    exists (
      select 1 from evaluations e
      where e.id = evaluation_scores.evaluation_id
    )
  );

create policy "Coaches can manage scores"
  on evaluation_scores for all
  using (auth.can_coach());

-- AI INSIGHTS
create policy "Coaches see all insights in team"
  on ai_insights for select
  using (
    exists (
      select 1 from sailor_profiles sp
      join profiles p on p.id = sp.profile_id
      where sp.id = ai_insights.sailor_id
      and p.team_id = auth.team_id()
      and auth.can_coach()
    )
  );

create policy "Parents see insights for their sailors"
  on ai_insights for select
  using (
    exists (
      select 1 from sailor_profiles sp
      where sp.id = ai_insights.sailor_id
      and sp.parent_id = auth.uid()
    )
  );

create policy "Sailors see their own insights"
  on ai_insights for select
  using (
    exists (
      select 1 from sailor_profiles sp
      where sp.id = ai_insights.sailor_id
      and sp.profile_id = auth.uid()
    )
  );

-- SAILOR GOALS
create policy "Sailors can manage their own goals"
  on sailor_goals for all
  using (
    exists (
      select 1 from sailor_profiles sp
      where sp.id = sailor_goals.sailor_id
      and sp.profile_id = auth.uid()
    )
  );

create policy "Parents and coaches can view goals"
  on sailor_goals for select
  using (
    exists (
      select 1 from sailor_profiles sp
      where sp.id = sailor_goals.sailor_id
      and (sp.parent_id = auth.uid() or auth.can_coach())
    )
  );

-- JOURNAL ENTRIES
create policy "Sailors can manage their own journal"
  on journal_entries for all
  using (
    exists (
      select 1 from sailor_profiles sp
      where sp.id = journal_entries.sailor_id
      and sp.profile_id = auth.uid()
    )
  );

create policy "Parents and coaches can view journal entries"
  on journal_entries for select
  using (
    exists (
      select 1 from sailor_profiles sp
      where sp.id = journal_entries.sailor_id
      and (sp.parent_id = auth.uid() or auth.can_coach())
    )
  );

-- ACHIEVEMENTS (read-only for everyone)
create policy "Anyone can view achievements"
  on achievements for select
  using (true);

-- SAILOR ACHIEVEMENTS
create policy "Users can view sailor achievements in their team"
  on sailor_achievements for select
  using (
    exists (
      select 1 from sailor_profiles sp
      join profiles p on p.id = sp.profile_id
      where sp.id = sailor_achievements.sailor_id
      and p.team_id = auth.team_id()
    )
  );

-- RECOMMENDATION REQUESTS
create policy "Sailors can create requests"
  on recommendation_requests for insert
  with check (requested_by = auth.uid());

create policy "Involved users can view requests"
  on recommendation_requests for select
  using (requested_by = auth.uid() or sent_to = auth.uid());

create policy "Recipients can update requests"
  on recommendation_requests for update
  using (sent_to = auth.uid());

-- ============================================================
-- Auto-create profile on signup
-- ============================================================
create or replace function handle_new_user()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
begin
  insert into public.profiles (id, full_name, email, role)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'full_name', ''),
    new.email,
    coalesce((new.raw_user_meta_data ->> 'role')::public.user_role, 'parent')
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function handle_new_user();
