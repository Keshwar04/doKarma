export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      campaign_details: {
        Row: {
          active_campaign: string | null
          admin_fee: number | null
          amount_type: string
          campaign_name: string
          category: string
          city: string
          cover_image: string | null
          created_at: string
          currency: string | null
          description: string
          end_date: string | null
          fixed_amount: number | null
          fundraise_type: string
          id: string
          is_end_date: boolean | null
          is_priority: boolean | null
          is_tax_benefit: boolean | null
          is_urgent: boolean
          is_verified: boolean | null
          minimum_amount: number | null
          modified_at: string | null
          no_of_donations: number
          owner: string
          progress_percentage: number
          received_amount: number
          start_date: string | null
          status: string | null
          target_amount: number
          thankyou_note: string | null
        }
        Insert: {
          active_campaign?: string | null
          admin_fee?: number | null
          amount_type?: string
          campaign_name: string
          category: string
          city: string
          cover_image?: string | null
          created_at?: string
          currency?: string | null
          description: string
          end_date?: string | null
          fixed_amount?: number | null
          fundraise_type?: string
          id?: string
          is_end_date?: boolean | null
          is_priority?: boolean | null
          is_tax_benefit?: boolean | null
          is_urgent?: boolean
          is_verified?: boolean | null
          minimum_amount?: number | null
          modified_at?: string | null
          no_of_donations?: number
          owner: string
          progress_percentage?: number
          received_amount?: number
          start_date?: string | null
          status?: string | null
          target_amount: number
          thankyou_note?: string | null
        }
        Update: {
          active_campaign?: string | null
          admin_fee?: number | null
          amount_type?: string
          campaign_name?: string
          category?: string
          city?: string
          cover_image?: string | null
          created_at?: string
          currency?: string | null
          description?: string
          end_date?: string | null
          fixed_amount?: number | null
          fundraise_type?: string
          id?: string
          is_end_date?: boolean | null
          is_priority?: boolean | null
          is_tax_benefit?: boolean | null
          is_urgent?: boolean
          is_verified?: boolean | null
          minimum_amount?: number | null
          modified_at?: string | null
          no_of_donations?: number
          owner?: string
          progress_percentage?: number
          received_amount?: number
          start_date?: string | null
          status?: string | null
          target_amount?: number
          thankyou_note?: string | null
        }
        Relationships: []
      }
      donation_transaction: {
        Row: {
          billing_address: string | null
          campaign: string | null
          created_at: string
          donor: string | null
          donor_name: string | null
          email: string | null
          id: string
          is_anonymous: boolean | null
          is_indian: boolean | null
          is_tax_exempted: boolean | null
          mobile: number | null
          pan: string | null
          payment_status: Database["public"]["Enums"]["payment_status_type"]
          pincode: number | null
          razorpay_order_id: string
          sms_wa_opted: boolean | null
          tip_amt: number | null
          tip_percentage: number | null
          total_amount: number
          trust_id: string | null
        }
        Insert: {
          billing_address?: string | null
          campaign?: string | null
          created_at?: string
          donor?: string | null
          donor_name?: string | null
          email?: string | null
          id?: string
          is_anonymous?: boolean | null
          is_indian?: boolean | null
          is_tax_exempted?: boolean | null
          mobile?: number | null
          pan?: string | null
          payment_status?: Database["public"]["Enums"]["payment_status_type"]
          pincode?: number | null
          razorpay_order_id: string
          sms_wa_opted?: boolean | null
          tip_amt?: number | null
          tip_percentage?: number | null
          total_amount?: number
          trust_id?: string | null
        }
        Update: {
          billing_address?: string | null
          campaign?: string | null
          created_at?: string
          donor?: string | null
          donor_name?: string | null
          email?: string | null
          id?: string
          is_anonymous?: boolean | null
          is_indian?: boolean | null
          is_tax_exempted?: boolean | null
          mobile?: number | null
          pan?: string | null
          payment_status?: Database["public"]["Enums"]["payment_status_type"]
          pincode?: number | null
          razorpay_order_id?: string
          sms_wa_opted?: boolean | null
          tip_amt?: number | null
          tip_percentage?: number | null
          total_amount?: number
          trust_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "donation_transaction_campaign_fkey"
            columns: ["campaign"]
            isOneToOne: false
            referencedRelation: "campaign_details"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "donation_transaction_donor_fkey"
            columns: ["donor"]
            isOneToOne: false
            referencedRelation: "master_donor"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "donation_transaction_trust_id_fkey"
            columns: ["trust_id"]
            isOneToOne: false
            referencedRelation: "master_trust_foundation"
            referencedColumns: ["id"]
          },
        ]
      }
      master_donor: {
        Row: {
          created_at: string
          doa: string | null
          dob: string | null
          donation_name: string | null
          email: string | null
          gender: boolean | null
          id: string
          last_login: string | null
          location: string | null
          mobile_no: number | null
          pan: string | null
          password: string | null
          profile_pic: string | null
          user_id: string | null
          user_name: string | null
        }
        Insert: {
          created_at?: string
          doa?: string | null
          dob?: string | null
          donation_name?: string | null
          email?: string | null
          gender?: boolean | null
          id: string
          last_login?: string | null
          location?: string | null
          mobile_no?: number | null
          pan?: string | null
          password?: string | null
          profile_pic?: string | null
          user_id?: string | null
          user_name?: string | null
        }
        Update: {
          created_at?: string
          doa?: string | null
          dob?: string | null
          donation_name?: string | null
          email?: string | null
          gender?: boolean | null
          id?: string
          last_login?: string | null
          location?: string | null
          mobile_no?: number | null
          pan?: string | null
          password?: string | null
          profile_pic?: string | null
          user_id?: string | null
          user_name?: string | null
        }
        Relationships: []
      }
      master_trust_foundation: {
        Row: {
          aadhar: string | null
          about_trust: string | null
          activity: string | null
          activity_reports: string | null
          brand_name: string | null
          certificate_10_23: string | null
          certificate_12a_12ab: string | null
          certificate_80g: string | null
          created_at: string
          creator: string | null
          din_number: string | null
          dob: string | null
          email: string
          fcra_annual_return: string | null
          fcra_no: string | null
          google_location: string | null
          id: string
          incometax_case_details: string | null
          is_fcra: boolean | null
          is_incometax_case: boolean | null
          is_suite: boolean | null
          it_copy: string | null
          mobile_no: string | null
          modified_at: string | null
          occupation: string | null
          pan: string | null
          password: string | null
          social_exp: number | null
          suite_details: string | null
          terms_and_conditions: boolean | null
          trust_name: string | null
          trustee_name: string | null
          username: string | null
          verified: boolean | null
        }
        Insert: {
          aadhar?: string | null
          about_trust?: string | null
          activity?: string | null
          activity_reports?: string | null
          brand_name?: string | null
          certificate_10_23?: string | null
          certificate_12a_12ab?: string | null
          certificate_80g?: string | null
          created_at: string
          creator?: string | null
          din_number?: string | null
          dob?: string | null
          email: string
          fcra_annual_return?: string | null
          fcra_no?: string | null
          google_location?: string | null
          id?: string
          incometax_case_details?: string | null
          is_fcra?: boolean | null
          is_incometax_case?: boolean | null
          is_suite?: boolean | null
          it_copy?: string | null
          mobile_no?: string | null
          modified_at?: string | null
          occupation?: string | null
          pan?: string | null
          password?: string | null
          social_exp?: number | null
          suite_details?: string | null
          terms_and_conditions?: boolean | null
          trust_name?: string | null
          trustee_name?: string | null
          username?: string | null
          verified?: boolean | null
        }
        Update: {
          aadhar?: string | null
          about_trust?: string | null
          activity?: string | null
          activity_reports?: string | null
          brand_name?: string | null
          certificate_10_23?: string | null
          certificate_12a_12ab?: string | null
          certificate_80g?: string | null
          created_at?: string
          creator?: string | null
          din_number?: string | null
          dob?: string | null
          email?: string
          fcra_annual_return?: string | null
          fcra_no?: string | null
          google_location?: string | null
          id?: string
          incometax_case_details?: string | null
          is_fcra?: boolean | null
          is_incometax_case?: boolean | null
          is_suite?: boolean | null
          it_copy?: string | null
          mobile_no?: string | null
          modified_at?: string | null
          occupation?: string | null
          pan?: string | null
          password?: string | null
          social_exp?: number | null
          suite_details?: string | null
          terms_and_conditions?: boolean | null
          trust_name?: string | null
          trustee_name?: string | null
          username?: string | null
          verified?: boolean | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          email: string | null
          id: string
          updated_at: string | null
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          email?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          email?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      payment_status_type: "pending" | "captured" | "failed"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
