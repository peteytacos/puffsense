export type UserRole = "admin" | "coach" | "parent" | "sailor";
export type TeamType = "club" | "family";
export type SkillLevel = "beginner" | "intermediate" | "advanced" | "racing";
export type CriteriaLevel = "developing" | "proficient" | "advanced";
export type ScoreValue = "not_started" | "developing" | "proficient" | "advanced";
export type InsightType = "focus_area" | "progression_readiness" | "session_recommendation" | "goal_nudge";
export type GoalStatus = "active" | "completed" | "abandoned";
export type Mood = "great" | "good" | "okay" | "tough";
export type AchievementCategory = "milestone" | "skill" | "promotion" | "streak";
export type RecommendationStatus = "pending" | "approved" | "modified" | "dismissed";

export interface Database {
  public: {
    Tables: {
      teams: {
        Row: {
          id: string;
          name: string;
          type: TeamType;
          logo_url: string | null;
          invite_code: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          type: TeamType;
          logo_url?: string | null;
          invite_code?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          type?: TeamType;
          logo_url?: string | null;
          invite_code?: string | null;
          created_at?: string;
        };
      };
      profiles: {
        Row: {
          id: string;
          full_name: string;
          email: string;
          role: UserRole;
          team_id: string | null;
          is_independent_coach: boolean;
          avatar_url: string | null;
          created_at: string;
        };
        Insert: {
          id: string;
          full_name: string;
          email: string;
          role: UserRole;
          team_id?: string | null;
          is_independent_coach?: boolean;
          avatar_url?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          full_name?: string;
          email?: string;
          role?: UserRole;
          team_id?: string | null;
          is_independent_coach?: boolean;
          avatar_url?: string | null;
          created_at?: string;
        };
      };
      boat_classes: {
        Row: {
          id: string;
          team_id: string;
          name: string;
          description: string | null;
          skill_level: SkillLevel;
          created_at: string;
        };
        Insert: {
          id?: string;
          team_id: string;
          name: string;
          description?: string | null;
          skill_level: SkillLevel;
          created_at?: string;
        };
        Update: {
          id?: string;
          team_id?: string;
          name?: string;
          description?: string | null;
          skill_level?: SkillLevel;
          created_at?: string;
        };
      };
      rubrics: {
        Row: {
          id: string;
          team_id: string;
          boat_class_id: string;
          name: string;
          description: string | null;
          created_by: string;
          is_active: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          team_id: string;
          boat_class_id: string;
          name: string;
          description?: string | null;
          created_by: string;
          is_active?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          team_id?: string;
          boat_class_id?: string;
          name?: string;
          description?: string | null;
          created_by?: string;
          is_active?: boolean;
          created_at?: string;
        };
      };
      rubric_criteria: {
        Row: {
          id: string;
          rubric_id: string;
          name: string;
          description: string | null;
          sort_order: number;
          level_required: CriteriaLevel;
        };
        Insert: {
          id?: string;
          rubric_id: string;
          name: string;
          description?: string | null;
          sort_order?: number;
          level_required: CriteriaLevel;
        };
        Update: {
          id?: string;
          rubric_id?: string;
          name?: string;
          description?: string | null;
          sort_order?: number;
          level_required?: CriteriaLevel;
        };
      };
      sailor_profiles: {
        Row: {
          id: string;
          profile_id: string;
          parent_id: string | null;
          current_boat_class_id: string | null;
          date_of_birth: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          profile_id: string;
          parent_id?: string | null;
          current_boat_class_id?: string | null;
          date_of_birth?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          profile_id?: string;
          parent_id?: string | null;
          current_boat_class_id?: string | null;
          date_of_birth?: string | null;
          created_at?: string;
        };
      };
      sessions: {
        Row: {
          id: string;
          team_id: string;
          coach_id: string;
          boat_class_id: string;
          date: string;
          wind_speed_knots: number | null;
          wind_direction: string | null;
          weather_conditions: string | null;
          water_conditions: string | null;
          notes: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          team_id: string;
          coach_id: string;
          boat_class_id: string;
          date: string;
          wind_speed_knots?: number | null;
          wind_direction?: string | null;
          weather_conditions?: string | null;
          water_conditions?: string | null;
          notes?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          team_id?: string;
          coach_id?: string;
          boat_class_id?: string;
          date?: string;
          wind_speed_knots?: number | null;
          wind_direction?: string | null;
          weather_conditions?: string | null;
          water_conditions?: string | null;
          notes?: string | null;
          created_at?: string;
        };
      };
      evaluations: {
        Row: {
          id: string;
          session_id: string;
          sailor_id: string;
          coach_id: string;
          overall_notes: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          session_id: string;
          sailor_id: string;
          coach_id: string;
          overall_notes?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          session_id?: string;
          sailor_id?: string;
          coach_id?: string;
          overall_notes?: string | null;
          created_at?: string;
        };
      };
      evaluation_scores: {
        Row: {
          id: string;
          evaluation_id: string;
          rubric_criteria_id: string;
          score: ScoreValue;
          notes: string | null;
        };
        Insert: {
          id?: string;
          evaluation_id: string;
          rubric_criteria_id: string;
          score: ScoreValue;
          notes?: string | null;
        };
        Update: {
          id?: string;
          evaluation_id?: string;
          rubric_criteria_id?: string;
          score?: ScoreValue;
          notes?: string | null;
        };
      };
      ai_insights: {
        Row: {
          id: string;
          sailor_id: string;
          rubric_id: string | null;
          insight_type: InsightType;
          content: string;
          context_json: Record<string, unknown> | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          sailor_id: string;
          rubric_id?: string | null;
          insight_type: InsightType;
          content: string;
          context_json?: Record<string, unknown> | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          sailor_id?: string;
          rubric_id?: string | null;
          insight_type?: InsightType;
          content?: string;
          context_json?: Record<string, unknown> | null;
          created_at?: string;
        };
      };
      sailor_goals: {
        Row: {
          id: string;
          sailor_id: string;
          title: string;
          description: string | null;
          rubric_criteria_id: string | null;
          target_date: string | null;
          status: GoalStatus;
          created_at: string;
          completed_at: string | null;
        };
        Insert: {
          id?: string;
          sailor_id: string;
          title: string;
          description?: string | null;
          rubric_criteria_id?: string | null;
          target_date?: string | null;
          status?: GoalStatus;
          created_at?: string;
          completed_at?: string | null;
        };
        Update: {
          id?: string;
          sailor_id?: string;
          title?: string;
          description?: string | null;
          rubric_criteria_id?: string | null;
          target_date?: string | null;
          status?: GoalStatus;
          created_at?: string;
          completed_at?: string | null;
        };
      };
      journal_entries: {
        Row: {
          id: string;
          sailor_id: string;
          session_id: string | null;
          date: string;
          notes: string;
          wind_estimate: string | null;
          boat_class_id: string | null;
          drills: string[] | null;
          mood: Mood | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          sailor_id: string;
          session_id?: string | null;
          date: string;
          notes: string;
          wind_estimate?: string | null;
          boat_class_id?: string | null;
          drills?: string[] | null;
          mood?: Mood | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          sailor_id?: string;
          session_id?: string | null;
          date?: string;
          notes?: string;
          wind_estimate?: string | null;
          boat_class_id?: string | null;
          drills?: string[] | null;
          mood?: Mood | null;
          created_at?: string;
        };
      };
      achievements: {
        Row: {
          id: string;
          key: string;
          name: string;
          description: string;
          icon_url: string | null;
          category: AchievementCategory;
          criteria_json: Record<string, unknown>;
        };
        Insert: {
          id?: string;
          key: string;
          name: string;
          description: string;
          icon_url?: string | null;
          category: AchievementCategory;
          criteria_json: Record<string, unknown>;
        };
        Update: {
          id?: string;
          key?: string;
          name?: string;
          description?: string;
          icon_url?: string | null;
          category?: AchievementCategory;
          criteria_json?: Record<string, unknown>;
        };
      };
      sailor_achievements: {
        Row: {
          id: string;
          sailor_id: string;
          achievement_id: string;
          earned_at: string;
        };
        Insert: {
          id?: string;
          sailor_id: string;
          achievement_id: string;
          earned_at?: string;
        };
        Update: {
          id?: string;
          sailor_id?: string;
          achievement_id?: string;
          earned_at?: string;
        };
      };
      recommendation_requests: {
        Row: {
          id: string;
          sailor_id: string;
          ai_insight_id: string;
          requested_by: string;
          sent_to: string;
          status: RecommendationStatus;
          response_notes: string | null;
          created_at: string;
          responded_at: string | null;
        };
        Insert: {
          id?: string;
          sailor_id: string;
          ai_insight_id: string;
          requested_by: string;
          sent_to: string;
          status?: RecommendationStatus;
          response_notes?: string | null;
          created_at?: string;
          responded_at?: string | null;
        };
        Update: {
          id?: string;
          sailor_id?: string;
          ai_insight_id?: string;
          requested_by?: string;
          sent_to?: string;
          status?: RecommendationStatus;
          response_notes?: string | null;
          created_at?: string;
          responded_at?: string | null;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: {
      user_role: UserRole;
      team_type: TeamType;
      skill_level: SkillLevel;
      criteria_level: CriteriaLevel;
      score_value: ScoreValue;
      insight_type: InsightType;
      goal_status: GoalStatus;
      mood: Mood;
      achievement_category: AchievementCategory;
      recommendation_status: RecommendationStatus;
    };
  };
}
